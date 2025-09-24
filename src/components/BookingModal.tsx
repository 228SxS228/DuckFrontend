import { FC } from "react";
import Modal from "@/components/Modal";
import {
  Controller,
  Control,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import { Button } from "@/components/ui/button";
import { Clock, User, Phone, Mail, Plus } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { TimeTableItem, Trainer } from "@/model/model";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  control: Control<any>;
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  onSubmit: () => void;
  isSubmitting: boolean;
  selectedSession: TimeTableItem | null;
  availableTrainers: Trainer[];
  hasNamedTrainers: boolean;
  pricingPlans: any;
  activeTab: "pool" | "poolpro";
}

export const BookingModal: FC<BookingModalProps> = ({
  isOpen,
  onClose,
  control,
  errors,
  setValue,
  onSubmit,
  isSubmitting,
  selectedSession,
  availableTrainers,
  hasNamedTrainers,
  pricingPlans,
  activeTab,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
    >
      {selectedSession && (
        <>
          <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                Запись на занятие
              </h3>
            </div>
          </div>

          <div className="p-5 border-b border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-sky-100 text-sky-800 rounded-lg p-3 mr-4">
                <Clock className="h-8 w-8" />
              </div>
              <div>
                <div className="font-bold text-lg">{selectedSession.time}</div>
                <div className="text-gray-600 capitalize">
                  {format(new Date(selectedSession.day), "EEEE, d MMMM yyyy", {
                    locale: ru,
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <div className="text-gray-500 w-28">Тип занятия:</div>
                <div className="font-medium">{selectedSession.className}</div>
              </div>

              {hasNamedTrainers && availableTrainers.length > 0 && (
                <div className="mt-4">
                  <label className="block text-gray-500 mb-2">
                    Выберите конкретного тренера:
                  </label>
                  <Controller
                    name="selectedTrainer"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        value={field.value || ""}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {availableTrainers
                          .filter(
                            (trainer) =>
                              trainer.trainerName &&
                              trainer.trainerName !== "" &&
                              trainer.trainerName !== "Аренда"
                          )
                          .map((trainer) => (
                            <option
                              key={trainer.trainerName}
                              value={trainer.trainerName}
                            >
                              {trainer.trainerName}
                            </option>
                          ))}
                      </select>
                    )}
                  />
                  {errors.selectedTrainer && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.selectedTrainer.message as string}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-5 space-y-4">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message as string}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <Plus className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                <Controller
                  name="sessionType"
                  control={control}
                  rules={{ required: "Тип сеанса обязателен" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        const selectedPlan = pricingPlans[activeTab].find(
                          (plan: any) => plan.title === e.target.value
                        );
                        if (selectedPlan) {
                          setValue("selectedPrice", selectedPlan.price);
                        }
                      }}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Тип сеанса</option>
                      {pricingPlans[activeTab].map((plan: any) => (
                        <option key={plan.title} value={plan.title}>
                          {plan.title} - {plan.price} руб.
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
              {errors.sessionType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sessionType.message as string}
                </p>
              )}
            </div>

            <Controller
              name="selectedPrice"
              control={control}
              render={({ field }) => <input type="hidden" {...field} />}
            />

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Отмена
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || availableTrainers.length === 0}
                className="flex-1 py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? "Отправка..." : "Записаться"}
              </Button>
            </div>
          </form>

          <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100 rounded-b-2xl">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <Link
              to={RouteNames.OFFERTA}
              className="text-blue-600 hover:underline"
            >
              политикой конфиденциальности
            </Link>
          </div>
        </>
      )}
    </Modal>
  );
};
