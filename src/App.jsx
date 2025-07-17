import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Members from "./components/Members";
import Complaints from './components/Complaints';
import ContactUs from './components/ContactUs';
import Donation from "./components/Donation";
import Initiatives from "./components/Initiatives";
import NewsList from "./components/NewsList";
import AdminNews from "./components/AdminNews";
import AdminDashboard from "./components/AdminDashboard"; // ✅ Import added
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

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
            <Route path="/news" element={<NewsList />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/donations" element={<Donation />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/login" element={<Login />} />

            {/* ✅ Protected admin routes */}
            <Route 
              path="/admin/news" 
              element={
                <ProtectedRoute>
                  <AdminNews />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
