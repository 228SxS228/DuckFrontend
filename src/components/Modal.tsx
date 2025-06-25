import React, { FC } from 'react';
// import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;

}

const Modal:FC<ModalProps> = ({isOpen, onClose, title, children}) => {
  if (!isOpen) return null;

  // Обработчик клика вне модального окна
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-4 z-50"
        onClick={handleOutsideClick} 
      >
        <div className="bg-gray-100 rounded-lg w-full max-w-md shadow-lg">
          <div className="flex justify-between items-center py-6 border-b border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-200 rounded-lg transition-colors text-gray-800 bg-black"
            >
              {/* <X size={20} /> */}
            </button>
          </div>
          <div className="p-4 text-gray-700">{children}</div>
        </div>
      </div>
    );
};


export default Modal;