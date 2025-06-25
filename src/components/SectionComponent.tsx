import { FC} from "react";
import styles from "../pages/mainpage/MainPage.module.css";
import { SectionProps } from "../types";

const Section: FC<SectionProps> = ({ id, title, className = "", children }) => {
  return (
    <section
      id={id}
      className={`${styles.section} ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <h3 id={`${id}-heading`} className={styles.sectionTitle}>
        {title}
      </h3>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
};

export default Section;
