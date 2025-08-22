import React, { useState, useEffect } from "react";

interface ResourceTracker {
  images: HTMLImageElement[];
  promises: Promise<void>[];
}

const DuckLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState(
    "Плавательный центр «Утенок» готовится к погружению..."
  );

  // Функция для отслеживания всех ресурсов
  const trackAllResources = async () => {
    const resources: ResourceTracker = {
      images: [],
      promises: [],
    };

    // Собираем все изображения
    document.querySelectorAll("img").forEach((img) => {
      if (!img.complete) {
        const promise = new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Продолжаем даже при ошибках
        });
        resources.promises.push(promise);
        resources.images.push(img);
      }
    });

      return resources;
  };

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const simulateProgress = () => {
      if (!isMounted) return;

      setProgress((prev) => {
        const newProgress = prev + 1;

        // Меняем сообщения на разных этапах загрузки
        if (newProgress === 30) setMessage("Подготавливаем бассейны...");
        if (newProgress === 60) setMessage("Надуваем плавательные круги...");
        if (newProgress === 80) setMessage("Последние приготовления...");

        if (newProgress >= 100) {
          finishLoading();
          return 100;
        }

        // Замедление по мере приближения к 100%
        const delay = newProgress > 90 ? 100 : newProgress > 70 ? 50 : 20;
        timeoutId = setTimeout(simulateProgress, delay);
        return newProgress;
      });
    };

    const finishLoading = () => {
      setTimeout(() => {
        if (isMounted) {
          setIsVisible(false);
          document.body.classList.remove("duck-loader-active");
        }
      }, 800);
    };

    const startLoading = async () => {
      // Добавляем класс к body для блокировки прокрутки
      document.body.classList.add("duck-loader-active");

      // Начинаем симуляцию прогресса
      timeoutId = setTimeout(simulateProgress, 50);

      try {
        // Ожидаем загрузки всех ресурсов
        const resources = await trackAllResources();
        await Promise.all(resources.promises);

        // Если все ресурсы загрузились быстрее, чем прогресс дошел до 100%
        if (isMounted && progress < 100) {
          setProgress(100);
          setMessage("Всё готово! Погружаемся...");
          finishLoading();
        }
      } catch (error) {
        console.error("Ошибка загрузки ресурсов:", error);
        if (isMounted) {
          setProgress(100);
          setMessage("Готово! Не все элементы загрузились идеально...");
          finishLoading();
        }
      }
    };

    startLoading();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-blue-50 z-[9999] flex flex-col items-center justify-center">
      {/* Анимированная утка */}
      <div className="relative mb-8 animate-float">
        {/* Тело утки */}
        <div className="w-32 h-20 bg-yellow-400 rounded-full relative">
          {/* Голова */}
          <div className="absolute -top-8 right-0 w-20 h-20 bg-yellow-400 rounded-full"></div>

          {/* Глаз */}
          <div className="absolute top-2 right-6 w-4 h-4 bg-white rounded-full">
            <div className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></div>
          </div>

          {/* Клюв */}
          <div className="absolute top-8 right-0 w-10 h-6 bg-orange-500 rounded-r-lg"></div>

          {/* Крыло */}
          <div className="absolute top-8 left-4 w-12 h-8 bg-yellow-500 rounded-full"></div>

          {/* Волны вокруг утки */}
          <div className="absolute -bottom-4 left-0 w-full flex justify-between">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-3 bg-blue-400 rounded-full animate-wave"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Прогресс-бар в виде воды */}
      <div className="w-64 h-4 bg-blue-200 rounded-full overflow-hidden relative">
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        >
          {/* Пузырьки */}
          {progress < 100 &&
            [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-70 animate-bubble-rise"
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  bottom: `${Math.random() * 15}px`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              ></div>
            ))}
        </div>
      </div>

      {/* Процент загрузки */}
      <div className="mt-4 text-blue-700 font-bold text-xl animate-pulse">
        {progress}%
      </div>

      {/* Сообщение */}
      <p className="mt-4 text-blue-900 max-w-xs text-center px-4">{message}</p>
    </div>
  );
};

export default DuckLoader;
