import { FC } from "react";
import Modal from "@/components/Modal";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import { Button } from "@/components/ui/button";
import { User, Phone, Mail, Plus, Calendar, Clock } from "lucide-react";
import { Control, FieldErrors, UseFormSetValue } from "react-hook-form";

interface SaltCaveBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  control: Control<any>;
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  onSubmit: () => void;
  isSubmitting: boolean;
  times: string[];
  pricingPlans: any;
}

export const SaltCaveBookingModal: FC<SaltCaveBookingModalProps> = ({
  isOpen,
  onClose,
  control,
  errors,
  setValue,
  onSubmit,
  isSubmitting,
  times,
  pricingPlans,
}) => {
 
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
    >
      <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Бронирование сеанса</h3>
        </div>
      </div>

      <div className="p-5">
        <form onSubmit={onSubmit} className="space-y-4">
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

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="date"
                      {...field}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                />
              </div>
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message as string}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <Clock className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                <Controller
                  name="time"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Время</option>
                      {times.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.time.message as string}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="relative">
              <Plus className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
              <Controller
                name="sessionType"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      const selectedPlan = pricingPlans.find(
                        (plan: any) => plan.title === e.target.value
                      );
                      if (selectedPlan) {
                        setValue("selectedPrice", selectedPlan.price);
                      }
                    }}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Тип сеанса</option>
                    {pricingPlans.map((plan: any) => (
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
              disabled={isSubmitting}
              className="flex-1 py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Отправка..." : "Забронировать"}
            </Button>
          </div>
        </form>
      </div>

      <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100 rounded-b-2xl">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <Link to={RouteNames.OFFERTA} className="text-blue-600 hover:underline">
          политикой конфиденциальности
        </Link>
      </div>
    </Modal>
  );
};
