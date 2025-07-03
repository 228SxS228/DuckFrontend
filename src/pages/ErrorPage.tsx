import { Button } from "@/components/ui/button";
import { RouteNames } from "@/router";
import { FC } from "react";
import { Link } from "react-router-dom";

const ErrorPage: FC = () => {
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
        <Button className="px-6 py-3">
          <Link to={RouteNames.HOME}>Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;