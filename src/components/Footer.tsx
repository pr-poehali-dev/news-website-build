const Footer = () => {
  return (
    <footer className="bg-[#2C2416] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐕</span>
              <h3 className="text-xl font-bold">DogFood Guide</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Мы помогаем владельцам собак выбрать правильное питание для их питомцев на основе породы, возраста и индивидуальных особенностей.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#FF8C00] transition">
                  Главная
                </a>
              </li>
              <li>
                <a href="/breeds" className="text-gray-400 hover:text-[#FF8C00] transition">
                  Подбор по породам
                </a>
              </li>
              <li>
                <a href="/age" className="text-gray-400 hover:text-[#FF8C00] transition">
                  Подбор по возрасту
                </a>
              </li>
              <li>
                <a href="/contacts" className="text-gray-400 hover:text-[#FF8C00] transition">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>8 (800) 555-35-35</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@dogfood.ru" className="hover:text-[#FF8C00] transition">
                  info@dogfood.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>г. Москва, ул. Примерная, д. 10</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition text-sm font-bold">
                VK
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition text-sm font-bold">
                TG
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:opacity-90 transition text-sm font-bold">
                IG
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-1">Режим работы:</p>
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб-Вс: выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2024 DogFood Guide. Все права защищены.</p>
          <p className="mt-2">Информация на сайте носит рекомендательный характер. Перед изменением рациона проконсультируйтесь с ветеринаром.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
