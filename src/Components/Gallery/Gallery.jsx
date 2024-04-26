import { useEffect, useState } from 'react';
import './Gallery.css';
import axios from 'axios';

function Gallery({ offset }) {
    // State variables
    const [limit, setLimit] = useState(20);
    const [galleryImages, setGalleryImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch images from API
    const fetchImages = async () => {
        setLoading(true); // Set loading state to true before making the API request
        const imagesUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`;
        try {
            const response = await axios.get(imagesUrl);
            const data = response.data;
            console.log(data);
            const images = data.photos;
            setGalleryImages(images);
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            setLoading(false); // Set loading state to false after the data is fetched
        }
    };

    // Function to handle image click event
    const handleImageClick = (imageId) => {
        // Navigate to image details page
        window.location.href = `/gallery/img-details/${imageId}?offset=${offset}`;
    };

    // Fetch images on component mount and when offset or limit changes
    useEffect(() => {
        fetchImages();
    }, [offset, limit]);

    // Render gallery component
    return (
        <>
            {/* Display loading message while images are being fetched */}
            {loading ? (
                <div className='loading'>
                    <h1>Loading...</h1>
                </div>
            ) : (
                // Render gallery images when loaded
                <div className='images-main-container'>
                    {galleryImages.map((obj) => (
                        <img id='image' onClick={() => handleImageClick(obj.id)} src={obj.url} key={obj.id} />
                    ))}
                </div>
            )}
            {/* Display footer when offset reaches 120 */}
            {offset === 120 && (
                <h1 className='footer'>Images are over !!!</h1>
            )}
        </>
    );
}

export default Gallery;
