import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
  
  export default function Router () {
    return (<BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<h2>404 No Content</h2>} />
      </Routes>
    </BrowserRouter>)
  }