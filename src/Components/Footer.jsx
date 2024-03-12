import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media Section */}
        <div>
          <h5 className="text-xl font-bold mb-6">SOCIAL MEDIA</h5>
          {/* Icons or images for social media */}
          {/* Add your social media icons here */}
        </div>

        {/* Menu Section */}
        <div>
          <h5 className="text-xl font-bold mb-6">MENU</h5>
          <ul>
            <li className="mb-2">HOME</li>
            <li className="mb-2">Islamic Courses</li>
            <li className="mb-2">Islamic School</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Media</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Donate</li>
            <li className="mb-2">Sign up Mailing List</li>
            {/* Add more menu items as necessary */}
          </ul>
        </div>

        {/* Donate Section */}
        <div>
          <h5 className="text-xl font-bold mb-6">DONATE</h5>
          <p className="mb-6">
            "Every act of goodness is charity." - Sahih Muslim
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Donate
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">© 2024 Abu Huraira Center</div>
    </footer>
  );
};

export default Footer;
