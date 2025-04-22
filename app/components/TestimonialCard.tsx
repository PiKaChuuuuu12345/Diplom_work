import { Testimonial } from "../types";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialsCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
    </div>
  );
}
