import { useState } from 'react';
import './Button.css';

function Buttons({ onOffsetChange, offset }) {
    // Event handler for clicking the previous button
    const handlePrev = () => {
        // Calculate the new offset for previous page
        const newOffset = offset - 20;
        // Ensure the offset doesn't go below 0
        if (newOffset >= 0) { 
            // Call the callback function to update offset
            onOffsetChange(newOffset);
        }
    };

    // Event handler for clicking the next button
    const handleNext = () => {
        // Calculate the new offset for next page
        const newOffset = offset + 20;
        // Ensure the offset doesn't exceed 120
        if (newOffset <= 120) {
            // Call the callback function to update offset
            onOffsetChange(newOffset);
        }
    };

    return (
        <div className='scrollable-container'>
            {/* Button container */}
            <div className='buttons'>
                {/* Previous button */}
                <button disabled={offset === 0} onClick={handlePrev}>Prev</button>
                {/* Next button */}
                <button disabled={offset === 120} onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Buttons;
