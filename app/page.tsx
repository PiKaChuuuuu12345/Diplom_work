import Link from "next/link";
import Image from "next/image";
import heroPic from "../public/images/about-us.jpg";
import teamPic from "../public/images/team.jpg";
import testimonialFirstPic from "../public/images/Testimonial-img/testimonial-7.jpg";
import testimonialSecondPic from "../public/images/Testimonial-img/testimonial-4.jpg";
import testimonialThirdPic from "../public/images/Testimonial-img/testimonial-5.jpg";
import ServiceCard from "./components/ServiceCard";
import { Service, Testimonial } from "./types";
import TestimonialCard from "./components/TestimonialCard";

export default function Home() {
  const services: Service[] = [
    {
      id: 1,
      title: "Бизнес-перевод",
      description:
        "Переводы деловой документации, презентаций, отчетов и бизнес-корреспонденции",
      icon: "far fa-handshake",
      price: 500,
    },
    {
      id: 2,
      title: "Юридический перевод",
      description:
        "Профессиональный перевод договоров, соглашений, уставов и юридических документов",
      icon: "fas fa-balance-scale",
      price: 900,
    },
    {
      id: 3,
      title: "Технический перевод",
      description:
        "Перевод технической документации, инструкций, руководств и спецификаций",
      icon: "fas fa-cogs",
      price: 650,
    },
    {
      id: 4,
      title: "Медицинский перевод",
      description:
        "Перевод медицинских заключений, историй болезни и фармацевтической документации",
      icon: "fas fa-heartbeat",
      price: 700,
    },
    {
      id: 5,
      title: "Локализация сайтов",
      description:
        "Полная адаптация веб-сайта под языковые и культурные особенности целевой аудитории",
      icon: "fas fa-globe",
      price: 1500,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Аскар Жумагулов",
      text: "Давно работаем, качественно и в быстрые сроки выполняет работу 👍",
      image: testimonialFirstPic,
    },
    {
      id: 2,
      name: "Aisalkyn Orozobaeva",
      text: "Компания дружелюбная😊 Понравилось у них. Перевод качественный, главное очень быстро.",
      image: testimonialSecondPic,
    },
    {
      id: 3,
      name: "Диас Диасов",
      text: "Хочу поблагодарить агентство языковых переводов 'Эталон' за их оперативность и профессионализм. Очень помогли быстро перевести договора и уставы нашей компании с русского на английский и заверить нотариально.",
      image: testimonialThirdPic,
    },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Профессиональные услуги перевода для бизнеса и частных клиентов
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Более 10 лет опыта. Команда профессионалов. Работаем с 40+
                языками. Гарантия качества.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="tel:+996557590557"
                  className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors text-center"
                >
                  Заказать перевод
                </Link>
                <Link
                  href="/services"
                  className="border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Наши услуги
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-96">
                <Image
                  src={heroPic}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  alt="Picture of the author"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем полный спектр переводческих услуг, адаптированных
              под нужды как корпоративных клиентов, так и частных лиц.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 font-medium hover:underline underline-offset-4"
            >
              Посмотреть все услуги
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-80">
                <Image
                  src={teamPic}
                  alt="Команда переводчиков Эталон"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">О компании Эталон</h2>
              <p className="text-gray-700 mb-4">
                Мы – команда профессиональных переводчиков с опытом работы более
                10 лет в различных отраслях. Эталон специализируется на
                предоставлении высококачественных переводческих услуг для
                бизнеса и частных клиентов.
              </p>
              <p className="text-gray-700 mb-6">
                Наш подход основан на сочетании человеческого опыта и
                современных технологий перевода, что позволяет достигать
                максимальной точности и естественности текста на любом языке.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>10+ языков перевода</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Гарантия качества</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Точные сроки</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Конфиденциальность</span>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center bg-blue-600 text-white font-medium px-6 py-3 rounded hover:bg-blue-700 transition-colors"
              >
                Подробнее о нас
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Мы стремимся предоставить лучший сервис для наших клиентов, следуя
              принципам качества, точности и индивидуального подхода.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-700 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4 flex justify-center">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-blue-100">
                Каждый перевод проходит многоуровневую проверку перед отправкой
                клиенту
              </p>
            </div>

            <div className="bg-blue-700 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4 flex justify-center">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
              <p className="text-blue-100">
                Все наши переводчики - специалисты с высшим лингвистическим
                образованием
              </p>
            </div>

            <div className="bg-blue-700 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4 flex justify-center">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Оперативность</h3>
              <p className="text-blue-100">
                Соблюдаем установленные сроки и всегда готовы к срочным заказам
              </p>
            </div>

            <div className="bg-blue-700 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4 flex justify-center">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Постоянное развитие
              </h3>
              <p className="text-blue-100">
                Внедряем новые технологии и методики для улучшения качества
                перевода
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Узнайте, что говорят о нас те, кто уже воспользовался нашими
              услугами.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-blue-600 font-medium hover:underline underline-offset-4"
            >
              Посмотреть все отзывы
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Контактная форма */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Оставьте заявку в WhatsApp, и мы свяжемся с вами в ближайшее время
              для обсуждения вашего проекта.
            </p>

            <button className="bg-blue-600 text-white px-4 py-2 mt-8 rounded hover:bg-blue-700 transition-colors">
              <a href="tel:+996557590557">Заказать перевод</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
