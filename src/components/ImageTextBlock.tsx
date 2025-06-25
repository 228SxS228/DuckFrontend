import React, { useState, useCallback } from "react";
import { ImageTextBlockProps } from "../types";

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  text,
  htmlContent,
  children,
  mediaItems,
  imagePosition = "left",
  textClassName = "",
  containerClassName = "",
}) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const hasMultipleMedia = mediaItems.length > 1;

  const handleNextMedia = useCallback(() => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  }, [mediaItems.length]);

  const handlePrevMedia = useCallback(() => {
    setCurrentMediaIndex(
      (prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length
    );
  }, [mediaItems.length]);

  const currentMedia = mediaItems[currentMediaIndex];

  const renderMedia = useCallback(
    () => (
      <div className="relative w-full md:w-1/2">
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.src}
            alt={currentMedia.alt || `Media ${currentMediaIndex + 1}`}
            className={`w-full h-64 md:h-96 object-cover rounded-lg ${
              currentMedia.className || ""
            }`}
            loading="lazy"
          />
        ) : (
          <iframe
            src={currentMedia.src}
            title={`Embedded content ${currentMediaIndex + 1}`}
            className={`w-full h-64 md:h-96 rounded-lg ${
              currentMedia.className || ""
            }`}
            allowFullScreen
            loading="lazy"
          />
        )}

        {hasMultipleMedia && (
          <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
            <button
              onClick={handlePrevMedia}
              className="bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition pointer-events-auto"
              aria-label="Previous media"
            >
              &larr;
            </button>
            <button
              onClick={handleNextMedia}
              className="bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition pointer-events-auto"
              aria-label="Next media"
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    ),
    [
      currentMedia,
      currentMediaIndex,
      hasMultipleMedia,
      handlePrevMedia,
      handleNextMedia,
    ]
  );

  const renderContent = useCallback(() => {
    if (children) {
      return <div className={textClassName}>{children}</div>;
    }
    if (htmlContent) {
      return (
        <div
          className={textClassName}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      );
    }
    return <p className={`text-gray-700 text-lg ${textClassName}`}>{text}</p>;
  }, [children, htmlContent, text, textClassName]);

  return (
    <div
      className={`flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg shadow-lg ${containerClassName}`}
    >
      {imagePosition === "left" && renderMedia()}

      <div className="w-full md:w-1/2 flex items-center">{renderContent()}</div>

      {imagePosition === "right" && renderMedia()}
    </div>
  );
};

export default ImageTextBlock;