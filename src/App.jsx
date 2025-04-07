import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import './index.css'
import About from "./components/about/About"

function App() {
  

  return (
    <>
    <Header />
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />



    </Routes>
    <Footer />

    </>

  )
}

export default App
