import { useEffect, useState } from 'react'
import './App.css'
import Buttons from './Components/Button/Button'
import Gallery from './Components/Gallery/Gallery'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      {/* Link to Gallery */}
    <Link className='heading-link' to={'/'}>
        <h1 className='heading' >React Image Gallery</h1>
    </Link>
        {/* Render Custom Routes */}
        <CustomRoutes />

    </>
  )
}

export default App
