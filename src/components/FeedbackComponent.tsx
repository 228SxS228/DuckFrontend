import { FC, useState } from "react";
import { ImageTextBlockProps } from "../model/types";
import styles from "../pages/mainpage/MainPage.module.css";

const FeedbackComponent: FC<ImageTextBlockProps> = ({ mediaItems }) => {
  const [
    currentMediaIndex,
    // setCurrentMediaIndex
  ] = useState(0);
  const currentMedia = mediaItems[currentMediaIndex];
  const [
    iframeError,
    // setIframeError
  ] = useState(false);
  return (
    <div>
      {!iframeError ? (
        <iframe
          src={currentMedia.src}
          title={`Встроенный контент ${currentMediaIndex + 1}`}
          className={`w-full h-64 md:h-96 rounded-lg ${
            currentMedia.className || ""
          }`}
          allowFullScreen
          loading="lazy"
        />
      ) : (
        iframeError && (
          <div className={styles.error}>Не удалось загрузить отзывы</div>
        )
      )}
    </div>
  );
};

export default FeedbackComponent;
