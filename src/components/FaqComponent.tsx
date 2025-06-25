import { FC} from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
import { FaqText } from "@/types";


// const faqs = [
//   {
//     question: "С какого возраста можно начинать занятия плаванием?",
//     answer:
//       "В нашем центре проводятся занятия для детей с 6 месяцев. Для самых маленьких предусмотрены специальные программы с участием родителей.",
//   },
//   {
//     question: "Нужна ли специальная подготовка перед началом занятий?",
//     answer:
//       "Специальная подготовка не требуется. Наши тренеры работают с детьми любого уровня подготовки, включая тех, кто боится воды.",
//   },
//   {
//     question: "Какие документы нужны для записи на занятия?",
//     answer:
//       "Для записи на занятия необходима медицинская справка о допуске к занятиям в бассейне (действительна 6 месяцев) и свидетельство о рождении ребенка.",
//   },
//   {
//     question: "Как часто рекомендуется посещать занятия?",
//     answer:
//       "Для достижения хороших результатов рекомендуется посещать занятия 2-3 раза в неделю. Однако даже одно занятие в неделю будет полезным для ребенка.",
//   },
//   {
//     question: "Что нужно взять с собой на занятие?",
//     answer:
//       "Необходимо иметь купальный костюм, шапочку для плавания, полотенце, сланцы и средства гигиены. Для малышей также понадобятся специальные подгузники для плавания.",
//   },
//   {
//     question: "Проводятся ли индивидуальные занятия?",
//     answer:
//       "Да, в нашем центре проводятся как групповые, так и индивидуальные занятия. Индивидуальные занятия особенно рекомендуются для детей с особыми потребностями или страхом воды.",
//   },
// ];


const FaqComponent: FC<FaqText> = () => {
  
  // сохранение состояния открытого вопроса
  // const [openIndex, setOpenIndex] = useState<number | null>(null);

  // const toggleFaq = (index: number) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-sky-800 md:text-4xl">
            Часто задаваемые вопросы
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ответы на самые популярные вопросы о занятиях в нашем центре
          </p>
        </div>

        {/* <div className="mx-auto max-w-3xl divide-y rounded-lg border bg-white shadow-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-sky-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-sky-600" />
                )}
              </button>
              <div
                className={`px-6 pb-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default FaqComponent;