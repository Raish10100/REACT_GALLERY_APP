import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import './ImageDetails.css'
import Buttons from "../Button/Button";

function ImageDetails(){
    const[url,setUrl] = useState()
    const[title,setTitle] = useState()
    const[description,setDescription] = useState()

   

    const { id } = useParams()
    const fetchImages = async () => {
        // setLoading(true); // Set loading state to true before making the API request
        const imageDetailsUrl = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;
        try {
            const response = await axios.get(imageDetailsUrl);
            const data = response.data;
            console.log(data)
            const Image = data.photo;
            // console.log(`ImagesUrl>>>>> ${Image.url}`)
            const imageUrl = Image.url
            console.log(`Image url --> ${imageUrl}`)
setUrl(imageUrl)

            const imageTitle = Image.title
           setTitle(imageTitle);

           const imageDescription = Image.description
        //    console.log(imageDescription)
            setDescription(imageDescription)

            // setGalleryImages(images);
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            // setLoading(false); // Set loading state to false after the data is fetched
        }
    };
  

    useEffect(() => {
        fetchImages()
    },[])

    return (
        <>
        <div className="img-details-container">
            <div className="image">
           <img src={url} />
            </div>

            <div className="title-description">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
            </div>
        </div>
        </>
    )
}

export default ImageDetails;