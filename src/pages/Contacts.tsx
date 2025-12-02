const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Свяжитесь с нами</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для обсуждения проекта
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Оставить заявку</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Ваше имя *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Телефон *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Интересующая услуга</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none">
                    <option>Видеонаблюдение</option>
                    <option>ЛВС (локальная сеть)</option>
                    <option>СКС (структурированные кабельные системы)</option>
                    <option>СКУД (контроль доступа)</option>
                    <option>Комплексное решение</option>
                    <option>Консультация</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Сообщение</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    placeholder="Опишите ваш проект или задачу..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
                >
                  Отправить заявку
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Контактная информация</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Телефоны</h3>
                    <p className="text-gray-700 mb-1">
                      <a href="tel:+74951234567" className="hover:text-blue-600 transition">+7 (495) 123-45-67</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="tel:+78005553535" className="hover:text-blue-600 transition">8 (800) 555-35-35</a> <span className="text-sm text-gray-500">(бесплатно)</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-700 mb-1">
                      <a href="mailto:info@uplink-ctrl.ru" className="hover:text-blue-600 transition">info@uplink-ctrl.ru</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="mailto:support@uplink-ctrl.ru" className="hover:text-blue-600 transition">support@uplink-ctrl.ru</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Офис</h3>
                    <p className="text-gray-700">г. Москва, ул. Примерная, д. 10</p>
                    <p className="text-gray-700">Офис 305, 3 этаж</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Режим работы</h3>
                    <p className="text-gray-700">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-gray-700">Сб: 10:00 - 16:00</p>
                    <p className="text-gray-700">Вс: выходной</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition font-bold text-sm">
                    VK
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition font-bold text-sm">
                    TG
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition font-bold text-sm">
                    WA
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900">💬 Быстрая связь</h3>
                <p className="text-gray-600 mb-4">Ответим на вопросы в течение 15 минут</p>
                <div className="flex gap-3">
                  <a href="tel:+74951234567" className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition">
                    Позвонить
                  </a>
                  <a href="#" className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-green-600 transition">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Частые вопросы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Как быстро можно начать работы?</h3>
                <p className="text-gray-600">После согласования проекта и подписания договора приступаем к работам в течение 3-5 рабочих дней.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Предоставляете ли гарантию?</h3>
                <p className="text-gray-600">Да, на все работы предоставляем гарантию от 12 до 36 месяцев в зависимости от типа системы.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Выполняете монтаж в регионах?</h3>
                <p className="text-gray-600">Да, работаем по всей России. Для крупных проектов в регионах выезд инженера бесплатный.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Можно ли заказать только проект?</h3>
                <p className="text-gray-600">Да, разрабатываем проектную документацию отдельно. Стоимость от 50 000 ₽ в зависимости от сложности.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Работаете с юридическими лицами?</h3>
                <p className="text-gray-600">Да, работаем как с физическими, так и с юридическими лицами. Полный пакет документов, НДС.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Есть ли рассрочка или кредит?</h3>
                <p className="text-gray-600">Да, предоставляем рассрочку до 12 месяцев и помогаем с оформлением кредита в банках-партнёрах.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Позвоните нам прямо сейчас, и мы ответим на все ваши вопросы</p>
          <a href="tel:+74951234567" className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-xl">
            <span>📞</span>
            <span>+7 (495) 123-45-67</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
