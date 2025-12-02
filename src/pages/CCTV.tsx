const CCTV = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[400px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Системы видеонаблюдения</h1>
          <p className="text-xl max-w-3xl">Проектирование и монтаж современных систем видеонаблюдения для надёжной защиты вашего объекта</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Что мы предлагаем</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-3">IP-видеонаблюдение</h3>
              <p className="text-gray-600 mb-4">Современные IP-камеры с высоким разрешением (до 4K), удалённым доступом и аналитикой</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Разрешение до 8 Мп</li>
                <li>✓ Удалённый просмотр</li>
                <li>✓ Детекция движения</li>
                <li>✓ Распознавание лиц</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-2xl font-bold mb-3">Аналоговые системы</h3>
              <p className="text-gray-600 mb-4">Надёжные и экономичные решения на основе HD-TVI, AHD, CVI технологий</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ HD качество до 5 Мп</li>
                <li>✓ Простота монтажа</li>
                <li>✓ Доступная цена</li>
                <li>✓ Совместимость</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-3">Облачные решения</h3>
              <p className="text-gray-600 mb-4">Хранение видео в облаке, доступ из любой точки мира через мобильное приложение</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Без видеорегистратора</li>
                <li>✓ Безопасное хранение</li>
                <li>✓ Мобильный доступ</li>
                <li>✓ Масштабируемость</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-2xl font-bold mb-3">Ночное видение</h3>
              <p className="text-gray-600 mb-4">Камеры с ИК-подсветкой и технологией Starlight для съёмки в полной темноте</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Дальность до 80 метров</li>
                <li>✓ Цветная картинка ночью</li>
                <li>✓ Smart IR</li>
                <li>✓ WDR</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3">Для бизнеса</h3>
              <p className="text-gray-600 mb-4">Комплексные решения для офисов, складов, магазинов и производств</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Видеоаналитика</li>
                <li>✓ Подсчёт посетителей</li>
                <li>✓ Контроль периметра</li>
                <li>✓ Интеграция с СКУД</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">Для дома</h3>
              <p className="text-gray-600 mb-4">Защита частных домов, дач, квартир. Простое управление через смартфон</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Мобильные уведомления</li>
                <li>✓ Двусторонняя связь</li>
                <li>✓ Домофония</li>
                <li>✓ Умный дом</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Этапы работы</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Выезд на объект</h3>
                  <p className="text-gray-700">Осматриваем территорию, определяем количество и места установки камер, особенности объекта</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Проектирование</h3>
                  <p className="text-gray-700">Разрабатываем схему расположения камер, подбираем оборудование, рассчитываем смету</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Монтаж</h3>
                  <p className="text-gray-700">Прокладываем кабели, устанавливаем камеры, видеорегистратор, настраиваем оборудование</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Настройка и обучение</h3>
                  <p className="text-gray-700">Настраиваем удалённый доступ, мобильное приложение, обучаем персонал работе с системой</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">5</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Сдача и поддержка</h3>
                  <p className="text-gray-700">Сдаём объект с документацией, предоставляем гарантию, доступны для технической поддержки</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Производители оборудования</h2>
          <p className="text-center text-gray-600 mb-12">Работаем только с проверенными брендами</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">Hikvision</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">Dahua</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">Axis</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">Uniview</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Оставьте заявку, и наш специалист свяжется с вами для расчёта стоимости системы видеонаблюдения</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contacts" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
              Оставить заявку
            </a>
            <a href="tel:+74951234567" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition text-lg">
              Позвонить
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CCTV;
