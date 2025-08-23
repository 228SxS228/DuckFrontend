import { Heart, Brain, Smile, Shield, Award } from "lucide-react";
import { FC } from "react";

const SwimmingBenefitsComponent: FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-sky-800 md:text-4xl">
            Преимущества плавания для детей
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Почему плавание считается одним из лучших видов физической
            активности для детей
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-md">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Дети плавают в бассейне"
              //   fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="mb-6">
              <h3 className="mb-4 text-2xl font-bold text-sky-800">
                Почему стоит выбрать плавание?
              </h3>
              <p className="text-gray-600">
                Плавание — это уникальный вид физической активности, который
                оказывает комплексное положительное воздействие на организм
                ребенка. В отличие от многих других видов спорта, плавание
                минимизирует нагрузку на суставы и позвоночник, при этом
                обеспечивая гармоничное развитие всех групп мышц.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-sky-800">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    icon: <Heart className="h-8 w-8 text-sky-600" />,
    title: "Укрепление здоровья",
    description:
      "Плавание укрепляет сердечно-сосудистую и дыхательную системы, повышает иммунитет",
  },
  {
    icon: <Brain className="h-8 w-8 text-sky-600" />,
    title: "Развитие мозга",
    description:
      "Стимулирует развитие нервной системы и улучшает когнитивные функции",
  },
  {
    icon: <Smile className="h-8 w-8 text-sky-600" />,
    title: "Эмоциональное благополучие",
    description: "Снижает стресс, улучшает настроение и повышает самооценку",
  },
  {
    icon: <Shield className="h-8 w-8 text-sky-600" />,
    title: "Безопасность",
    description: "Обучение плаванию — важный навык безопасности для всей жизни",
  },
  {
    icon: <Award className="h-8 w-8 text-sky-600" />,
    title: "Физическое развитие",
    description:
      "Формирует правильную осанку, укрепляет все группы мышц, развивает координацию",
  },
];

export default SwimmingBenefitsComponent;
