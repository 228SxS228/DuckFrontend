import { FC } from "react";
import { Button } from "./ui/button";
import baa from "@/static/DSC_7757.jpg";
import videoplayback  from "@/static/videoplayback.mp4";
import DuckComponent from "./WaveComponent"
import WaveComponent from "./WaveComponent";



const VideoBanner: FC = () => {
    //раскоментить
  // Валидация источников медиа
  // const validateMediaSource = (url: string | undefined) => {
  //   if (!url) return "";
  //   try {
  //     new URL(url);
  //     return url;
  //   } catch {
  //     return "";
  //   }
  // };
  //раскоментить
  //const safeVideoSrc = validateMediaSource(import.meta.env.VITE_VIDEO_SRC);
  // const safeImageSrc = validateMediaSource(import.meta.env.VITE_DEFAULT_IMG);

  return (
    <section>
      {/* <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/60 z-10" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-3xl" />
            </div> */}
      {/* <div className=" relative inset-0 flex items-end justify-end bg-sky-100">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-10 w-16 items-end justify-end rounded-full bg-sky-600 text-white">
            {safeVideoSrc && (
              <div className="hidden md:block absolute inset-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=" object-cover scale-105"
                  poster={baa}
                  aria-label="Фоновое видео"
                >
                  <source src={safeVideoSrc} type="video/mp4" />
                </video>
                {safeImageSrc && (
                  <div className=" object-cover bg-gray-100">
                    <img
                      src={safeImageSrc}
                      alt="logo"
                      className="object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                >
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <p className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</p>
                <p className="text-white font-medium">{stat.text}</p>
              </div>
        </div>
      </div> */}
      <div
        className="
        h-[55rem]
        grid md:grid-cols-2 gap-6 
        md:gap-12
        py-20 md:py-32 "
        style={{
          backgroundImage: `url(${baa})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-5 md:p-8 relative overflow-hidden">
          {/* <DuckComponent/> */}
          <div className="max-w-3xl">
            {/* <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Откройте для себя{" "}
              <span className="text-yellow-400">радость плавания</span>
            </h1> */}
            <h1 className=" text-5xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Ваш ребенок полюбит
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                ПЛАВАНИЕ
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Профессиональное обучение плаванию для детей от 3 месяцев до 10
              лет в современном центре с опытными тренерами
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="hover:bg-yellow-500 rounded-full px-8 text-black bg-[rgba(255,235,0,1)] cursor-pointer"
              >
                Записаться
              </Button>
              <Button
                size="lg"
                className="border-white bg-white hover:bg-gray-200 rounded-full px-8 text-black cursor-pointer"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden">
          <div className="max-w-3xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className=" object-cover scale-105"
              poster={baa}
              aria-label="Фоновое видео"
            >
              <source src={videoplayback} type="video/mp4" /> 
            </video>
          </div>
        </div> */}
      </div>
      <WaveComponent />
    </section>

    // <section className="py-16">
    //   <div className="container mx-auto px-4">
    //     <div className="mb-12 text-center">
    //       <h2 className="mb-4 text-3xl font-bold text-sky-800 md:text-4xl">
    //         Добро пожаловать в "Утенок"
    //       </h2>
    //       <p className="mx-auto max-w-2xl text-lg text-gray-600">
    //         Познакомьтесь с нашим центром и узнайте, почему родители выбирают
    //         нас для обучения своих детей плаванию
    //       </p>
    //     </div>
    //     <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-gray-100 shadow-lg">
    //       <div className="aspect-w-16 aspect-h-9 relative h-0 pb-[56.25%]">
    //         {/* видос*/}
    //         <div className="absolute inset-0 flex items-center justify-center bg-sky-100">
    //           <div className="text-center">
    //             <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-600 text-white">
    //               {safeVideoSrc && (
    //                 <div className="hidden md:block absolute inset-0">
    //                   <video
    //                     autoPlay
    //                     muted
    //                     loop
    //                     playsInline
    //                     className="w-full h-full object-cover scale-105"
    //                     poster={safeImageSrc}
    //                     aria-label="Фоновое видео"
    //                   >
    //                     <source src={safeVideoSrc} type="video/mp4" />
    //                   </video>
    //                   {safeImageSrc && (
    //                     <div className="w-full h-full object-cover bg-gray-100">
    //                       <img
    //                         src={safeImageSrc}
    //                         alt="logo"
    //                         className="w-full h-full object-cover"
    //                         loading="eager"
    //                         decoding="async"
    //                       />
    //                     </div>
    //                   )}
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default VideoBanner;
