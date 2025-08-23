import React, { FC, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Блокировка скролла при открытии модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [isOpen]);

  // Обработчик Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Фокусировка на модалке при открытии
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();

      // Добавляем классы анимации только после первого рендера
      if (!isFirstRender.current) {
        setTimeout(() => {
          if (backdropRef.current) {
            backdropRef.current.classList.add("modal-enter");
          }
          if (modalRef.current) {
            modalRef.current.classList.add("modal-enter");
          }
        }, 10);
      }
    }

    isFirstRender.current = false;
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className={`relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden ${className}`}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-500 hover:text-gray-700 transition-colors"
          variant="ghost"
          size="icon"
          aria-label="Закрыть"
        >
          <X size={24} />
        </Button>

        <div className="overflow-x-auto">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
