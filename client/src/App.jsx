import './App.css'
import Home from './views/Home'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AboutUs from './views/AboutUs'
import ContactUs from './views/ContactUs'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
