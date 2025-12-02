const ACS = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[400px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Системы контроля и управления доступом (СКУД)</h1>
          <p className="text-xl max-w-3xl">Современные решения для контроля доступа на объекты и учёта рабочего времени</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Наши решения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-3">Контроль доступа</h3>
              <p className="text-gray-600 mb-4">Ограничение и учёт прохода сотрудников и посетителей в помещения</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Карты, брелоки, биометрия</li>
                <li>✓ Многоуровневый доступ</li>
                <li>✓ Временные зоны</li>
                <li>✓ История событий</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-3">Учёт рабочего времени</h3>
              <p className="text-gray-600 mb-4">Автоматизированная система контроля прихода и ухода персонала</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Отметки времени</li>
                <li>✓ Отчёты по сотрудникам</li>
                <li>✓ Интеграция с 1С</li>
                <li>✓ Расчёт зарплаты</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🚪</div>
              <h3 className="text-2xl font-bold mb-3">Управление замками</h3>
              <p className="text-gray-600 mb-4">Электронные и электромеханические замки с удалённым управлением</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Электромагнитные замки</li>
                <li>✓ Электромоторные замки</li>
                <li>✓ Электрозащёлки</li>
                <li>✓ Удалённое открытие</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="text-2xl font-bold mb-3">Турникеты</h3>
              <p className="text-gray-600 mb-4">Установка и настройка турникетов для офисов и производств</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Трипод-турникеты</li>
                <li>✓ Распашные створки</li>
                <li>✓ Полноростовые турникеты</li>
                <li>✓ Скоростные ворота</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-3">Шлагбаумы и ворота</h3>
              <p className="text-gray-600 mb-4">Контроль въезда автотранспорта на парковки и территории</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Автоматические шлагбаумы</li>
                <li>✓ Распознавание номеров</li>
                <li>✓ Карты доступа</li>
                <li>✓ Диспетчеризация</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-3">Биометрия</h3>
              <p className="text-gray-600 mb-4">Идентификация по отпечаткам пальцев, лицу, радужке глаза</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Сканеры отпечатков</li>
                <li>✓ Распознавание лиц</li>
                <li>✓ Высокая надёжность</li>
                <li>✓ Невозможность подделки</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Типовые конфигурации</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Готовые решения под ключ</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Базовая СКУД</h3>
              <p className="text-gray-600 mb-6">До 3 дверей</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Контроллер на 2-3 двери</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Считыватели карт</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Электромагнитные замки</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>50 карт доступа</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>ПО для управления</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">от 120 000 ₽</div>
              <a href="/contacts" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Заказать
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600">
              <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">Популярное</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Офисная СКУД</h3>
              <p className="text-gray-600 mb-6">5-10 дверей + турникет</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Сетевые контроллеры</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Турникет-трипод</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Биометрия (опция)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Учёт рабочего времени</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Интеграция с видео</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">от 450 000 ₽</div>
              <a href="/contacts" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Заказать
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Корпоративная СКУД</h3>
              <p className="text-gray-600 mb-6">20+ дверей, турникеты, шлагбаумы</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Распределённая архитектура</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Несколько турникетов</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Парковочная система</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Биометрия, мобильные ключи</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Серверная часть</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">от 1 200 000 ₽</div>
              <a href="/contacts" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Заказать
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Возможности системы</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Для администратора</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Управление правами доступа сотрудников</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Временные зоны доступа (рабочее время, выходные)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Отчёты по проходам и нарушениям</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Удалённое управление замками и турникетами</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Интеграция с HR-системами</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Уведомления о событиях</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Для безопасности</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Журнал всех событий в системе</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Видеоверификация проходов</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Режим антипаники (аварийное открытие)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Контроль попыток несанкционированного доступа</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Карта присутствия сотрудников</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Интеграция с пожарной сигнализацией</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Производители оборудования</h2>
          <p className="text-center text-gray-600 mb-12">Надёжные решения от проверенных брендов</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center shadow">
              <p className="font-bold text-xl">Болид</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow">
              <p className="font-bold text-xl">ITV</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow">
              <p className="font-bold text-xl">ZKTeco</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow">
              <p className="font-bold text-xl">PERCo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна СКУД?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Оставьте заявку, и мы подберём оптимальное решение для вашего объекта</p>
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

export default ACS;
