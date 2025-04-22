"use client";

import Image from "next/image";
import { useState } from "react";

export default function Career() {
  const [activeTab, setActiveTab] = useState("all");

  const benefits = [
    {
      id: 1,
      title: "Профессиональный рост",
      description:
        "Регулярные тренинги, семинары и программы повышения квалификации",
      icon: "fas fa-chart-line",
    },
    {
      id: 2,
      title: "Гибкий график",
      description:
        "Возможность выбора гибкого графика работы и частичной удаленной работы",
      icon: "far fa-clock",
    },
    {
      id: 3,
      title: "Конкурентная оплата",
      description:
        "Достойная оплата труда и система премий за высокое качество работы",
      icon: "fas fa-coins",
    },
    {
      id: 4,
      title: "Дружная команда",
      description: "Доброжелательный коллектив и комфортная рабочая атмосфера",
      icon: "fas fa-users",
    },
  ];

  const positions = [
    {
      id: 1,
      title: "Переводчик английского языка",
      department: "Бизнес-перевод",
      location: "Офис/Удаленно",
      type: "Полная занятость",
      description:
        "Требуется переводчик английского языка для работы с бизнес-документацией, деловой корреспонденцией и презентациями. Опыт работы от 3 лет, знание бизнес-терминологии.",
      requirements: [
        "Высшее лингвистическое образование",
        "Опыт работы от 3 лет в области бизнес-перевода",
        "Уровень английского языка — C1/C2",
        "Знание специализированной терминологии",
        "Ответственность и внимательность к деталям",
      ],
      category: "translation",
    },
    {
      id: 2,
      title: "Переводчик технической документации",
      department: "Технический перевод",
      location: "Офис/Удаленно",
      type: "Полная занятость",
      description:
        "Требуется технический переводчик для работы с инженерной документацией, техническими спецификациями и руководствами. Знание технической терминологии обязательно.",
      requirements: [
        "Высшее техническое и/или лингвистическое образование",
        "Опыт работы от 2 лет в области технического перевода",
        "Свободное владение английским языком",
        "Знание специализированной технической терминологии",
        "Умение работать с CAT-инструментами",
      ],
      category: "translation",
    },
    {
      id: 3,
      title: "Редактор переводов",
      department: "Редакторский отдел",
      location: "Офис",
      type: "Полная занятость",
      description:
        "Редактирование и проверка качества переводов, обеспечение стилистической и терминологической согласованности, взаимодействие с переводчиками.",
      requirements: [
        "Высшее филологическое/лингвистическое образование",
        "Опыт работы редактором от 4 лет",
        "Свободное владение как минимум двумя иностранными языками",
        "Отличное знание русского языка и стилистики",
        "Внимательность к деталям, ответственность",
      ],
      category: "editing",
    },
    {
      id: 4,
      title: "Менеджер проектов",
      department: "Отдел управления проектами",
      location: "Офис",
      type: "Полная занятость",
      description:
        "Координация переводческих проектов, взаимодействие с клиентами и переводчиками, контроль сроков и качества выполнения работ.",
      requirements: [
        "Высшее образование",
        "Опыт работы в управлении проектами от 2 лет",
        "Знание английского языка на уровне не ниже B2",
        "Организаторские способности и стрессоустойчивость",
        "Навыки работы с CAT-инструментами будут преимуществом",
      ],
      category: "management",
    },
    {
      id: 5,
      title: "Локализатор программного обеспечения",
      department: "IT и локализация",
      location: "Офис/Удаленно",
      type: "Полная занятость",
      description:
        "Локализация интерфейсов ПО, мобильных приложений и веб-сайтов. Адаптация контента под культурные особенности целевой аудитории.",
      requirements: [
        "Высшее образование (лингвистика, филология, IT)",
        "Опыт работы в локализации от 2 лет",
        "Знание английского языка на уровне C1",
        "Понимание принципов UI/UX",
        "Опыт работы с локализационными инструментами",
      ],
      category: "it",
    },
    {
      id: 6,
      title: "Специалист по маркетингу",
      department: "Маркетинг",
      location: "Офис",
      type: "Полная занятость",
      description:
        "Разработка и реализация маркетинговой стратегии компании, ведение социальных сетей, создание контента, взаимодействие с клиентами.",
      requirements: [
        "Высшее образование в области маркетинга или смежных областях",
        "Опыт работы в B2B маркетинге от 2 лет",
        "Отличные навыки создания контента",
        "Знание принципов SMM и SEO",
        "Креативность и аналитический склад ума",
      ],
      category: "other",
    },
  ];

  const filteredPositions =
    activeTab === "all"
      ? positions
      : positions.filter((position) => position.category === activeTab);

  return (
    <>
      {/* Hero section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Карьера в Эталон
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Присоединяйтесь к нашей команде профессионалов! Мы предлагаем
                интересные проекты, возможности для профессионального роста и
                дружественную рабочую атмосферу.
              </p>
              <a
                href="#vacancies"
                className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors inline-block"
              >
                Смотреть вакансии
              </a>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-96">
                <Image
                  src="/images/Team-img/team-career-hero.jpg"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  alt="Работа в Эталон"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему стоит работать с нами */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Почему стоит работать с нами
              </h2>
              <p className="text-gray-700 mb-6">
                В Эталон мы создаем комфортные условия для
                профессионального роста и развития наших сотрудников. Мы ценим
                таланты и стремимся создать среду, где каждый может реализовать
                свой потенциал.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <i className={benefit.icon}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative w-full h-80">
                <Image
                  src="/images/Team-img/team-career-life.jpg"
                  alt="Офисная жизнь в Эталон"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс отбора */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Как мы отбираем сотрудников
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наш процесс подбора персонала разработан для выявления лучших
              специалистов, которые разделяют наши ценности и стремятся к
              профессиональному совершенству.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6 border-r border-b md:border-b-0 border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <h3 className="font-bold text-lg">Рассмотрение резюме</h3>
                </div>
                <p className="text-gray-600">
                  Мы внимательно изучаем все поступающие резюме, оценивая опыт,
                  образование и навыки кандидатов.
                </p>
              </div>
              <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <h3 className="font-bold text-lg">Тестовое задание</h3>
                </div>
                <p className="text-gray-600">
                  Кандидатам предлагается выполнить тестовое задание для оценки
                  профессиональных навыков.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6 border-r border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <h3 className="font-bold text-lg">Собеседование</h3>
                </div>
                <p className="text-gray-600">
                  Проводим интервью с отобранными кандидатами для выявления
                  личностных качеств и соответствия ценностям компании.
                </p>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <h3 className="font-bold text-lg">Предложение о работе</h3>
                </div>
                <p className="text-gray-600">
                  Успешным кандидатам делаем предложение о работе и приглашаем
                  присоединиться к нашей команде.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Открытые вакансии */}
      <section id="vacancies" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Открытые вакансии</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ознакомьтесь с текущими вакансиями в нашей компании. Если вы не
              нашли подходящую позицию, вы можете отправить нам свое резюме для
              рассмотрения в будущем.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex overflow-x-auto space-x-2 py-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Все вакансии
              </button>
              <button
                onClick={() => setActiveTab("translation")}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === "translation"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Перевод
              </button>
              <button
                onClick={() => setActiveTab("editing")}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === "editing"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Редактирование
              </button>
              <button
                onClick={() => setActiveTab("management")}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === "management"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Управление
              </button>
              <button
                onClick={() => setActiveTab("it")}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === "it"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                IT и локализация
              </button>
              <button
                onClick={() => setActiveTab("other")}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === "other"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Другое
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPositions.map((position) => (
              <div
                key={position.id}
                className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <span className="mr-2">
                      <i className="fas fa-building"></i>
                    </span>
                    <span>{position.department}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <span className="mr-2">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">
                      <i className="far fa-clock"></i>
                    </span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{position.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Требования:</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={"tel:+996557590557"}
                  className="inline-block bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Откликнуться
                </a>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                В этой категории сейчас нет открытых вакансий.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ответы на самые распространенные вопросы о работе в нашей компании
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">
                  Как проходит процесс трудоустройства?
                </h3>
                <p className="text-gray-700">
                  После получения вашего резюме мы рассмотрим его в течение 5
                  рабочих дней. Если ваша кандидатура заинтересует нас, мы
                  свяжемся с вами для проведения тестового задания, а затем
                  пригласим на собеседование.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">
                  Какие возможности для карьерного роста?
                </h3>
                <p className="text-gray-700">
                  Мы поддерживаем профессиональный рост наших сотрудников и
                  предлагаем различные пути развития карьеры - от углубления
                  экспертизы в своей области до перехода на руководящие позиции.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">
                  Есть ли у вас программа обучения для новых сотрудников?
                </h3>
                <p className="text-gray-700">
                  Да, у нас действует программа адаптации и обучения для новых
                  сотрудников. В течение первого месяца работы вы пройдете
                  необходимые тренинги и получите поддержку наставника.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">
                  Возможна ли удаленная работа?
                </h3>
                <p className="text-gray-700">
                  В зависимости от позиции, мы предлагаем различные форматы
                  работы - полностью удаленную, гибридную или работу в офисе.
                  Конкретные условия обсуждаются на собеседовании.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Присоединяйтесь к команде Эталон
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Если вы стремитесь к профессиональному росту и хотите работать в
            дружной команде профессионалов, мы будем рады видеть вас в нашем
            коллективе!
          </p>
          <a
            href="tel:+996557590557"
            className="bg-white text-blue-600 font-medium px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors inline-block"
          >
            Откликнуться на вакансию
          </a>
        </div>
      </section>
    </>
  );
}
