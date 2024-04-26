import { useState } from "react";
import './HomePage.css';
import Buttons from "../Button/Button";
import Gallery from "../Gallery/Gallery";

function HomePage() {
    // State variable for offset
    const [offset, setOffset] = useState(0);

    // Function to handle offset change
    const handleOffsetChange = (newOffset) => {
        setOffset(newOffset);
    };

    return (
        <>
            {/* Render buttons component with offset change handler */}
            <Buttons offset={offset} onOffsetChange={handleOffsetChange} />
            {/* Render gallery component with current offset */}
            <Gallery className="images-container" offset={offset} />
            {/* Render buttons component again for pagination */}
            <Buttons offset={offset} onOffsetChange={handleOffsetChange} />
        </>
    );
}

export default HomePage;
