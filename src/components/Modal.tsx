// import React, { FC, useEffect } from "react";
// import { X } from "lucide-react";
// import { AlertDialog } from "@radix-ui/react-alert-dialog";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title?: string;
//   children: React.ReactNode;
//   className?: string;
// }

// const Modal: FC<ModalProps> = ({
//   isOpen,
//   onClose,
//   title,
//   children,
//   className,
// }) => {
//   if (!isOpen) return null;

//   // Обработчик клика вне модального окна
//   const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };

//     if (isOpen) window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isOpen, onClose]);
//   return (
//     // <div className={className} onClick={handleOutsideClick}>
//     //   <div className="bg-gray-100 rounded-lg w-full max-w-md shadow-lg">
//     //     <div className="flex justify-between items-baseline py-6 border-b border-gray-300">
//     //       <h2 className="text-xl mx-auto ml-4 font-semibold text-gray-800">{title}</h2>
//     //       <Button
//     //         onClick={onClose}
//     //         className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
//     //       >
//     //         <X size={30} />
//     //       </Button>
//     //     </div>

//     //   </div>
//     //   <div className={className}>
//     //     {children}</div>
//     // </div>
//     <div className={className} onClick={handleOutsideClick}>
//       <div>{title}</div>
//       <Button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
//         aria-label="Закрыть"
//       >
//         <X size={30}/>
//       </Button>

//       {/* Контент */}
//       <div className="p-6">{children}</div>
//       {/* Футер */}
//       <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100">
//         Нажимая кнопку, вы соглашаетесь с{" "}
//         <a href="#" className="text-blue-600 hover:underline">
//           политикой конфиденциальности
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { FC, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

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
  // Блокировка скролла при открытии модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Обработчик клика вне модального окна
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Обработчик Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={className}
      onClick={handleOutsideClick}
    >
      {/* Затемненный фон с блокировкой взаимодействия */}
      {/* <div className="absolute inset-0  bg-opacity-60 backdrop-blur-sm" /> */}
      {/* Контейнер модального окна */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300">
        {/* Кнопка закрытия */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
          variant="ghost"
          size="icon"
          aria-label="Закрыть"
        >
          <X size={24} />
        </Button>
        {/* Контент */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
