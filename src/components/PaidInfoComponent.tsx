import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PaymentData } from "@/model/model";

const PaidInfo: React.FC = () => {
  const location = useLocation();
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const parseQueryParams = () => {
      const searchParams = new URLSearchParams(location.search);
      const data: PaymentData = {
        OutSum: searchParams.get("OutSum") || "",
        InvId: searchParams.get("InvId") || "",
        SignatureValue: searchParams.get("SignatureValue") || "",
        IsTest: searchParams.get("IsTest") || "",
        Culture: searchParams.get("Culture") || "",
      };

      // Дополнительные параметры (shp_*)
      const shpParams: Record<string, string> = {};
      searchParams.forEach((value, key) => {
        if (key.startsWith("shp_")) {
          shpParams[key] = value;
        }
        if (key === "PaymentMethod") {
          data.PaymentMethod = value;
        }
        if (key === "Commission") {
          data.Commission = value;
        }
      });

      if (Object.keys(shpParams).length > 0) {
        data.Shp_params = shpParams;
      }

      setPaymentData(data);
      setIsLoading(false);
    };

    parseQueryParams();
  }, [location.search]);

  const verifySignature = () => {
    if (!paymentData) return false;

    // Здесь должна быть ваша логика проверки подписи
    // Пример: сравнение с рассчитанной подписью на основе вашего пароля
    return true;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!paymentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Данные оплаты не найдены
          </h1>
          <p className="text-gray-600">
            Параметры оплаты отсутствуют или некорректны
          </p>
        </div>
      </div>
    );
  }

  const isValid = verifySignature();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div
            className={`px-6 py-4 ${
              isValid ? "bg-green-600" : "bg-red-600"
            } text-white`}
          >
            <h1 className="text-2xl font-bold">
              {isValid
                ? "✅ Оплата успешно обработана"
                : "⚠️ Ошибка проверки подписи"}
            </h1>
            <p className="text-sm opacity-90 mt-1">
              {isValid
                ? "Платеж подтвержден"
                : "Требуется дополнительная проверка"}
            </p>
          </div>

          {/* Main Content */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Основная информация */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Информация о платеже
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Сумма:
                    </span>
                    <p className="text-lg font-bold text-gray-900">
                      {paymentData.OutSum} ₽
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Номер заказа:
                    </span>
                    <p className="text-lg text-gray-900">
                      #{paymentData.InvId}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Режим:
                    </span>
                    <p className="text-lg text-gray-900">
                      {paymentData.IsTest === "1" ? "Тестовый" : "Боевой"}
                    </p>
                  </div>
                  {paymentData.PaymentMethod && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Способ оплаты:
                      </span>
                      <p className="text-lg text-gray-900">
                        {paymentData.PaymentMethod}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Техническая информация */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Технические данные
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Подпись:
                    </span>
                    <p className="text-sm font-mono text-gray-600 break-all">
                      {paymentData.SignatureValue}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Язык:
                    </span>
                    <p className="text-lg text-gray-900">
                      {paymentData.Culture === "ru"
                        ? "Русский"
                        : paymentData.Culture}
                    </p>
                  </div>
                  {paymentData.Commission && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Комиссия:
                      </span>
                      <p className="text-lg text-gray-900">
                        {paymentData.Commission} ₽
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Дополнительные параметры */}
            {paymentData.Shp_params &&
              Object.keys(paymentData.Shp_params).length > 0 && (
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Дополнительные параметры
                  </h2>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(paymentData.Shp_params).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-gray-600">{key}:</span>
                            <span className="text-gray-900 font-medium">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

            {/* Кнопки действий */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Вернуться на главную
              </button>
              <button
                onClick={() => window.print()}
                className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Распечатать
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-100 border-t">
            <p className="text-sm text-gray-600 text-center">
              {new Date().toLocaleDateString("ru-RU")} • Utenok Tomsk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidInfo;
