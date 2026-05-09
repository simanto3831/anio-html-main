
const body = document.body;
const docEl = document.documentElement;

/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

/**
 * Performs linear interpolation between two numbers.
 * @function
 * @param {number} a - The starting value.
 * @param {number} b - The target value.
 * @param {number} n - Normalization factor, typically between 0 and 1.
 * @returns {number} - Result of the linear interpolation.
 */
const lerp = (a, b, n) => (1 - n) * a + n * b;

/**
 * Calculates the Euclidean distance between two points in a 2D space.
 * @function
 * @param {number} x1 - X-coordinate of the first point.
 * @param {number} y1 - Y-coordinate of the first point.
 * @param {number} x2 - X-coordinate of the second point.
 * @param {number} y2 - Y-coordinate of the second point.
 * @returns {number} - Distance between the two points.
 */
const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

/**
 * Retrieves the current position from a mouse or touch event.
 * @function
 * @param {Event} ev - The mouse or touch event.
 * @returns {Object} - Object containing the x and y coordinates of the cursor or finger.
 */
const getPointerPos = ev => {
    let posx = 0;
    let posy = 0;
    
    // If the event is not provided, use the global window event object.
    if (!ev) ev = window.event;

    // Handle touch events
    if (ev.touches) {
        if (ev.touches.length > 0) { // Check if there are any touches available
            posx = ev.touches[0].pageX;
            posy = ev.touches[0].pageY;
        }
    }
    else if (ev.clientX || ev.clientY) {
        let content = document.querySelector('.content')
        if(content){
            const rect = content.getBoundingClientRect();
            posx = ev.clientX - rect.left;
            posy = ev.clientY - rect.top;
        }
    }


    // Return the position.
    return {x: posx, y: posy};
}

/**
 * Computes the distance between current and last recorded mouse positions.
 * @function
 * @param {Object} mousePos - Current mouse position with x and y coordinates.
 * @param {Object} lastMousePos - Last recorded mouse position with x and y coordinates.
 * @returns {number} - Distance between the two mouse positions.
 */
const getMouseDistance = (mousePos, lastMousePos) => {
    return distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
};

/**
 * Computes the new position in an array after moving by a given offset.
 * The array is treated as circular, meaning subtracting from the beginning 
 * wraps to the end of the array.
 *
 * @function
 * @param {number} position - The starting position in the array.
 * @param {number} offset - The number of positions to move backward.
 * @param {Array} arr - The array in which to compute the new position.
 * @returns {number} The new position in the array after moving by the offset.
 */
const getNewPosition = (position, offset, arr) => {
    // Ensure offset is non-negative and is within the range of the array's length
    const realOffset = Math.abs(offset) % arr.length;
    
    // Check if subtracting the offset stays within the array's bounds
    if (position - realOffset >= 0) {
        return position - realOffset;
    } else {
        // If not, wrap around to the end of the array and compute the new position
        return arr.length - (realOffset - position);
    }
};

/**
 * Set the clip path for each of the clipInnerElements based on the provided grid dimensions.
 * @param {Array} clipInnerElements - The list of elements to set the clip paths on.
 * @param {number} numRows - The number of rows in the grid.
 * @param {number} numCols - The number of columns in the grid.
 */
const setClipPath = (clipInnerElements, numRows, numCols) => {
    if (clipInnerElements.length !== numRows * numCols) {
        console.error('Mismatch between provided grid dimensions and number of elements.');
        return;
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const idx = i * numCols + j;

            const top = (100 / numRows) * i + '%';
            const bottom = (100 / numRows) * (i + 1) + '%';
            const left = (100 / numCols) * j + '%';
            const right = (100 / numCols) * (j + 1) + '%';

            const clipPathValue = `polygon(${left} ${top}, ${right} ${top}, ${right} ${bottom}, ${left} ${bottom})`;

            clipInnerElements[idx].style.clipPath = clipPathValue;
        }
    }
}

// Exporting utility functions for use in other modules.
export {
    preloadImages,
    lerp,
    distance,
    getPointerPos,
    getMouseDistance,
    getNewPosition,
    setClipPath
};



export class Image {
    // Class property initialization with default values.
    // The DOM property holds references to the main and inner elements of the image component.
    DOM = {
        el: null,   // Holds the reference to the main DOM element with class 'content__img'.
        inner: null, // Holds the reference to the inner DOM element with class 'content__img-inner'.
    };
    // Default style properties for the image, initialized with initial values.
    defaultStyle = {
        scale: 1,   // Scale factor of the image, initialized to 1 (original size).
        x: 0,       // Horizontal position of the image, initialized to 0.
        y: 0,       // Vertical position of the image, initialized to 0.
        opacity: 0  // Opacity of the image, initialized to 0 (completely transparent).
    };
    // Property to hold the animation timeline for the image.
    timeline = null;
    // Holds the bounding rectangle of the image element.
    rect = null;

    /**
     * Constructor for the Image class. Initializes the instance, sets up DOM references, and binds events.
     * @param {HTMLElement} DOM_el - The main DOM element for the image, expected to have a child with class 'content__img-inner'.
     **/
    constructor(DOM_el) {
        // Assign the provided DOM element to the 'el' property of the 'DOM' object.
        this.DOM.el = DOM_el;
        // Find and assign the inner element (with class 'content__img-inner') to the 'inner' property of the 'DOM' object.
        this.DOM.inner = this.DOM.el.querySelector('.content__img-inner');
        
        // Call the getRect method to calculate and store the size and position of the image element.
        this.getRect();
        
        // Call the initEvents method to set up event listeners for the image element.
        this.initEvents();
    }

    /**
     * The initEvents method sets up event handlers for the image element, particularly for the window resize event.
     * @returns {void}
     */
    initEvents() {
        // Define the resize method to reset image styles and recalculate its size and position on window resize.
        this.resize = () => {
            // Reset the image styles to default values using GSAP.
            gsap.set(this.DOM.el, this.defaultStyle);
            
            // Recalculate and update the size and position of the image element.
            this.getRect();
        };

        // Add a window resize event listener that calls the defined resize method to handle image adjustments on window resize.
        this.DOM.el.addEventListener('resize', () => this.resize());
    }

    /**
     * The getRect method calculates and stores the size and position of the image element in the 'rect' property.
     * @returns {void}
     */
    getRect() {
        // Use the getBoundingClientRect method to calculate and assign the size and position of the image element to the 'rect' property.
        this.rect = this.DOM.el.getBoundingClientRect();
    }
}

// Initial declaration of mouse position variables with default values
let mousePos, lastMousePos, cacheMousePos;
mousePos = {x: 0, y: 0}; // current mouse position
cacheMousePos = {...mousePos}; // previous mouse position
lastMousePos = {...mousePos}; // stores the position of the mouse at the time the most recent image was displayed, serving as a reference point for calculating the distance the cursor has moved in subsequent frames

// This function will be used to handle both mouse and touch events
const handlePointerMove = (ev) => {
    ev.preventDefault(); // Needed for touch to avoid scrolling
    if (ev.touches && ev.touches.length > 0) {
        mousePos = getPointerPos(ev.touches[0]);
    } else {
        mousePos = getPointerPos(ev);
    }
};

window.addEventListener('mousemove', handlePointerMove);


export class ImageTrail {
    // Class properties initialization
    DOM = {el: null}; // Object to hold DOM elements
    images = []; // Array to store Image objects
    imagesTotal = 0; // Variable to store total number of images
    imgPosition = 0; // Variable to store the position of the upcoming image
    zIndexVal = 1; // z-index value for the upcoming image
    activeImagesCount = 0; // Counter for active images
    isIdle = true; // Flag to check if all images are inactive
    // Mouse distance from the previous trigger, required to show the next image
    threshold = 80;

    /**
     * Constructor for the ImageTrail class.
     * Initializes the instance, sets up the DOM elements, creates Image objects for each image element, and starts the rendering loop.
     * @param {HTMLElement} DOM_el - The parent DOM element containing all image elements.
     */
    constructor(DOM_el) {
        // Store the reference to the parent DOM element.
        this.DOM.el = DOM_el;

        // Create and store Image objects for each image element found within the parent DOM element.
        this.images = [...this?.DOM?.el.querySelectorAll('.content__img')].map(img => new Image(img));
        
        // Store the total number of images.
        this.imagesTotal = this.images.length;

        const onPointerMoveEv = () => {
            // Initialize cacheMousePos with the current mousePos values.
            // This is necessary to have a reference point for the initial mouse position.
            cacheMousePos = {...mousePos};
            // Initiate the rendering loop.
            requestAnimationFrame(() => this.render());
            // Remove this mousemove event listener after it runs once to avoid reinitialization.
            window.removeEventListener('mousemove', onPointerMoveEv);
        };
        // Set up an initial mousemove event listener to run onMouseMoveEv once.
        window.addEventListener('mousemove', onPointerMoveEv);
    }

    /**
     * Retrieves the current position from a mouse or touch event.
     * @function
     * @param {Event} ev - The mouse or touch event.
     * @returns {Object} - Object containing the x and y coordinates of the cursor or finger.
     */
    getPointerPos = ev => {
        let posx = 0;
        let posy = 0;
        
        // If the event is not provided, use the global window event object.
        if (!ev) ev = window.event;
    
        // Handle touch events
        if (ev.touches) {
            if (ev.touches.length > 0) { // Check if there are any touches available
                posx = ev.touches[0].pageX;
                posy = ev.touches[0].pageY;
            }
        }
        else if (ev.clientX || ev.clientY) {
            const rect = this.DOM.el.getBoundingClientRect();
            posx = ev.clientX - rect.left;
            posy = ev.clientY - rect.top;
        }
    
    
        // Return the position.
        return {x: posx, y: posy};
    }

    /**
     * The `render` function is the main rendering loop for the `ImageTrail` class, updating images based on mouse movement.
     * It calculates the distance between the current and the last mouse position, then decides whether to show the next image.
     * @returns {void} 
     */
    render() {
        // Calculate distance between current mouse position and last recorded mouse position.
        let distance = getMouseDistance(mousePos, lastMousePos);
        
        // Smoothly interpolate between cached mouse position and current mouse position for smoother visual effects.
        cacheMousePos.x = lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
        cacheMousePos.y = lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

        // If the calculated distance is greater than the defined threshold, show the next image and update lastMousePos.
        if ( distance > this.threshold ) {
            this.showNextImage();
            lastMousePos = mousePos;
        }

        // If all images are inactive (isIdle is true) and zIndexVal is not 1, reset zIndexVal to avoid endless incrementation.
        if ( this.isIdle && this.zIndexVal !== 1 ) {
            this.zIndexVal = 1;
        }

        // Request the next animation frame, creating a recursive loop for continuous rendering.
        requestAnimationFrame(() => this.render());
    }

    /**
     * The `showNextImage` function is responsible for displaying, animating, and managing the next image in the sequence.
     * It increments the zIndexVal, selects the next image, stops ongoing animations, and defines a series of GSAP animations.
     * @returns {void} 
     */
    showNextImage() {
        // Increment zIndexVal for next image.
        ++this.zIndexVal;
    
        // Select the next image in the sequence, or revert to the first image if at the end of the sequence.
        this.imgPosition = this.imgPosition < this.imagesTotal-1 ? this.imgPosition+1 : 0;
        
        // Retrieve the Image object for the selected position.
        const img = this.images[this.imgPosition];
        
        // Stop any ongoing GSAP animations on the target image element to prepare for new animations.
        gsap.killTweensOf(img.DOM.el);

        // Define GSAP timeline.
        img.timeline = gsap.timeline({
            onStart: () => this.onImageActivated(),
            onComplete: () => this.onImageDeactivated()
        })
        // Animate position
        .fromTo(img.DOM.el, {
            opacity: 1,
            scale: 1,
            zIndex: this.zIndexVal,
            x: cacheMousePos.x - img.rect.width/2 ,
            y: cacheMousePos.y - img.rect.height/2
        }, {
            duration: 0.4,
            ease: 'power1',
            x: mousePos.x - img.rect.width/2,
            y: mousePos.y - img.rect.height/2
        }, 0)
        // then make it disappear
        .to(img.DOM.el, {
            duration: 0.4,
            ease: 'power3',
            opacity: 0,
            scale: 0.2
        }, 0.4)
    }
    
    /**
     * onImageActivated function is called when an image's activation (display) animation begins.
     * It increments the activeImagesCount and sets isIdle flag to false.
     * @returns {void}
     */
    onImageActivated = () => {
        // Increment the counter for active images.
        this.activeImagesCount++;

        // Set the isIdle flag to false as there's at least one active image.
        this.isIdle = false;
    }
    /**
     * onImageDeactivated function is called when an image's deactivation (disappearance) animation ends.
     * It decrements the activeImagesCount and sets isIdle flag to true if no images are active.
     * @returns {void}
     */
    onImageDeactivated = () => {
        // Decrement the counter for active images.
        this.activeImagesCount--;

        // If there are no active images, set the isIdle flag to true.
        if (this.activeImagesCount === 0) {
            this.isIdle = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const bannerSection = document.querySelector('.home8-banner-section');
    if (!bannerSection) return; // Exit if section is not on the page

    // 1️⃣ Set background images only inside this section
    bannerSection.querySelectorAll('.bg-img').forEach(el => {
        const bg = el.dataset.background;
        if (bg) el.style.backgroundImage = `url(${bg})`;
    });

    // 2️⃣ Preload images only inside this section
    preloadImages('.home8-banner-section .content__img-inner').then(() => {
        document.body.classList.remove('loading');

        // 3️⃣ Initialize ImageTrail only for this section
        const content = bannerSection.querySelector('.content');
        if(content){
            new ImageTrail(content);
        }
    });

});
