const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-[#8B4513] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Свяжитесь с нами</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Остались вопросы о питании вашего питомца? Мы всегда рады помочь!
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#8B4513]">Напишите нам</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Ваше имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF8C00] focus:outline-none"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF8C00] focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF8C00] focus:outline-none"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Порода вашей собаки</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF8C00] focus:outline-none"
                    placeholder="Например: Лабрадор"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Сообщение</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF8C00] focus:outline-none"
                    placeholder="Расскажите о вашем вопросе..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF8C00] text-white py-3 rounded-lg font-semibold hover:bg-[#E67E00] transition"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#8B4513]">Контактная информация</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF8C00] text-white rounded-lg flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (800) 555-35-35 (бесплатно)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF8C00] text-white rounded-lg flex items-center justify-center text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@dogfood.ru</p>
                    <p className="text-gray-600">support@dogfood.ru</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF8C00] text-white rounded-lg flex items-center justify-center text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 10</p>
                    <p className="text-gray-600">Офис 305</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF8C00] text-white rounded-lg flex items-center justify-center text-xl">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F5E6D3] rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-[#8B4513]">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                    VK
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition">
                    TG
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg flex items-center justify-center hover:opacity-90 transition">
                    IG
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition">
                    WA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F5E6D3]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#8B4513]">Часто задаваемые вопросы</h2>
            <div className="space-y-4 text-left">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-2 text-[#8B4513]">Как быстро вы отвечаете на вопросы?</h3>
                <p className="text-gray-600">Мы стараемся отвечать в течение 24 часов в рабочие дни. В срочных случаях звоните по телефону.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-2 text-[#8B4513]">Можно ли получить индивидуальную консультацию?</h3>
                <p className="text-gray-600">Да, мы предоставляем бесплатные консультации по подбору корма для вашего питомца. Заполните форму выше или позвоните нам.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-2 text-[#8B4513]">Вы продаете корма?</h3>
                <p className="text-gray-600">Нет, мы информационный портал. Мы помогаем выбрать подходящий корм, но не занимаемся продажей.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
