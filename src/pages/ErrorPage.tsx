import { FC } from "react";
import {useNavigate } from "react-router";

const ErrorPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Страница не найдена
        </h2>
        <p className="text-gray-600 mb-8">
         Ой..., запрашиваемая страница не существует.
        </p>
        <button onClick={() => navigate("/")} className="px-6 py-3">
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;