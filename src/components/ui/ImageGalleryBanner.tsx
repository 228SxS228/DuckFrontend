import React, { useState, useEffect } from 'react';

interface ImageGalleryBannerProps {
  images: string[];
  interval?: number;
  height?: string;
}

const ImageGalleryBanner: React.FC<ImageGalleryBannerProps> = ({
  images,
  interval = 5000,
  height = 'h-96'
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered && images.length > 0) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [isHovered, images.length, interval]);

  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  if (images.length === 0) {
    return <div className={`${height} w-full bg-gray-200 flex items-center justify-center`}>
      <p>No images provided</p>
    </div>;
  }

  return (
    <div 
      className={`relative ${height} w-full overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
        }}
        aria-label={`Изображение ${currentImageIndex + 1} из ${images.length}`}
        role="img"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all"
            aria-label="Предыдущее изображение"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all"
            aria-label="Следующее изображение"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                aria-label={`Перейти к изображению ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGalleryBanner;