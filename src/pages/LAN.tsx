const LAN = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[400px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Локальные вычислительные сети (ЛВС)</h1>
          <p className="text-xl max-w-3xl">Построение надёжных и высокоскоростных сетей для вашего бизнеса</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-3">Проектирование сети</h3>
              <p className="text-gray-600 mb-4">Разработка архитектуры сети с учётом специфики вашего бизнеса и планов развития</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Анализ требований</li>
                <li>✓ Схема сети</li>
                <li>✓ Выбор оборудования</li>
                <li>✓ Расчёт пропускной способности</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3">Монтаж и настройка</h3>
              <p className="text-gray-600 mb-4">Профессиональная установка и конфигурация сетевого оборудования</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Прокладка кабелей</li>
                <li>✓ Установка коммутаторов</li>
                <li>✓ Настройка маршрутизаторов</li>
                <li>✓ Конфигурация VLAN</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">📶</div>
              <h3 className="text-2xl font-bold mb-3">Wi-Fi сети</h3>
              <p className="text-gray-600 mb-4">Проектирование и развёртывание беспроводных сетей с полным покрытием</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Wi-Fi 6 / 6E</li>
                <li>✓ Mesh-системы</li>
                <li>✓ Гостевой доступ</li>
                <li>✓ Роуминг без разрывов</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-3">Сетевая безопасность</h3>
              <p className="text-gray-600 mb-4">Защита корпоративной сети от внешних и внутренних угроз</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Межсетевые экраны</li>
                <li>✓ VPN</li>
                <li>✓ Контроль доступа</li>
                <li>✓ Мониторинг трафика</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Высокая скорость</h3>
              <p className="text-gray-600 mb-4">Сети с пропускной способностью до 100 Гбит/с для требовательных задач</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 1 / 10 / 40 Гбит/с</li>
                <li>✓ Медь Cat6a / Cat7</li>
                <li>✓ Оптоволокно</li>
                <li>✓ Агрегация каналов</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Мониторинг и поддержка</h3>
              <p className="text-gray-600 mb-4">Круглосуточный контроль работы сети и оперативное устранение неполадок</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 24/7 мониторинг</li>
                <li>✓ Техподдержка</li>
                <li>✓ Профилактика</li>
                <li>✓ Обновления ПО</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Типовые решения</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Готовые конфигурации для разных задач</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Малый офис</h3>
              <p className="text-gray-600 mb-6">До 20 рабочих мест</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Коммутатор 24 порта</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Маршрутизатор</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>2 точки доступа Wi-Fi</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Прокладка кабелей</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Базовая настройка</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">от 150 000 ₽</div>
              <a href="/contacts" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Заказать расчёт
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600">
              <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">Популярное</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Средний офис</h3>
              <p className="text-gray-600 mb-6">20-50 рабочих мест</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>2 коммутатора 48 портов</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Маршрутизатор + Firewall</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>4-6 точек доступа Wi-Fi</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>СКС с серверной</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>VLAN и безопасность</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">от 350 000 ₽</div>
              <a href="/contacts" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Заказать расчёт
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Крупная компания</h3>
              <p className="text-gray-600 mb-6">50+ рабочих мест</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Масштабируемая архитектура</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Управляемые коммутаторы</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Корпоративный Wi-Fi</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Резервирование каналов</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>24/7 мониторинг</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">от 800 000 ₽</div>
              <a href="/contacts" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Заказать расчёт
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Производители оборудования</h2>
          <p className="text-center text-gray-600 mb-12">Работаем с лидерами рынка</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">Cisco</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">D-Link</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">Ubiquiti</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">MikroTik</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">TP-Link</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна сеть для офиса?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Оставьте заявку для бесплатного выезда специалиста и расчёта стоимости</p>
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

export default LAN;
