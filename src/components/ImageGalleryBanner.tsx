import { useEffect, useState } from "react";

interface ImageGalleryBannerProps {
  images: string[];
  interval?: number;
  height?: string;
}

const ImageGalleryBanner: React.FC<ImageGalleryBannerProps> = ({
  images,
  height = "h-[500px]",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <div className={`relative ${height} w-full overflow-hidden rounded-2xl`}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
};
export default ImageGalleryBanner