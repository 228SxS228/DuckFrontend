import { FC } from "react";
import styles from "../pages/mainpage/MainPage.module.css";

// Компонент для опасного HTML (только для доверенного контента!)
const UnsafeHTML: FC<{ html: string }> = ({ html }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    className={styles.unsafeContent}
  />
);

export default UnsafeHTML;
