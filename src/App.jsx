import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Members from "./components/Members"; 

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </div>
        <Footer />  
      </div>
    </BrowserRouter>
  );
}

export default App;
