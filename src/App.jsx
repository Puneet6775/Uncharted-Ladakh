import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home/home'
import About from './Pages/About/about'
import Bike from './Pages/Bikes/bike'
import Contact from './Pages/Contact/contact'

import Floatingicon from './Components/Floatingicon'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HolidayPackages from './Pages/ui-components/HolidayPackages'
import TourDetail from './Pages/ui-components/TourDetail'

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return null;
}




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Floatingicon />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bikes" element={<Bike />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/"      element={<HolidayPackages />} />
        <Route path="/:slug" element={<TourDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
