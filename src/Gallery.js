import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

// Example gallery images (replace with your own)
const galleryImages = [
  "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/RCT.gif",
  "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Crowns.gif",
  "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Fillings-1-1.gif",
  "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Implants.gif",
  "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dentures.gif",
  "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Kids-Dentistery.gif",
];

function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-white min-h-screen">
      {/* Page Title */}
      <div className="text-center mb-8">
        <Typography variant="h2" className="font-bold text-orange-900">
          Our Gallery
        </Typography>
        <Typography variant="small" className="text-gray-700 mt-2">
          Check out some of our dental procedures and patient care.
        </Typography>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((img, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
              onClick={() => window.open(img, "_blank")}
            />
          </Card>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/HomePage")}
          className="bg-orange-700 text-white px-6 py-2 rounded-lg hover:bg-orange-800 transition-colors font-semibold"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Gallery;
