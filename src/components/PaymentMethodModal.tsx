import { FC } from "react";
import Modal from "@/components/Modal";
import { ApplicationResponse } from "@/model/model";
import {
  Check,
  CreditCard,
  Store,
  ExternalLink,
  ArrowRight,
  X,
} from "lucide-react";

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicationData: ApplicationResponse | null;
  onPaymentMethodSelect: (method: "online" | "in_center") => void;
}

export const PaymentMethodModal: FC<PaymentMethodModalProps> = ({
  isOpen,
  onClose,
  applicationData,
  onPaymentMethodSelect,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
    >
      <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Выбор оплаты</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-green-600" size={28} />
          </div>
          <h4 className="text-lg font-bold text-blue-900 mb-2">
            Заявка #{applicationData?.applicationId} принята!
          </h4>
          <p className="text-gray-600 mb-4">
            Выберите способ оплаты для подтверждения записи
          </p>

          <div className="bg-blue-50 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-800">
                Номер заявки: {applicationData?.applicationId}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onPaymentMethodSelect("online")}
            className="w-full p-4 border-2 border-blue-200 rounded-xl flex items-center justify-between hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <CreditCard className="text-blue-600" size={20} />
              </div>
              <div className="text-left">
                <div className="font-bold text-blue-900">Оплата онлайн</div>
                <div className="text-sm text-gray-600">Банковской картой</div>
              </div>
            </div>
            <ExternalLink className="text-blue-600" size={20} />
          </button>

          <button
            onClick={() => onPaymentMethodSelect("in_center")}
            className="w-full p-4 border-2 border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <Store className="text-gray-600" size={20} />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Оплата в центре</div>
                <div className="text-sm text-gray-600">При посещении</div>
              </div>
            </div>
            <ArrowRight className="text-gray-600" size={20} />
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Вы можете оплатить позже, но не позднее чем за 2 часа до занятия
          </p>
        </div>
      </div>
    </Modal>
  );
};
