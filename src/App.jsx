import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import './index.css'
import About from "./components/about/About"
import Forecast from "./components/forecast/Forecast"

function App() {
  

  return (
    <>
    <Header />
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/weather" element={<Forecast />} />



    </Routes>
    <Footer />

    </>

  )
}

export default App
