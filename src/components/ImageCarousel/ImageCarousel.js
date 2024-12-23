import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div className="carousel-container">
      <img 
        className="carousel-image"
        src={process.env.PUBLIC_URL + '/images/StudyAbroad/' + currentImage.name} 
        alt={currentImage.caption || 'Study Abroad'} 
      />
      <button className="carousel-button carousel-button-prev" onClick={goToPrevious}>‹</button>
      <button className="carousel-button carousel-button-next" onClick={goToNext}>›</button>
      <div className="image-counter">{`${currentIndex + 1} / ${images.length}`}</div>
      {currentImage.caption && (
        <div className="image-caption">{currentImage.caption}</div>
      )}
    </div>
  );
};

export default ImageCarousel;
