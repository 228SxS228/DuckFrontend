import ImageGalleryBanner from "../components/ImageGalleryBanner";

import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

import photo2 from "@/static/DSC_7757.jpg";
import photo3 from "@/static/DSC_7832.jpg";
import photo4 from "@/static/DSC_7840.jpg";
import photo5 from "@/static/solinai_pehera_3-500x300.jpg";
import photo6 from "@/static/solinai_pehera_8-854x750.jpg";
import photo7 from "@/static/solinai_pehera_6-768x512.jpg";

import Video from "@/static/saltcave_prewei.mp4";

import {
  TreesIcon as AlertCircle,
  Clock,
  Star,
  Shield,
  Leaf,
} from "lucide-react";

export default function SaltCavePage() {
  const validateMediaSource = (url: string | undefined) => {
    if (!url) return "";
    try {
      new URL(url);
      return url;
    } catch {
      return "";
    }
  };

  const images = [photo2, photo3, photo4, photo5, photo6, photo7];

  const safeImageSrc = validateMediaSource(import.meta.env.VITE_DEFAULT_IMG);
  // const safeVideoSrc = validateMediaSource(import.meta.env.VITE_VIDEO_SALT_SRC);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="grid grid-flow-col justify-items-center bg-gradient-to-r items-center from-blue-900 to-blue-700 py-16 md:py-24">
        <div className="container px-4 ">
          <div className="text-center max-w-2x">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Соляная пещера
            </h1>
            <p className="text-blue-100 text-lg">
              Оздоровительные сеансы в соляной пещере для укрепления иммунитета
              и релаксации
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className=" px-4 -mt-8 mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden aspect-video">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={safeImageSrc}
              >
                <source src={Video} type="video/mp4" />
                Ваш браузер не поддерживает видео тег.
              </video>
            </div>
            <div>
              <div className="inline-block px-4 py-1 mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Оздоровление и релаксация
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Уникальная соляная пещера в нашем центре
              </h2>
              <p className="text-gray-600 mb-6">
                Соляная пещера — это специально оборудованное помещение, стены,
                пол и потолок которого покрыты солью. Во время сеанса в воздух
                распыляются мельчайшие частицы соли, создавая особый
                микроклимат, благотворно влияющий на здоровье.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-800">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full px-8 cursor-pointer">
                Забронировать сеанс
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-sky-800">
                Как проходят сеансы
              </h2>

              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Подготовка</h3>
                    <p className="text-gray-700">
                      Перед сеансом вам предложат надеть одноразовые бахилы для
                      защиты соляного покрытия. Специальная одежда не требуется,
                      но рекомендуется надевать удобную, не стесняющую движений
                      одежду.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Сеанс</h3>
                    <p className="text-gray-700">
                      Во время сеанса вы и ваш ребенок располагаетесь на удобных
                      креслах. Для детей предусмотрены игрушки и стол для
                      рисования песком. Сеанс сопровождается спокойной музыкой и
                      мягким освещением, создающим расслабляющую атмосферу.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Продолжительность
                    </h3>
                    <p className="text-gray-700">
                      Стандартная продолжительность сеанса составляет 40 минут.
                      Для детей младшего возраста (до 3 лет) продолжительность
                      сеанса может быть сокращена до 20-30 минут.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Курс лечения</h3>
                    <p className="text-gray-700">
                      Для достижения терапевтического эффекта рекомендуется курс
                      из 10-15 сеансов с периодичностью 2-3 раза в неделю.
                      Поддерживающий курс — 1-2 раза в неделю.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-yellow-50 p-4 text-yellow-800">
                <div className="flex items-start">
                  <AlertCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
                  <p>
                    Перед посещением соляной пещеры рекомендуется
                    проконсультироваться с врачом, особенно если у ребенка есть
                    хронические заболевания.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[385px] overflow-hidden rounded-lg shadow-md">
                <img
                  src={photo2}
                  alt="Сеанс в соляной пещере"
                  className="object-cover"
                />
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-sky-800">
                  Расписание сеансов
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-gray-700">
                      Понедельник - Воскресенье:
                    </span>
                    <span className="text-gray-700">10:00 - 20:00</span>
                  </div>
                  {/* <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-gray-700">Суббота:</span>
                    <span className="text-gray-700">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">
                      Воскресенье:
                    </span>
                    <span className="text-gray-700">10:00 - 16:00</span>
                  </div> */}
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <Clock className="mr-1 inline-block h-4 w-4" />
                  Сеансы проводятся каждый час. Рекомендуется предварительная
                  запись.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="px-4 py-12 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 mb-4 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Наши тарифы
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Цены на посещение соляной пещеры
          </h2>
          <p className="text-gray-600">
            Выберите подходящий тариф и наслаждайтесь оздоровительными сеансами
            в нашей соляной пещере
          </p>
        </div>
        {/* grid md:grid-cols-3 gap-8 */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border ${
                plan.popular ? "border-yellow-400 shadow-lg" : "border-gray-100"
              } hover:shadow-xl transition-shadow relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <div className="bg-yellow-400 text-blue-900">Популярный</div>
                </div>
              )}
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {plan.title}
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-blue-900">
                  {plan.price}
                </span>
                <span className="text-gray-500 ml-1">₽</span>
                {plan.perSession && (
                  <span className="text-sm text-gray-500 ml-2">/ сеанс</span>
                )}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full cursor-pointer ${
                  plan.popular
                    ? "bg-yellow-400 hover:bg-yellow-500 text-blue-900"
                    : "bg-blue-700 hover:bg-blue-800 text-white"
                }`}
              >
                Выбрать тариф
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-sky-50 py-12">
        <div className=" mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-sky-800">
              Часто задаваемые вопросы
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Ответы на самые популярные вопросы о соляной пещере
            </p>
          </div>

          <div className="mx-auto max-w-3xl divide-y rounded-lg border bg-white shadow-sm">
            {faq.map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  {item.question}
                </h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=" px-4 py-12 mb-16">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы попробовать?
            </h2>
            <p className="text-blue-100 mb-8">
              Запишитесь на сеанс в соляной пещере уже сегодня и ощутите все
              преимущества солетерапии
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full px-8"
              >
                Забронировать сеанс
              </Button>
              <Button
                variant="outline"
                size="lg"
                className=" cursor-pointer border-white/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className=" px-4 py-12 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Галерея соляной пещеры
          </h2>
          <p className="text-gray-600">
            Посмотрите, как выглядит наша соляная пещера и какая атмосфера вас
            ожидает
          </p>
        </div>
        <ImageGalleryBanner
          images={images}
          interval={3000}
          height="h-[600px]"
        />
      </section>
    </div>
  );
}

const benefits = [
  {
    title: "Укрепление иммунитета",
    description:
      "Помогает укрепить иммунную систему и повысить сопротивляемость организма",
    icon: <Shield className="h-5 w-5 text-blue-700" />,
  },
  {
    title: "Дыхательная система",
    description:
      "Благотворно влияет на органы дыхания и помогает при респираторных заболеваниях",
    icon: <Leaf className="h-5 w-5 text-blue-700" />,
  },
  {
    title: "Снятие стресса",
    description: "Способствует расслаблению и снижению уровня стресса",
    icon: <Star className="h-5 w-5 text-blue-700" />,
  },
  {
    title: "Улучшение сна",
    description: "Помогает нормализовать сон и улучшить его качество",
    icon: <Clock className="h-5 w-5 text-blue-700" />,
  },
];

const pricingPlans = [
  {
    title: "Разовое посещение",
    price: "580",
    perSession: true,
    description:
      "Идеально для тех, кто хочет попробовать соляную пещеру впервые",
    features: [
      "Длительность сеанса 40 минут",
      "Комфортная температура",
      "Релаксирующая музыка",
      "Удобные кресла для отдыха",
    ],
    popular: false,
  },
  {
    title: "Абонемент на 10 посещений",
    price: "4620",
    perSession: false,
    description:
      "Оптимальный вариант для регулярного посещения с хорошей скидкой",
    features: [
      "Длительность сеанса 40 минут",
      "Срок действия 3 месяца",
      "Возможность заморозки",
    ],
    popular: true,
  },
  {
    title: "Абонемент на 15 посещений",
    price: "6240",
    perSession: false,
    description:
      "Оптимальный вариант для регулярного посещения с хорошей скидкой",
    features: [
      "Длительность сеанса 40 минут",
      "До 8 человек",
      "Специальные кресла ",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
  },
  {
    title: "Абонемент на 20 посещений",
    price: "7500",
    perSession: false,
    description:
      "Оптимальный вариант для регулярного посещения с хорошей скидкой",
    features: [
      "Длительность сеанса 40 минут",
      "До 8 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
  },
  {
    title: "Индивидуальное посещение",
    price: "2000",
    perSession: true,
    description:
      "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
    features: [
      "Длительность сеанса 40 минут",
      "До 4 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: true,
  },
  {
    title: "Абонемент на 10 посещений ",
    price: "16000",
    perSession: false,
    description:
      "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
    features: [
      "Длительность сеанса 40 минут",
      "До 4 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
  },
  {
    title: "Абонемент на 15 посещений ",
    price: "22000",
    perSession: false,
    description:
      "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
    features: [
      "Длительность сеанса 40 минут",
      "До 4 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
  },
  {
    title: "Абонемент на 20 посещений",
    price: "27000",
    perSession: false,
    description:
      "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
    features: [
      "Длительность сеанса 40 минут",
      "До 4 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
  },
];

const faq = [
  {
    question: "Что такое соляная пещера?",
    answer:
      "Соляная пещера — это специально оборудованное помещение, стены, пол и потолок которого покрыты солью. Во время сеанса в воздух распыляются мельчайшие частицы соли, создавая особый микроклимат, благотворно влияющий на здоровье.",
  },
  {
    question: "Какие показания для посещения соляной пещеры?",
    answer:
      "Посещение соляной пещеры рекомендуется при заболеваниях дыхательных путей, аллергических реакциях, кожных заболеваниях, для укрепления иммунитета, снятия стресса и улучшения общего самочувствия.",
  },
  {
    question: "Есть ли противопоказания для посещения соляной пещеры?",
    answer:
      "Да, противопоказаниями являются: острые инфекционные заболевания, обострение хронических заболеваний, туберкулез, онкологические заболевания, гипертония 3 степени, индивидуальная непереносимость. Перед посещением рекомендуется проконсультироваться с врачом.",
  },
  {
    question: "Сколько длится один сеанс?",
    answer:
      "Стандартная продолжительность сеанса составляет 40 минут. Этого времени достаточно для получения терапевтического эффекта без перенасыщения организма солью.",
  },
  {
    question: "Можно ли посещать соляную пещеру с детьми?",
    answer:
      "Да, дети могут посещать соляную пещеру с 3-х лет в сопровождении взрослых. Для детей предусмотрены специальные кресла и игрушки, чтобы сделать процедуру комфортной и интересной.",
  },
];
