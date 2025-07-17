import { useState } from "react"; 
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/iphrd.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Clickable Logo & Website Name */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="IPHRD Logo" className="h-8 w-auto sm:h-10" />
            <span className="text-[#2B256E] font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide hover:text-[#88C641] transition">
              Young Women Mediation Network
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-[#2B256E] hover:text-[#88C641]">Home</Link>
            <Link to="/initiatives" className="text-[#2B256E] hover:text-[#88C641]">Initiatives</Link>
            <Link to="/about" className="text-[#2B256E] hover:text-[#88C641]">About Us</Link>
            <Link to="/members" className="text-[#2B256E] hover:text-[#88C641]">Members</Link>
            <Link to="/news" className="text-[#2B256E] hover:text-[#88C641]">News</Link>
            <Link to="/contact" className="text-[#2B256E] hover:text-[#88C641]">Contacts Us</Link>
            <Link to="/complaints" className="text-[#2B256E] hover:text-[#88C641]">Complaints</Link>
            <Link 
              to="/donations"
              className="bg-[#88C641] text-white px-4 py-2 rounded-md hover:bg-[#2B256E] transition"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button type="button" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/initiatives" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Initiatives</Link>
            <Link to="/about" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/members" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Members</Link>
            <Link to="/news" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>News</Link>
            <Link to="/contact" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Contacts Us</Link>
            <Link to="/complaints" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Complaints</Link>
            <Link 
              to="/donations"
              className="bg-[#88C641] text-white px-4 py-2 rounded-md hover:bg-[#2B256E] transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
