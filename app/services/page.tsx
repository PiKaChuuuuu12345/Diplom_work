"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Определение типов
type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: number;
  detailedDescription?: string;
  features?: string[];
};

type Category = {
  id: number;
  name: string;
  slug: string;
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showFaq, setShowFaq] = useState<number | null>(null);

  // Данные услуг
  const services: Service[] = [
    {
      id: 1,
      title: "Бизнес-перевод",
      description:
        "Переводы деловой документации, презентаций, отчетов и бизнес-корреспонденции",
      icon: "far fa-handshake",
      price: 500,
      detailedDescription:
        "Наши специалисты по бизнес-переводам помогут вам преодолеть языковые барьеры в деловом общении. Мы обеспечиваем точный и профессиональный перевод бизнес-документации, сохраняя терминологию и стиль оригинала.",
      features: [
        "Перевод бизнес-планов и маркетинговых материалов",
        "Перевод корпоративной документации",
        "Перевод презентаций и отчетов",
        "Перевод деловой корреспонденции",
        "Перевод материалов для совещаний и конференций",
      ],
    },
    {
      id: 2,
      title: "Юридический перевод",
      description:
        "Профессиональный перевод договоров, соглашений, уставов и юридических документов",
      icon: "fas fa-balance-scale",
      price: 600,
      detailedDescription:
        "Юридический перевод требует высокой точности и глубокого понимания правовой терминологии. Наши сертифицированные переводчики специализируются на юридических документах и гарантируют сохранение правового смысла в переводе.",
      features: [
        "Перевод договоров и соглашений",
        "Перевод уставных документов",
        "Перевод судебных материалов",
        "Перевод патентной документации",
        "Перевод юридических заключений",
      ],
    },
    {
      id: 3,
      title: "Технический перевод",
      description:
        "Перевод технической документации, инструкций, руководств и спецификаций",
      icon: "fas fa-cogs",
      price: 600,
      detailedDescription:
        "Технический перевод требует глубоких знаний в соответствующей отрасли. Наши технические переводчики имеют профильное образование и опыт работы в различных технических сферах, что обеспечивает точность перевода специализированной терминологии.",
      features: [
        "Перевод инженерной документации",
        "Перевод технических спецификаций",
        "Перевод руководств пользователя",
        "Перевод технологических процессов",
        "Перевод чертежей с пояснениями",
      ],
    },
    {
      id: 4,
      title: "Медицинский перевод",
      description:
        "Перевод медицинских заключений, историй болезни и фармацевтической документации",
      icon: "fas fa-heartbeat",
      price: 700,
      detailedDescription:
        "Медицинский перевод требует особой точности и знания специфической терминологии. Наши переводчики медицинской документации имеют профильное образование и постоянно следят за развитием медицинской науки и терминологии.",
      features: [
        "Перевод историй болезни",
        "Перевод медицинских заключений",
        "Перевод фармацевтической документации",
        "Перевод клинических исследований",
        "Перевод медицинской литературы",
      ],
    },
    {
      id: 5,
      title: "Локализация сайтов",
      description:
        "Полная адаптация веб-сайта под языковые и культурные особенности целевой аудитории",
      icon: "fas fa-globe",
      price: 1500,
      detailedDescription:
        "Локализация сайта – это не просто перевод текста, а комплексная адаптация под культуру и особенности целевой аудитории. Мы учитываем культурный контекст, подбираем соответствующие изображения и адаптируем дизайн для максимальной эффективности.",
      features: [
        "Перевод интерфейса и контента",
        "Адаптация графических элементов",
        "Культурная адаптация",
        "SEO-оптимизация на целевом языке",
        "Тестирование локализованной версии",
      ],
    },
    {
      id: 6,
      title: "Перевод маркетинговых материалов",
      description:
        "Творческий перевод рекламных текстов, брошюр, каталогов и маркетинговых кампаний",
      icon: "fas fa-bullhorn",
      price: 800,
      detailedDescription:
        "Перевод маркетинговых материалов требует не только лингвистических знаний, но и понимания принципов маркетинга. Наши специалисты сохраняют эмоциональное воздействие оригинального текста, адаптируя его под культурные особенности целевой аудитории.",
      features: [
        "Перевод рекламных текстов",
        "Перевод маркетинговых исследований",
        "Перевод брошюр и каталогов",
        "Адаптация слоганов и названий",
        "Перевод PR-материалов",
      ],
    },
    {
      id: 7,
      title: "Нотариальный перевод",
      description:
        "Официальные переводы документов с нотариальным заверением для использования в государственных органах",
      icon: "fas fa-stamp",
      price: 800,
      detailedDescription:
        "Нотариальный перевод необходим для официальных документов, используемых в государственных органах и учреждениях. Мы обеспечиваем точный перевод с соблюдением всех формальностей и предоставляем услуги нотариального заверения.",
      features: [
        "Перевод личных документов",
        "Перевод образовательных документов",
        "Перевод документов для миграции",
        "Нотариальное заверение",
        "Апостиль документов",
      ],
    },
    {
      id: 8,
      title: "Художественный перевод",
      description:
        "Творческий перевод литературных произведений, сохраняющий авторский стиль и эмоциональное воздействие",
      icon: "fas fa-book",
      price: 900,
      detailedDescription:
        "Художественный перевод – это искусство передачи не только смысла, но и стиля, атмосферы и эмоционального воздействия оригинального произведения. Наши литературные переводчики обладают исключительным чувством языка и творческим подходом.",
      features: [
        "Перевод прозы и поэзии",
        "Перевод драматургии",
        "Перевод сценариев",
        "Адаптация культурных отсылок",
        "Сохранение авторского стиля",
      ],
    },
  ];

  // Категория услуг
  const categories: Category[] = [
    { id: 0, name: "Все услуги", slug: "all" },
    { id: 1, name: "Бизнес", slug: "business" },
    { id: 2, name: "Юридические", slug: "legal" },
    { id: 3, name: "Технические", slug: "technical" },
    { id: 4, name: "Медицинские", slug: "medical" },
    { id: 5, name: "Веб и IT", slug: "web" },
  ];

  // Вопросы часто задаваемые
  const faqs = [
    {
      question: "С какими языками вы работаете?",
      answer:
        "Мы работаем более чем с 40 языками, включая английский, немецкий, и другие языки стран Европы, основные азиатские (китайский, японский, корейский), и языки СНГ. Полный список языков вы можете найти в разделе 'Языки' или уточнить у наших менеджеров.",
    },
    {
      question: "Как рассчитывается стоимость перевода?",
      answer:
        "Стоимость перевода зависит от нескольких факторов: объема текста (количества страниц или слов), языковой пары, тематики и сложности текста, срочности выполнения. Для получения точной оценки, пожалуйста, отправьте нам запрос через форму на сайте или свяжитесь с нами напрямую.",
    },
    {
      question: "Какие сроки выполнения перевода?",
      answer:
        "Стандартные сроки выполнения перевода составляют 2-3 рабочих дня для документов объемом до 10 страниц. Для более объемных проектов сроки обсуждаются индивидуально. Мы также предлагаем услуги срочного перевода с дополнительной оплатой.",
    },
    {
      question: "Обеспечивается ли конфиденциальность переводов?",
      answer:
        "Да, мы гарантируем полную конфиденциальность всех материалов, предоставленных для перевода. Со всеми нашими сотрудниками и переводчиками заключены соглашения о неразглашении информации. По запросу клиента мы также можем подписать отдельное NDA (соглашение о конфиденциальности).",
    },
    {
      question: "Есть ли у вас услуга нотариального заверения переводов?",
      answer:
        "Да, мы предоставляем услуги нотариального заверения переводов. Это необходимо для официальных документов, которые требуются для государственных органов, визовых центров и образовательных учреждений. Стоимость услуги зависит от типа и количества документов.",
    },
  ];

  // Фильтрация услуг по категориям
  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => {
          if (activeCategory === "business") {
            return service.id === 1 || service.id === 6;
          } else if (activeCategory === "legal") {
            return service.id === 2 || service.id === 7;
          } else if (activeCategory === "technical") {
            return service.id === 3;
          } else if (activeCategory === "medical") {
            return service.id === 4;
          } else if (activeCategory === "web") {
            return service.id === 5;
          }
          return true;
        });

  return (
    <>
      <Head>
        <title>Эталон</title>
        <meta
          name="description"
          content="Профессиональные услуги перевода для бизнеса и частных клиентов. Бизнес, юридические, технические, медицинские переводы и локализация."
        />
      </Head>

      {/* Hero section */}
      <section className="bg-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Услуги профессионального перевода
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Мы предлагаем полный спектр переводческих услуг с гарантией
              качества. Наши профессиональные переводчики помогут вам преодолеть
              языковые барьеры в любой сфере.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors text-center"
              >
                Заказать перевод
              </Link>
              <Link
                href="#pricing"
                className="border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Посмотреть способы оплаты
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Категории услуг */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.slug
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги перевода</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите услугу, которая наилучшим образом соответствует вашим
              потребностям. Каждый перевод выполняется профессионалами с опытом
              в соответствующей отрасли.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="text-3xl text-blue-600 mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      от {service.price} сом
                    </span>
                    <span className="text-gray-500 ml-1">/ страница</span>
                  </div>

                  {service.features && (
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Включает:
                      </h4>
                      <ul className="text-sm text-gray-600">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start mb-1">
                            <svg
                              className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0"
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
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    {/* <Link
                      href={`/services/${service.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Подробнее
                    </Link> */}
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
                    >
                      Заказать
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как мы работаем */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наш процесс работы ориентирован на достижение максимального
              качества и соблюдение сроков на всех этапах выполнения заказа.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-3">Получение заявки</h3>
              <p className="text-gray-600">
                Мы анализируем ваш текст, определяем тематику и сложность,
                подбираем специалиста с опытом в соответствующей области.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-3">Перевод текста</h3>
              <p className="text-gray-600">
                Профессиональный переводчик выполняет перевод с учетом
                контекста, терминологии и стилистических особенностей текста.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-3">Редактирование</h3>
              <p className="text-gray-600">
                Редактор проверяет перевод на точность, согласованность
                терминологии, стилистическую и грамматическую корректность.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-3">Доставка заказа</h3>
              <p className="text-gray-600">
                Готовый перевод проходит финальную проверку контроля качества и
                доставляется клиенту в удобном формате точно в срок.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Способы оплаты */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Способы оплаты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем удобные и безопасные способы оплаты для наших услуг
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg border border-transparent hover:-translate-y-1">
              <div className="p-6">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-credit-card"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Банковской картой</h3>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">Visa</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">Элкарт</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg border border-blue-500 relative transform hover:-translate-y-2">
              <div className="bg-blue-500 text-white text-sm font-semibold py-1 text-center">
                Самый популярный
              </div>
              <div className="p-6">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Мобильный банкинг</h3>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div className="flex justify-center">
                      <Image
                        src="/images/Payment/mbank.svg"
                        alt="MBank"
                        width={60}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div className="flex justify-center">
                      <Image
                        src="/images/Payment/dengi.svg"
                        alt="O!Деньги"
                        width={60}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div className="flex justify-center">
                      <Image
                        src="/images/Payment/balance.svg"
                        alt="Balance KG"
                        width={60}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div className="flex justify-center">
                      <Image
                        src="/images/Payment/optima.svg"
                        alt="Optima"
                        width={60}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </li>
                  <li className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div className="flex justify-center">
                      <Image
                        src="/images/Payment/elsom.png"
                        alt="Elsom"
                        width={60}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg border border-transparent hover:-translate-y-1">
              <div className="p-6">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-money-bill-wave"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Наличными</h3>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">В офисе компании</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">Курьеру при доставке</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p>
              Нужна помощь с оплатой?{" "}
              <Link
                href="/contact"
                className="text-blue-600 hover:underline underline-offset-3"
              >
                Свяжитесь с нами
              </Link>{" "}
              для получения консультации.
            </p>
          </div>
        </div>
      </section>

      {/* Часто задаваемые вопросы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ответы на популярные вопросы о наших услугах перевода и процессе
              работы.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 border-b border-gray-200 pb-4 last:border-0"
              >
                <button
                  className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-400 focus:outline-none"
                  onClick={() => setShowFaq(showFaq === index ? null : index)}
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      showFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showFaq === index && (
                  <div className="mt-3 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="mb-4 text-gray-700">Не нашли ответ на свой вопрос?</p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white font-medium px-6 py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Задать вопрос
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

      {/* Преимущества */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наши преимущества, которые делают сотрудничество с нами комфортным
              и эффективным.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Профессиональная команда
              </h3>
              <p className="text-gray-600">
                Все наши переводчики имеют высшее лингвистическое образование и
                опыт работы от 5 лет в своей специализации.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Гарантия качества</h3>
              <p className="text-gray-600">
                Каждый перевод проходит многоуровневую проверку и
                редактирование, что обеспечивает безупречное качество.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Соблюдение сроков</h3>
              <p className="text-gray-600">
                Мы ценим ваше время и всегда сдаем проекты точно в согласованный
                срок, даже при выполнении срочных заказов.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Конфиденциальность</h3>
              <p className="text-gray-600">
                Мы гарантируем полную конфиденциальность всех документов и
                информации, предоставленных для перевода.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Гибкий подход</h3>
              <p className="text-gray-600">
                Мы адаптируем наши услуги под ваши потребности и всегда готовы
                идти навстречу индивидуальным требованиям.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Поддержка 24/7</h3>
              <p className="text-gray-600">
                Наша команда поддержки доступна круглосуточно, чтобы ответить на
                ваши вопросы и помочь с оформлением заказа.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы клиентов */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мнения тех, кто уже воспользовался нашими услугами перевода.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Компания дружелюбная😊 Понравилось у них. Перевод
                качественный, главное очень быстро.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/Testimonial-img/testimonial-4.jpg"
                    alt="Testimonial-4"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Айсалкын Орозобаева</h4>
                  <p className="text-sm text-gray-500">
                    {/* Здесь может быть название организации клиента */}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Хочу поблагодарить агентство языковых переводов
                &quot;Эталон&quot; за их оперативность и профессионализм. Очень
                помогли быстро перевести договора и уставы нашей компании с
                русского на английский и заверить нотариально.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/Testimonial-img/testimonial-5.jpg"
                    alt="Testimonial-5"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Диас Диасов</h4>
                  <p className="text-sm text-gray-500">
                    Юридическая фирма &quot;Право и Дело&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span className="ml-2 text-gray-600">4.5</span>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Сотрудники и в действительности работают быстро. И что
                хорошо не берут дополнительную плату за срочность. Вежливый
                персонал. Рекомендую всем кому нужны качественные переводы
                😊☺️&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/Testimonial-img/testimonial-6.jpg"
                    alt="Testimonial-6"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Камилла А.</h4>
                  <p className="text-sm text-gray-500">
                    {/* Здесь может быть название организации клиента */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Свяжитесь с нами сегодня, чтобы получить консультацию и
              индивидуальное предложение по вашему проекту перевода.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors text-center"
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
