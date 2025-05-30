import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Айгүл Турсунбекова",
      position: "Генеральный директор",
      description:
        "Основатель компании с 15-летним опытом в сфере переводов. Магистр лингвистики, специалист по юридическому и бизнес-переводу. Курирует стратегическое развитие компании и работу с ключевыми клиентами.",
      languages: ["Английский", "Немецкий", "Кыргызский", "Русский"],
      specialization: "Юридический и бизнес-перевод",
      image: "",
    },
    {
      id: 2,
      name: "Нурбек Садыков",
      position: "Руководитель отдела технических переводов",
      description:
        "Эксперт в области технического перевода с опытом работы более 10 лет. Имеет техническое и лингвистическое образование. Специализируется на IT и инженерной документации.",
      languages: ["Английский", "Испанский", "Кыргызский", "Русский"],
      specialization: "Технический и IT-перевод",
      image: "",
    },
    {
      id: 3,
      name: "Айзада Касымова",
      position: "Главный редактор",
      description:
        "Филолог с 12-летним стажем, кандидат филологических наук. Отвечает за качество и стилистическую точность всех выполняемых переводов. Разрабатывает стандарты качества и обучающие программы для переводчиков.",
      languages: ["Английский", "Корейский", "Кыргызский", "Русский"],
      specialization: "Литературный перевод, редактура",
      image: "",
    },
    {
      id: 4,
      name: "Артем Власов",
      position: "Руководитель отдела медицинских переводов",
      description:
        "Имеет медицинское и лингвистическое образование. Специализируется на переводе медицинской документации, научных статей и фармацевтических текстов. В компании работает с момента основания.",
      languages: ["Английский", "Немецкий", "Русский"],
      specialization: "Медицинский и фармацевтический перевод",
      image: "",
    },
    {
      id: 5,
      name: "Эрмек уулу Азамат",
      position: "Старший переводчик",
      description:
        "Специалист с 8-летним опытом в области юридического перевода. Имеет юридическое и лингвистическое образование. Специализируется на переводе договоров, соглашений и юридической корреспонденции.",
      languages: ["Английский", "Итальянский", "Японский", "Кыргызский"],
      specialization: "Юридический перевод",
      image: "/images/Team-img/team-5.jpg",
    },
    {
      id: 6,
      name: "Бакытбек Жолдошев",
      position: "Технический переводчик",
      description:
        "Инженер и лингвист. Специализируется на переводе технической документации для нефтегазовой и строительной отраслей. Имеет опыт работы с крупными промышленными проектами.",
      languages: ["Английский", "Арабский", "Турецкий"],
      specialization: "Технический и инженерный перевод",
      image: "/images/Team-img/team-6.jpg",
    },
    {
      id: 7,
      name: "Нурия Асаналиева",
      position: "Переводчик и локализатор",
      description:
        "Специалист по локализации программного обеспечения и веб-сайтов. Имеет опыт работы с IT-компаниями и стартапами. Отвечает за адаптацию контента под различные культурные особенности.",
      languages: [
        "Английский",
        "Испанский",
        "Турецкий",
        "Русский",
        "Кыргызский",
      ],
      specialization: "IT-перевод и локализация",
      image: "/images/Team-img/team-7.jpg",
    },
    {
      id: 8,
      name: "Айзада Кожобекова",
      position: "Менеджер проектов",
      description:
        "Опытный руководитель проектов, отвечающий за координацию сложных переводческих заказов. Обеспечивает своевременную реализацию проектов и коммуникацию с клиентами.",
      languages: ["Английский", "Немецкий", "Русский", "Кыргызский"],
      specialization: "Управление проектами",
      image: "",
    },
  ];

  const departments = [
    {
      id: 1,
      name: "Бизнес и юридический перевод",
      count: "6 специалистов",
      icon: "fas fa-briefcase",
    },
    {
      id: 2,
      name: "Технический перевод",
      count: "8 специалистов",
      icon: "fas fa-cogs",
    },
    {
      id: 3,
      name: "Медицинский перевод",
      count: "4 специалиста",
      icon: "fas fa-heartbeat",
    },
    {
      id: 4,
      name: "IT и локализация",
      count: "5 специалистов",
      icon: "fas fa-globe",
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
                Наша команда
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Познакомьтесь с профессионалами Эталон – опытными
                лингвистами, редакторами и специалистами по переводу, которые
                помогают нашим клиентам преодолевать языковые барьеры.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors inline-block"
              >
                Связаться с нами
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-96">
                <Image
                  src="/images/Team-img/team-hero.jpg"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  alt="Команда Эталон"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отделы компании */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши отделы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              В Эталон работают специалисты различных направлений, что
              позволяет нам предоставлять высококачественные переводы в
              разнообразных областях.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-lg shadow p-6 text-center"
              >
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  <i className={dept.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600">{dept.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Команда - руководство */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Руководство компании</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша компания управляется опытными специалистами, которые
              формируют стратегию развития Эталон и обеспечивают высокие
              стандарты качества.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700">
                      Языки:
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      {member.languages.join(", ")}
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                      Специализация:
                    </p>
                    <p className="text-sm text-gray-600">
                      {member.specialization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Команда - специалисты */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши специалисты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с профессионалами, которые ежедневно работают над
              вашими проектами, обеспечивая безупречное качество перевода.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.slice(3).map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-2 text-sm">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-3">
                    {member.description}
                  </p>
                  <div className="border-t pt-3">
                    <p className="text-xs font-semibold text-gray-700">
                      Специализация:
                    </p>
                    <p className="text-xs text-gray-600">
                      {member.specialization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Присоединиться к команде */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Присоедииняйтесь к нашей команде
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Мы всегда ищем талантливых профессионалов, увлеченных переводом и
              стремящихся к совершенству в своей работе.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-6 text-blue-100">
              В Эталон вы сможете работать над интересными проектами,
              развивать свои профессиональные навыки и стать частью нашей
              дружной команды экспертов.
            </p>
            <Link
              href="/about/career"
              className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors inline-block"
            >
              Смотреть вакансии
            </Link>
          </div>
        </div>
      </section>

      {/* Контактная форма */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Хотите узнать больше о нашей команде или обсудить ваш проект с
              конкретным специалистом? Оставьте заявку, и мы свяжемся с вами.
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
