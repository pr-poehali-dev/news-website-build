const SCS = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[400px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Структурированные кабельные системы (СКС)</h1>
          <p className="text-xl max-w-3xl">Проектирование и монтаж современных кабельных систем — основа надёжной IT-инфраструктуры</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Что такое СКС?</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            Структурированная кабельная система — это единая кабельная инфраструктура здания для передачи данных, голоса, видео и других сигналов
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Универсальность</h3>
              <p className="text-gray-600">Одна система для всех коммуникаций: интернет, телефония, видео, СКУД</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">📈</div>
              <h3 className="text-xl font-bold mb-3">Масштабируемость</h3>
              <p className="text-gray-600">Легко расширяется при росте компании без глобальной переделки</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">⏱️</div>
              <h3 className="text-xl font-bold mb-3">Долговечность</h3>
              <p className="text-gray-600">Срок службы 15-25 лет с гарантией производителя</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Виды кабельных систем</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-2xl font-bold mb-4">Медные системы</h3>
              <p className="text-gray-600 mb-6">Витая пара — стандарт для локальных сетей</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Cat 5e (100 МГц)</h4>
                  <p className="text-gray-600 text-sm">До 1 Гбит/с на 100 метров. Базовое решение для офисов</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Cat 6 (250 МГц)</h4>
                  <p className="text-gray-600 text-sm">До 10 Гбит/с на 55 метров. Оптимальный выбор для бизнеса</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Cat 6a (500 МГц)</h4>
                  <p className="text-gray-600 text-sm">До 10 Гбит/с на 100 метров. Для требовательных задач</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Cat 7 / 7a (600-1000 МГц)</h4>
                  <p className="text-gray-600 text-sm">До 100 Гбит/с. Максимальная производительность</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">Оптоволоконные системы</h3>
              <p className="text-gray-600 mb-6">Для максимальной скорости и дальности передачи</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Многомодовое волокно (MM)</h4>
                  <p className="text-gray-600 text-sm">OM3/OM4 — до 10 Гбит/с на 300-550 метров. Для зданий и кампусов</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Одномодовое волокно (SM)</h4>
                  <p className="text-gray-600 text-sm">OS2 — до 100 Гбит/с на десятки километров. Для магистралей</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold mb-2 text-blue-900">Преимущества оптики:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>✓ Невосприимчивость к помехам</li>
                    <li>✓ Защита от прослушки</li>
                    <li>✓ Большие расстояния</li>
                    <li>✓ Высокая скорость</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Компоненты СКС</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Рабочая зона</h3>
              <p className="text-gray-600">Розетки RJ-45, адаптеры, патч-корды на рабочих местах</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Горизонтальная подсистема</h3>
              <p className="text-gray-600">Кабели от рабочих мест до коммутационного шкафа на этаже</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Коммутационная</h3>
              <p className="text-gray-600">Патч-панели, кроссы, шкафы для коммутации на этажах</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Вертикальная подсистема</h3>
              <p className="text-gray-600">Магистральные кабели между этажами и зданиями</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Аппаратная</h3>
              <p className="text-gray-600">Главная серверная с коммутаторами и активным оборудованием</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Администрирование</h3>
              <p className="text-gray-600">Маркировка, схемы, документация по системе</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Этапы монтажа СКС</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Проектирование</h3>
                <p className="text-gray-700">Обследование объекта, разработка проектной документации, расчёт материалов</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Прокладка кабелей</h3>
                <p className="text-gray-700">Монтаж кабельных лотков, прокладка кабелей по трассам, соблюдение стандартов</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Монтаж оборудования</h3>
                <p className="text-gray-700">Установка шкафов, патч-панелей, розеток, маркировка всех компонентов</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Тестирование</h3>
                <p className="text-gray-700">Сертификация каждой линии, проверка соответствия стандартам, протоколы</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">5</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Сдача документации</h3>
                <p className="text-gray-700">Исполнительная схема, паспорта линий, протоколы тестирования, инструкции</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Производители компонентов</h2>
          <p className="text-center text-gray-600 mb-12">Сертифицированные решения от мировых лидеров</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">Panduit</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">Legrand</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">Schneider</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="font-bold text-xl">CommScope</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна СКС для офиса?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Оставьте заявку для расчёта стоимости структурированной кабельной системы</p>
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

export default SCS;
