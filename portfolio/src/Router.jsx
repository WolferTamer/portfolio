import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import NextNest from "./pages/NextNest.jsx";
import Skills from "./pages/Skills.jsx";
import ColorPalette from "./pages/ColorPalette.jsx";
  
  export default function Router () {
    return (<BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/nextnest" element={<NextNest/>}/>
        <Route path="/colorpalette" element={<ColorPalette/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="*" element={<h2>404 No Content</h2>} />
      </Routes>
    </BrowserRouter>)
  }