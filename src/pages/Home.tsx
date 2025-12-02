const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[600px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-6xl font-bold mb-6">UpLink-CTRL</h1>
          <p className="text-3xl mb-4 font-semibold">Профессиональный монтаж слаботочных систем</p>
          <p className="text-xl mb-8 max-w-3xl">Проектирование, монтаж и обслуживание систем видеонаблюдения, локальных сетей, структурированных кабельных систем и систем контроля доступа</p>
          <div className="flex gap-4">
            <a href="/contacts" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
              Получить консультацию
            </a>
            <a href="/services" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-lg">
              Наши услуги
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Комплексные решения для вашего бизнеса</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="/cctv" className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📹</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Видеонаблюдение</h3>
              <p className="text-gray-600">Проектирование и установка систем видеонаблюдения любой сложности. IP-камеры, аналоговые системы, облачные решения</p>
            </a>
            <a href="/lan" className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌐</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">ЛВС</h3>
              <p className="text-gray-600">Построение локальных вычислительных сетей. Настройка роутеров, коммутаторов, Wi-Fi систем</p>
            </a>
            <a href="/scs" className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔌</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">СКС</h3>
              <p className="text-gray-600">Структурированные кабельные системы. Прокладка медных и оптоволоконных линий, монтаж кроссов</p>
            </a>
            <a href="/acs" className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔐</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">СКУД</h3>
              <p className="text-gray-600">Системы контроля и управления доступом. Турникеты, шлагбаумы, электронные замки, домофоны</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Почему выбирают нас?</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Профессиональный подход к каждому проекту</p>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-2xl">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Опыт более 10 лет</h3>
                    <p className="text-gray-700">Реализовали сотни проектов различной сложности для бизнеса и частных лиц</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-2xl">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Сертифицированные специалисты</h3>
                    <p className="text-gray-700">Наши инженеры имеют официальные сертификаты производителей оборудования</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-2xl">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Официальная гарантия</h3>
                    <p className="text-gray-700">Предоставляем гарантию на все виды работ и установленное оборудование</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-2xl">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Комплексный подход</h3>
                    <p className="text-gray-700">От проектирования до сдачи объекта «под ключ» и последующего обслуживания</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Этапы работы</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <strong>Консультация</strong> — обсуждаем ваши задачи и требования
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <strong>Выезд на объект</strong> — оцениваем объём работ
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <strong>Проект и смета</strong> — разрабатываем решение
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <strong>Монтаж</strong> — выполняем работы в срок
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">5</span>
                  <div>
                    <strong>Сдача и обучение</strong> — показываем как пользоваться
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для обсуждения деталей проекта
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contacts" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
              Оставить заявку
            </a>
            <a href="tel:+74951234567" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition text-lg">
              Позвонить: +7 (495) 123-45-67
            </a>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-200">Реализованных проектов</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-blue-200">Лет на рынке</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-200">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;