import { Service } from "../types";

interface PricingTableProps {
  services: Service[];
}

export default function PricingTable([services]: PricingTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">
              Услуга
            </th>
            <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">
              Описание
            </th>
            <th className="py-3 px-4 text-right border-b border-gray-200 font-semibold text-gray-700">
              Стоимость
            </th>
            <th className="py-3 px-4 text-center border-b border-gray-200 font-semibold text-gray-700">
              Действие
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-4 px-4 border-b border-gray-200 font-medium text-gray-800">
                {service.title}
              </td>
              <td className="py-4 px-4 border-b border-gray-200 text-gray-600">
                {service.description}
              </td>
              <td className="py-4 px-4 border-b border-gray-200 text-right font-medium text-blue-600">
                от {service.price} ₽
              </td>
              <td className="py-4 px-4 border-b border-gray-200 text-center">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                  Заказать
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
