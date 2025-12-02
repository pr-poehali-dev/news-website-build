const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">⚡</span>
              <h3 className="text-xl font-bold">UpLink-CTRL</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Профессиональный монтаж слаботочных систем: видеонаблюдение, ЛВС, СКС, СКУД. Опыт более 10 лет.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition">
                  Главная
                </a>
              </li>
              <li>
                <a href="/cctv" className="text-gray-400 hover:text-blue-400 transition">
                  Видеонаблюдение
                </a>
              </li>
              <li>
                <a href="/lan" className="text-gray-400 hover:text-blue-400 transition">
                  ЛВС
                </a>
              </li>
              <li>
                <a href="/scs" className="text-gray-400 hover:text-blue-400 transition">
                  СКС
                </a>
              </li>
              <li>
                <a href="/acs" className="text-gray-400 hover:text-blue-400 transition">
                  СКУД
                </a>
              </li>
              <li>
                <a href="/contacts" className="text-gray-400 hover:text-blue-400 transition">
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
                <a href="tel:+74951234567" className="hover:text-blue-400 transition">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+78005553535" className="hover:text-blue-400 transition">8 (800) 555-35-35</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@uplink-ctrl.ru" className="hover:text-blue-400 transition">
                  info@uplink-ctrl.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>г. Москва, ул. Примерная, д. 10</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Режим работы</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Пн-Пт: 9:00 - 20:00</p>
              <p>Сб: 10:00 - 16:00</p>
              <p>Вс: выходной</p>
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-3">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition text-sm font-bold">
                  VK
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition text-sm font-bold">
                  TG
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2024 UpLink-CTRL. Все права защищены.</p>
          <p className="mt-2">Профессиональный монтаж слаботочных систем по всей России</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;