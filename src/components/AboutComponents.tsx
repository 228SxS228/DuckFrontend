import { FC } from "react";

const AboutComponents: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">
          Highlighted Features
        </h2>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
          <img
            className="w-1/2 md:w-full mx-auto"
            src="https://placeholder.pics/svg/400"
            alt="can_help_banner"
          />
        </div>

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">Пункт 1</h3>
              <p className="text-sm">
                Мой авторский комплексный подход гарантирует, что операция будет
                не только безопасной, но и полностью ориентированной на ваши
                потребности, учитывая как физическое состояние, так и
                психологические особенности
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">Пункт 1</h3>
              <p className="text-sm">
                Мой авторский комплексный подход гарантирует, что операция будет
                не только безопасной, но и полностью ориентированной на ваши
                потребности, учитывая как физическое состояние, так и
                психологические особенности
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">Пункт 1</h3>
              <p className="text-sm">
                Мой авторский комплексный подход гарантирует, что операция будет
                не только безопасной, но и полностью ориентированной на ваши
                потребности, учитывая как физическое состояние, так и
                психологические особенности
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">Пункт 1</h3>
              <p className="text-sm">
                Мой авторский комплексный подход гарантирует, что операция будет
                не только безопасной, но и полностью ориентированной на ваши
                потребности, учитывая как физическое состояние, так и
                психологические особенности
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponents;
