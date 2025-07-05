import { useEffect, useState } from "react";
import DuckLoader from "./components/DuckLoader";
import AppRoutes from "./router";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Для демонстрации - в реальном приложении уберите setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <DuckLoader />}
      {/* <RouterProvider router={appRouter} /> */}
      <div className={isLoading ? "hidden" : "block"}>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
