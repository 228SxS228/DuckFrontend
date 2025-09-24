import { FC } from "react";
import Modal from "@/components/Modal";
import { ApplicationResponse } from "@/model/model";
import { CreditCard, X } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicationData: ApplicationResponse | null;
}

export const PaymentModal: FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  applicationData,
}) => {
  const handlePaymentRedirect = () => {
    if (applicationData?.onlinePayLink) {
      window.location.href = applicationData.onlinePayLink;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
    >
      <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Оплата онлайн</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="text-blue-600" size={28} />
          </div>
          <h4 className="text-lg font-bold text-blue-900 mb-2">
            Оплата заявки #{applicationData?.applicationId}
          </h4>
          <p className="text-gray-600 mb-4">
            Вы будете перенаправлены на безопасную страницу оплаты Робокассы
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-3">
            <span className="text-gray-600">Сумма к оплате:</span>
            <span className="font-bold text-green-600">
              {applicationData?.onlinePayLink?.match(/OutSum=(\d+)/)?.[1] || ""}{" "}
              руб.
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Описание:</span>
            <span className="font-medium text-sm text-right max-w-xs">
              {applicationData?.onlinePayLink?.match(/Description=([^&]+)/)?.[1]
                ? decodeURIComponent(
                    applicationData.onlinePayLink.match(
                      /Description=([^&]+)/
                    )?.[1] || ""
                  )
                : "Оплата занятия"}
            </span>
          </div>
        </div>

        <button
          disabled={!applicationData?.onlinePayLink}
          onClick={handlePaymentRedirect}
          className="w-full py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50 mb-4"
        >
          Перейти на страницу оплаты
        </button>

        <div className="text-center text-sm text-gray-500 mb-2">
          <p>Оплата защищена по стандарту PCI DSS</p>
        </div>

        <div className="text-center text-xs text-gray-400">
          <p>Платежная система Робокасса</p>
        </div>
      </div>
    </Modal>
  );
};
