"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Etalon
        </Link>

        {/* Мобильная навигация */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Десктопная навигация */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-blue-600 font-medium" : "text-gray-700"
            } hover:text-blue-600 transition-colors`}
          >
            Главная
          </Link>
          <Link
            href="/services"
            className={`${
              pathname === "/services"
                ? "text-blue-600 font-medium"
                : "text-gray-700"
            } hover:text-blue-600 transition-colors`}
          >
            Услуги
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-blue-600 font-medium"
                : "text-gray-700"
            } hover:text-blue-600 transition-colors`}
          >
            О нас
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "text-blue-600 font-medium"
                : "text-gray-700"
            } hover:text-blue-600 transition-colors`}
          >
            Контакты
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            <a href="tel:+996557590557">Заказать перевод</a>
          </button>
        </nav>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-blue-600 font-medium" : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              Главная
            </Link>
            <Link
              href="/services"
              className={`${
                pathname === "/services"
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              Услуги
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              О нас
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              Контакты
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              <a href="tel:+996557590557">Заказать перевод</a>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
