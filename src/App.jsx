import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Register/Auth"
import Home from "./components/HomePage/Home"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./Profile/Profile"
import LandingPage from "./components/LandingPage/LandingPage"

function App() {
  return (
    
    <BrowserRouter>
        <Navbar className="absolute"></Navbar>

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App