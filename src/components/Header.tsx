import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <div className="text-3xl">🐕</div>
            <div>
              <h1 className="text-xl font-bold text-[#8B4513]">DogFood Guide</h1>
              <p className="text-xs text-gray-500">Правильное питание для вашей собаки</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-[#FF8C00] font-medium transition">
              Главная
            </a>
            <a href="/breeds" className="text-gray-700 hover:text-[#FF8C00] font-medium transition">
              По породам
            </a>
            <a href="/age" className="text-gray-700 hover:text-[#FF8C00] font-medium transition">
              По возрасту
            </a>
            <a href="/contacts" className="text-gray-700 hover:text-[#FF8C00] font-medium transition">
              Контакты
            </a>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t">
            <div className="flex flex-col gap-3 pt-4">
              <a href="/" className="text-gray-700 hover:text-[#FF8C00] font-medium transition py-2">
                Главная
              </a>
              <a href="/breeds" className="text-gray-700 hover:text-[#FF8C00] font-medium transition py-2">
                По породам
              </a>
              <a href="/age" className="text-gray-700 hover:text-[#FF8C00] font-medium transition py-2">
                По возрасту
              </a>
              <a href="/contacts" className="text-gray-700 hover:text-[#FF8C00] font-medium transition py-2">
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
