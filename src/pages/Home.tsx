const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[500px] bg-gradient-to-r from-[#8B4513] to-[#D2691E]">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/7fd9bc53-144f-46b1-9db9-51bd3d9d0d1e.jpg"
            alt="Счастливая собака"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Здоровье вашего питомца начинается с правильного питания</h1>
          <p className="text-xl mb-6 max-w-2xl">Узнайте, какой корм лучше всего подходит для вашей собаки с учетом породы, возраста и особенностей здоровья</p>
          <div className="flex gap-4">
            <a href="/breeds" className="bg-white text-[#8B4513] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Подобрать по породе
            </a>
            <a href="/age" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Подобрать по возрасту
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B4513]">Почему правильный корм важен?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏃</div>
              <h3 className="text-xl font-bold mb-3">Энергия и активность</h3>
              <p className="text-gray-600">Сбалансированный рацион обеспечивает вашего питомца необходимой энергией для активной жизни</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">Крепкое здоровье</h3>
              <p className="text-gray-600">Качественный корм укрепляет иммунитет и поддерживает здоровье органов</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Красивая шерсть</h3>
              <p className="text-gray-600">Правильное питание делает шерсть блестящей и здоровой</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5E6D3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B4513]">Как выбрать корм для собаки?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B4513] text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Учитывайте породу</h3>
                    <p className="text-gray-700">Крупные, средние и мелкие породы имеют разные потребности в питательных веществах</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B4513] text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Обращайте внимание на возраст</h3>
                    <p className="text-gray-700">Щенкам, взрослым собакам и пожилым питомцам нужны разные корма</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B4513] text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Изучайте состав</h3>
                    <p className="text-gray-700">Выбирайте корм с качественным мясом в составе и минимумом добавок</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B4513] text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Консультируйтесь с ветеринаром</h3>
                    <p className="text-gray-700">При особых потребностях здоровья обязательно проконсультируйтесь со специалистом</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/c4f96c27-d90f-4d9a-9d0b-14c9c61eac77.jpg"
                alt="Разные породы собак"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#8B4513]">Готовы подобрать идеальный корм?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Воспользуйтесь нашими рекомендациями по породам и возрасту, чтобы найти оптимальный рацион для вашего питомца
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/breeds" className="bg-[#8B4513] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6B3410] transition">
              Посмотреть рекомендации
            </a>
            <a href="/contacts" className="bg-transparent border-2 border-[#8B4513] text-[#8B4513] px-8 py-3 rounded-lg font-semibold hover:bg-[#8B4513] hover:text-white transition">
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
