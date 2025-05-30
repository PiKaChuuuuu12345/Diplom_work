"use client";

import Link from "next/link";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  TouchEvent,
  MouseEvent,
} from "react";

// Custom Carousel Hook
const useCarousel = (totalSlides: number, itemsPerSlide: number = 10) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  // Calculate total slides based on total items and items per slide
  const totalItems = totalSlides;
  const slides = Math.ceil(totalItems / itemsPerSlide);

  // Update slide width on window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        setSlideWidth(carouselRef.current.offsetWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Navigate to a specific slide
  const goToSlide = useCallback(
    (index: number) => {
      // Ensure index is within bounds
      const validIndex = Math.max(0, Math.min(index, slides - 1));
      setCurrentSlide(validIndex);

      if (slidesContainerRef.current) {
        slidesContainerRef.current.style.transform = `translateX(-${
          validIndex * slideWidth
        }px)`;
      }
    },
    [slides, slideWidth]
  );

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides);
  }, [currentSlide, goToSlide, slides]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides) % slides);
  }, [currentSlide, goToSlide, slides]);

  // Handle touch events for swipe support
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -100) {
      // Swipe right
      prevSlide();
    }
  };

  // Handle mouse drag events
  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const x = e.clientX;
    const walk = (x - startX) * 2; // Multiply to make drag more responsive

    if (slidesContainerRef.current) {
      const currentOffset = -currentSlide * slideWidth;
      slidesContainerRef.current.style.transform = `translateX(${
        currentOffset + walk
      }px)`;
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (!isDragging) return;

    setIsDragging(false);
    const x = e.clientX;
    const walk = startX - x;

    if (walk > 100) {
      nextSlide();
    } else if (walk < -100) {
      prevSlide();
    } else {
      // Snap back to current slide
      goToSlide(currentSlide);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      goToSlide(currentSlide);
    }
  };

  // Auto-cycle slides (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Update slide position when currentSlide or slideWidth changes
  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide, slideWidth, goToSlide]);

  return {
    currentSlide,
    carouselRef,
    slidesContainerRef,
    goToSlide,
    nextSlide,
    prevSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    slides,
    isDragging,
  };
};

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Айгүл Турсунбекова",
      position: "Генеральный директор",
      description:
        "Основатель компании с 15-летним опытом в сфере переводов. Специалист по юридическому и бизнес-переводу.",
      image: "",
    },
    {
      id: 2,
      name: "Нурбек Садыков",
      position: "Руководитель отдела технических переводов",
      description:
        "Эксперт в области технического перевода с опытом работы более 10 лет. Специализируется на IT и инженерной документации.",
      image: "",
    },
    {
      id: 3,
      name: "Айзада Касымова",
      position: "Главный редактор",
      description:
        "Филолог с 12-летним стажем. Отвечает за качество и стилистическую точность всех выполняемых переводов.",
      image: "",
    },
  ];

  const stats = [
    {
      id: 1,
      value: "10+",
      label: "лет опыта",
      icon: "fas fa-calendar-alt",
    },
    {
      id: 2,
      value: "40+",
      label: "языков перевода",
      icon: "fas fa-language",
    },
    {
      id: 3,
      value: "4000+",
      label: "довольных клиентов",
      icon: "fas fa-users",
    },
    {
      id: 4,
      value: "10000+",
      label: "выполненных проектов",
      icon: "fas fa-file-alt",
    },
  ];

  const languages = [
    { id: 1, name: "Кыргызский", level: "Профессиональный" },
    { id: 2, name: "Русский", level: "Профессиональный" },
    { id: 3, name: "Английский", level: "Профессиональный" },
    { id: 4, name: "Немецкий", level: "Профессиональный" },
    { id: 5, name: "Казахский", level: "Профессиональный" },
    { id: 6, name: "Японский", level: "Профессиональный" },
    { id: 7, name: "Корейский", level: "Профессиональный" },
    { id: 8, name: "Китайский", level: "Профессиональный" },
    { id: 9, name: "Арабский", level: "Профессиональный" },
    { id: 10, name: "Турецкий", level: "Профессиональный" },
    { id: 11, name: "Французский", level: "Профессиональный" },
    { id: 12, name: "Испанский", level: "Профессиональный" },
    { id: 13, name: "Итальянский", level: "Профессиональный" },
    { id: 14, name: "Португальский", level: "Профессиональный" },
    { id: 15, name: "Украинский", level: "Профессиональный" },
    { id: 16, name: "Белорусский", level: "Профессиональный" },
    { id: 17, name: "Таджикский", level: "Профессиональный" },
    { id: 18, name: "Узбекский", level: "Профессиональный" },
    { id: 19, name: "Туркменский", level: "Профессиональный" },
    { id: 20, name: "Грузинский", level: "Профессиональный" },
    { id: 21, name: "Армянский", level: "Профессиональный" },
    { id: 22, name: "Азербайджанский", level: "Профессиональный" },
    { id: 23, name: "Польский", level: "Профессиональный" },
    { id: 24, name: "Чешский", level: "Профессиональный" },
    { id: 25, name: "Сербский", level: "Профессиональный" },
    { id: 26, name: "Хинди", level: "Профессиональный" },
    { id: 27, name: "Урду", level: "Профессиональный" },
    { id: 28, name: "Фарси (Персидский)", level: "Профессиональный" },
    { id: 29, name: "Иврит", level: "Профессиональный" },
    { id: 30, name: "Суахили", level: "Профессиональный" }, // Африка
    { id: 31, name: "Амхарский", level: "Профессиональный" }, // Африка
    { id: 32, name: "Малайский", level: "Профессиональный" },
    { id: 33, name: "Индонезийский", level: "Профессиональный" },
    { id: 34, name: "Вьетнамский", level: "Профессиональный" },
    { id: 35, name: "Тайский", level: "Профессиональный" },
    { id: 36, name: "Лаосский", level: "Профессиональный" },
    { id: 37, name: "Монгольский", level: "Профессиональный" },
    { id: 38, name: "Румынский", level: "Профессиональный" },
    { id: 39, name: "Болгарский", level: "Профессиональный" },
    { id: 40, name: "Албанский", level: "Профессиональный" },
    { id: 41, name: "Греческий", level: "Профессиональный" },
    { id: 42, name: "Нидерландский", level: "Профессиональный" },
    { id: 43, name: "Бенгальский", level: "Профессиональный" },
  ];

  const itemsPerSlide = 10;

  const carousel = useCarousel(languages.length, itemsPerSlide);

  return (
    <>
      {/* Hero section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                О компании Эталон
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Более 10 лет мы предоставляем услуги профессионального перевода
                для бизнеса и частных клиентов, объединяя экспертизу, качество и
                современные технологии.
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
                  src="/images/Team-img/team-work.jpg"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  alt="Команда Эталон за работой"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Наша история</h2>
              <p className="text-gray-700 mb-4">
                Компания Эталон была основана в 2012 году группой
                профессиональных переводчиков с опытом работы в различных
                отраслях. Мы начали с небольшой команды из 5 человек,
                специализирующихся на переводе бизнес-документации.
              </p>
              <p className="text-gray-700 mb-6">
                За более 10 лет работы мы значительно расширили спектр
                предоставляемых услуг и команду экспертов. Сегодня Эталон – это
                надежный партнер для компаний разного масштаба, от стартапов до
                крупных корпораций, а также частных клиентов, нуждающихся в
                качественном переводе.
              </p>
              <p className="text-gray-700">
                В нашей команде работают профессиональные переводчики с высшим
                лингвистическим образованием, многолетним опытом и глубокими
                знаниями в специализированных областях. Мы постоянно повышаем
                квалификацию и следим за новыми тенденциями в индустрии
                перевода.
              </p>
            </div>
            <div>
              <div className="relative w-full h-80">
                <Image
                  src="/images/Team-img/team-hist.jpg"
                  alt="История компании Эталон"
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

      {/* Статистика */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Эталон в цифрах</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              За годы работы мы достигли значительных результатов, обеспечивая
              качественные переводы для сотен клиентов на разных языках.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white rounded-lg shadow p-6 text-center"
              >
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  <i className={stat.icon}></i>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative w-full h-80">
                <Image
                  src="/images/Team-img/team-value.jpg"
                  alt="Ценности компании Эталон"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Наши ценности</h2>
              <p className="text-gray-700 mb-6">
                В основе нашей работы лежат принципы, которые помогают нам
                предоставлять услуги наивысшего качества и строить долгосрочные
                отношения с клиентами.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-3 mt-1"
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
                  <div>
                    <h3 className="font-semibold text-lg">Качество</h3>
                    <p className="text-gray-600">
                      Мы гарантируем высокое качество каждого перевода благодаря
                      многоуровневой проверке и профессионализму наших
                      специалистов.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-3 mt-1"
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
                  <div>
                    <h3 className="font-semibold text-lg">Точность</h3>
                    <p className="text-gray-600">
                      Максимально точная передача информации с учетом
                      особенностей отрасли и специфической терминологии.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-3 mt-1"
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
                  <div>
                    <h3 className="font-semibold text-lg">
                      Конфиденциальность
                    </h3>
                    <p className="text-gray-600">
                      Мы обеспечиваем полную конфиденциальность всех материалов,
                      предоставленных клиентами.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-3 mt-1"
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
                  <div>
                    <h3 className="font-semibold text-lg">Оперативность</h3>
                    <p className="text-gray-600">
                      Мы ценим время наших клиентов и строго соблюдаем
                      установленные сроки выполнения проектов.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Языки перевода - CUSTOM CAROUSEL */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Языки перевода</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Мы предоставляем услуги перевода более чем на 40 языков мира. Все
              наши переводчики имеют профессиональный уровень владения языком и
              специализируются в различных отраслях.
            </p>
          </div>

          {/* Custom Carousel Implementation */}
          <div className="relative">
            <div
              ref={carousel.carouselRef}
              className="overflow-hidden"
              style={{
                touchAction: "pan-y",
                cursor: carousel.isDragging ? "grabbing" : "grab",
              }}
            >
              <div
                ref={carousel.slidesContainerRef}
                className="flex transition-transform duration-500 ease-out"
                onTouchStart={carousel.handleTouchStart}
                onTouchMove={carousel.handleTouchMove}
                onTouchEnd={carousel.handleTouchEnd}
                onMouseDown={carousel.handleMouseDown}
                onMouseMove={carousel.handleMouseMove}
                onMouseUp={carousel.handleMouseUp}
                onMouseLeave={carousel.handleMouseLeave}
              >
                {/* Generate slides based on number of languages */}
                {Array.from({ length: carousel.slides }).map(
                  (_, slideIndex) => (
                    <div key={slideIndex} className="min-w-full flex-none">
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {languages
                          .slice(
                            slideIndex * itemsPerSlide,
                            (slideIndex + 1) * itemsPerSlide
                          )
                          .map((language) => (
                            <div
                              key={language.id}
                              className="bg-blue-700 rounded-lg p-4 text-center transform transition-transform duration-300 hover:scale-105"
                            >
                              <h3 className="text-lg font-semibold mb-1">
                                {language.name}
                              </h3>
                              <p className="text-blue-100 text-sm">
                                {language.level}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-800 hover:bg-blue-900 text-white rounded-full p-3 shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none"
              onClick={carousel.prevSlide}
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-800 hover:bg-blue-900 text-white rounded-full p-3 shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none"
              onClick={carousel.nextSlide}
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: carousel.slides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === carousel.currentSlide
                      ? "bg-white scale-125"
                      : "bg-blue-400 hover:bg-blue-300"
                  }`}
                  onClick={() => carousel.goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Знакомьтесь с профессионалами, которые делают Эталон лидером в
              области переводческих услуг.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
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
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about/team"
              className="inline-flex items-center text-blue-600 font-medium hover:underline underline-offset-4"
            >
              Познакомиться со всей командой
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

      {/* Контактная форма */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Есть вопросы или готовы начать сотрудничество? Оставьте заявку, и
              мы свяжемся с вами в ближайшее время для обсуждения вашего
              проекта.
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
