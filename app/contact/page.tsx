import Image from "next/image";
import ContactMap from "../components/ContactMap";

export default function Contact() {
  // Контактные инфо
  const contactInfo = {
    email: "info@etalon.kg",
    phone: "+996557590557",
    address: "г. Бишкек, ​Улица Касыма Тыныстанова, 231",
    workHours: "Пн-Пт: 10:00 - 17:00",
    socialMedia: [
      {
        name: "Facebook",
        url: "#",
        icon: "fa-brands fa-facebook",
      },
      {
        name: "Instagram",
        url: "#",
        icon: "fa-brands fa-instagram",
      },
      {
        name: "LinkedIn",
        url: "#",
        icon: "fa-brands fa-linkedin",
      },
      {
        name: "WhatsApp",
        url: "tel: +996 557-590-557",
        icon: "fa-brands fa-whatsapp",
      },
    ],
  };

  // FAQ items
  const faqItems = [
    {
      question: "Как получить коммерческое предложение?",
      answer:
        "Чтобы получить коммерческое предложение, заполните форму на нашем сайте с указанием деталей вашего проекта, или свяжитесь с нашим отделом продаж по телефону или электронной почте. Мы подготовим индивидуальное предложение в течение 24 часов.",
    },
    {
      question: "Какие языки вы поддерживаете?",
      answer:
        "Мы работаем с более чем 40 языками мира, включая все европейские языки, основные азиатские языки, а также языки Ближнего Востока и Африки. Для уточнения доступности перевода на конкретный язык, пожалуйста, свяжитесь с нами.",
    },
    {
      question: "Как происходит процесс работы над проектом?",
      answer:
        "После согласования условий и подписания договора мы назначаем менеджера проекта, который будет сопровождать вас на всех этапах. Мы подбираем переводчиков с соответствующей специализацией, выполняем перевод, редактирование и корректуру материалов, а затем проводим финальный контроль качества перед отправкой клиенту.",
    },
    {
      question: "Какие у вас сроки выполнения заказов?",
      answer:
        "Сроки зависят от объема материалов, языковой пары и сложности тематики. В среднем, скорость перевода составляет около 8-10 страниц в день. Для получения точной информации по срокам выполнения вашего конкретного проекта, пожалуйста, свяжитесь с нами.",
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
                Связаться с нами
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Свяжитесь с нашей командой для обсуждения вашего проекта,
                получения информации об услугах или для любых других вопросов.
                Мы всегда рады помочь вам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+996557590557"
                  className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  <span className="mr-2">
                    <i className="fas fa-phone"></i>
                  </span>
                  Позвонить
                </a>
                <a
                  href="mailto:info@etalon.kg"
                  className="bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  <span className="mr-2">
                    <i className="fas fa-envelope"></i>
                  </span>
                  Написать
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-96">
                <Image
                  src="/images/contact-hero.jpg"
                  alt="Контакты Эталон"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Адрес</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
                <p className="text-gray-600 mt-2">{contactInfo.workHours}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Телефон</h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-600 hover:underline underline-offset-3"
                >
                  {contactInfo.phone}
                </a>
                <p className="text-gray-600 mt-2">Пн-Пт с 9:00 до 19:00</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:underline underline-offset-4"
                >
                  {contactInfo.email}
                </a>
                <p className="text-gray-600 mt-2">Ответим в течение 24 часов</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Подписывайтесь на нас</h2>
              <div className="flex justify-center space-x-4">
                {contactInfo.socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Как нас найти</h2>
                <p className="text-gray-600 mb-6">
                  Наш офис расположен в городе Бишкек, улица К.Тыныстанова 231,
                  пересекает проспект Чуй, 2 этаж.
                </p>
              </div>
              <ContactMap />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-gray-600">
                Ответы на самые распространенные вопросы о наших услугах
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 bg-white"
                >
                  <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Не нашли ответ на свой вопрос?{" "}
                <a
                  href="tel:+996557590557"
                  className="text-blue-600 hover:underline underline-offset-4"
                >
                  Свяжитесь с нами
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, и мы поможем вам найти оптимальное решение
            для ваших задач.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+996557590557"
              className="bg-white text-blue-600 font-medium px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <span className="mr-2">
                <i className="fas fa-phone"></i>
              </span>
              +996(557)-590-557
            </a>
            <a
              href="mailto:info@etalon.kg"
              className="bg-blue-500 text-white font-medium px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <span className="mr-2">
                <i className="fas fa-envelope"></i>
              </span>
              info@etalon.kg
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
