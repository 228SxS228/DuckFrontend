import { ReactNode } from "react";

export interface MediaItem {
  type: "image" | "iframe"; // явное указание литералов
  src: string;
  alt?: string; // сделано опциональным
  loading?: "lazy" | "eager"; // фиксированные значения
  className?: string;
}

export interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children?: React.ReactNode; // Добавляем поддержку children
}


export interface ImageTextBlockProps {
  text?: string;
  htmlContent?: string;
  children?: ReactNode;
  mediaItems: MediaItem[];
  imagePosition?: "left" | "right";
  textClassName?: string;
  containerClassName?: string;
}

export interface FaqText {
  question: string;
  answer: string;
}

//Программы в компоненте программы для отображения модалки

export interface Program {
  title: string;
  description: string;
  schedule: string;
  icon: React.ReactNode;
  photoProgram: string;
  description2: string;
  age: string;
  duration: string;
  features: string[];
}
