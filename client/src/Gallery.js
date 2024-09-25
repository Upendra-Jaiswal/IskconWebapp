import React, { useState, useEffect } from "react";
import galleryData from "./jsonfiles/gallery.json"; // Import the JSON data
import photogallery01 from "./assets/photogallery01.jpg";
import photogallery02 from "./assets/photogallery02.jpg";
import photogallery03 from "./assets/photogallery03.jpg";
import photogallery04 from "./assets/photogallery04.jpg";
import photogallery05 from "./assets/photogallery05.jpg";
import photogallery06 from "./assets/photogallery06.jpg";
import photogallery07 from "./assets/photogallery07.jpg";
import photogallery08 from "./assets/photogallery08.jpg";
import photogallery09 from "./assets/photogallery09.jpg";
import photogallery10 from "./assets/photogallery10.jpg";
import photogallery11 from "./assets/photogallery11.jpg";
import photogallery12 from "./assets/photogallery12.jpg";
import image from "./assets/bgimg.png";

const imagesMap = {
  "photogallery01.jpg": photogallery01,
  "photogallery02.jpg": photogallery02,
  "photogallery03.jpg": photogallery03,
  "photogallery04.jpg": photogallery04,
  "photogallery05.jpg": photogallery05,
  "photogallery06.jpg": photogallery06,
  "photogallery07.jpg": photogallery07,
  "photogallery08.jpg": photogallery08,
  "photogallery09.jpg": photogallery09,
  "photogallery10.jpg": photogallery10,
  "photogallery11.jpg": photogallery11,
  "photogallery12.jpg": photogallery12,
};

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  // Load gallery images from JSON
  useEffect(() => {
    setGallery(galleryData.images);
  }, []);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc); // Set the selected image to show in the modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal
  };

  const handleBackgroundClick = (e) => {
    // If the click is outside the image, close the modal
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  return (
    // <div className="min-h-screen" style={{ backgroundImage: "url(" + image + ")" }}>

    <div className="bg-backgroundimg min-h-screen">
      {/* Heading */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">
          ISKCON Photo Gallery
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore the beauty of ISKCON through photos
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((image) => (
            <div
              key={image.id}
              className="bg-white shadow-lg hover:shadow-2xl rounded overflow-hidden transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(imagesMap[image.src])} // On click, open the modal with the selected image
            >
              <img
                src={imagesMap[image.src]}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          id="modal-background"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackgroundClick} // Handle click on background
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full rounded"
            />
            <button
              className="absolute top-2 right-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg"
              onClick={closeModal}
            >
              &times; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
