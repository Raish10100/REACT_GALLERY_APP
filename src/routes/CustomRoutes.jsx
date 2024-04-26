import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../Components/HomePage/HomePage'; // Importing HomePage component
import ImageDetails from '../Components/ImageDetails/ImageDetails'; // Importing ImageDetails component
import NoPageFound from '../Components/No page found/NoPage'; // Importing NoPageFound component

function CustomRoutes() {
    // Rendering routes for different components
    return (
        <Routes>
            {/* Route for the homepage */}
            <Route path='/' element={<HomePage />} />
            {/* Route for viewing image details */}
            <Route path='/gallery/img-details/:id' element={<ImageDetails />} />
            {/* Route for displaying a page not found message */}
            <Route path='*' element={<NoPageFound />} />
        </Routes>
    );
}

export default CustomRoutes;
