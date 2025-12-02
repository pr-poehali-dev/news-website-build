const Age = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-[#8B4513] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Подбор корма по возрасту</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Потребности собак меняются на протяжении всей жизни. Узнайте, как правильно кормить питомца в разном возрасте
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-6">
                <div className="text-6xl">🐶</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-[#8B4513]">Щенки (до 12 месяцев)</h2>
                  <p className="text-gray-700 mb-6">
                    Самый важный период роста и развития. Щенкам нужно особенно много энергии и питательных веществ.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold text-[#FF8C00] mb-3">Что нужно:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Высокое содержание белка (28-32%)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>DHA для развития мозга и зрения</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Кальций и фосфор для костей</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Легкоусвояемые ингредиенты</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#FF8C00] mb-3">Режим кормления:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">📅</span>
                          <span><strong>2-3 месяца:</strong> 4-5 раз в день</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">📅</span>
                          <span><strong>3-6 месяцев:</strong> 3-4 раза в день</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">📅</span>
                          <span><strong>6-12 месяцев:</strong> 2-3 раза в день</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-6">
                <div className="text-6xl">🦴</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-[#8B4513]">Взрослые собаки (1-7 лет)</h2>
                  <p className="text-gray-700 mb-6">
                    Период активной жизни. Важно поддерживать оптимальный вес и обеспечивать энергией для активности.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold text-[#FF8C00] mb-3">Что нужно:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Сбалансированный белок (23-25%)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Омега-3 и Омега-6 для шерсти</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Глюкозамин для суставов</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Антиоксиданты для иммунитета</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#FF8C00] mb-3">Режим кормления:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">📅</span>
                          <span><strong>Оптимально:</strong> 2 раза в день</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">⚖️</span>
                          <span>Контролируйте порции по весу</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">🏃</span>
                          <span>Корректируйте по активности</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-8 border-2 border-purple-200">
              <div className="flex items-start gap-6">
                <div className="text-6xl">👴</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-[#8B4513]">Пожилые собаки (7+ лет)</h2>
                  <p className="text-gray-700 mb-6">
                    С возрастом метаболизм замедляется, снижается активность. Нужен особый уход за здоровьем.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold text-[#FF8C00] mb-3">Что нужно:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Умеренное содержание белка (20-23%)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Пониженная калорийность</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Хондроитин для суставов</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Антиоксиданты для когнитивных функций</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Мягкие гранулы для зубов</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#FF8C00] mb-3">Особенности:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">💊</span>
                          <span>Поддержка здоровья почек</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">🦷</span>
                          <span>Забота о зубах и деснах</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">🧠</span>
                          <span>Поддержка мозговой активности</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F5E6D3]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#8B4513]">Важно помнить!</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4 text-left">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">⚠️</span>
                  <p className="text-gray-700">При переходе на новый корм делайте это постепенно в течение 7-10 дней</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">🩺</span>
                  <p className="text-gray-700">Регулярно консультируйтесь с ветеринаром о питании вашего питомца</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">⚖️</span>
                  <p className="text-gray-700">Следите за весом собаки и корректируйте порции при необходимости</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">🔬</span>
                  <p className="text-gray-700">Учитывайте индивидуальные особенности: активность, здоровье, аллергии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Age;
