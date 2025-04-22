import { Service } from "../types";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="text-4xl text-blue-600 mb-4">
        <i className={service.icon}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium text-blue-600">
          от {service.price} сом
        </span>
        <Link
          href={`/services#${service.id}`}
          className="text-blue-600 hover:underline underline-offset-4"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
