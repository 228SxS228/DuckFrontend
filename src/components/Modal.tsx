import React, { FC, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  // Обработчик клика вне модального окна
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  return (
    <div
      className="fixed  inset-0 bg-opacity-50 flex items-center justify-center py-4 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-gray-100 rounded-lg w-full max-w-md shadow-lg">
        <div className="flex  justify-between items-center py-6 border-b border-gray-300">
          <h2 className="text-xl mx-auto ml-4 font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="mr-5 mx-auto hover:bg-gray-200 rounded-lg transition-colors text-gray-800 "
          >
            <X size={30} />
          </button>
        </div>
        <div className="p-4 text-gray-700 ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
