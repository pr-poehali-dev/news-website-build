import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Home = () => {
  const services = [
    {
      icon: 'Camera',
      title: 'Видеонаблюдение',
      description: 'Проектирование и установка систем видеонаблюдения любой сложности. IP-камеры, аналоговые системы, облачные решения',
      path: '/cctv'
    },
    {
      icon: 'Network',
      title: 'ЛВС',
      description: 'Построение локальных вычислительных сетей. Настройка роутеров, коммутаторов, Wi-Fi систем',
      path: '/lan'
    },
    {
      icon: 'Cable',
      title: 'СКС',
      description: 'Структурированные кабельные системы. Прокладка медных и оптоволоконных линий, монтаж кроссов',
      path: '/scs'
    },
    {
      icon: 'ShieldCheck',
      title: 'СКУД',
      description: 'Системы контроля и управления доступом. Турникеты, шлагбаумы, электронные замки, домофоны',
      path: '/acs'
    }
  ];

  return (
    <div className="min-h-screen">
      <section 
        className="relative h-[700px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/283b5f2e-7b55-44eb-9eb6-1aab46962453.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-white font-montserrat animate-fade-in">
              UPLINK CONTROL
            </h1>
            <p className="text-2xl lg:text-3xl mb-4 text-white/90 font-medium">
              ВАШ ВЫБОР — НАШЕ РЕШЕНИЕ
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8 border border-white/20">
              <p className="text-xl text-white mb-4">Профессиональный монтаж слаботочных систем:</p>
              <ul className="grid md:grid-cols-2 gap-3 text-white/90">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Системы видеонаблюдения
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Локальные вычислительные сети
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Структурированные кабельные системы
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  Системы контроля доступа
                </li>
              </ul>
            </div>
            <Link 
              to="/contacts"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 font-montserrat">UPLINK CONTROL</h2>
            <p className="text-2xl text-muted-foreground">ВАШ ВЫБОР — НАШЕ РЕШЕНИЕ</p>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/c8b6c9fe-e611-4649-b231-829e78768e33.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white font-montserrat">Наши услуги</h2>
          <p className="text-center text-gray-300 mb-16 text-lg">Комплексные решения для вашего бизнеса</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.path}
                to={service.path}
                className="bg-card p-8 rounded-lg hover:shadow-2xl transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 250}ms` }}
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-card-foreground font-montserrat">
                  {service.title}
                </h3>
                <p className="text-card-foreground/80 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white font-montserrat">Почему выбирают нас?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Опыт более 10 лет</h3>
              <p className="text-muted-foreground">Реализовали сотни проектов различной сложности</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Сертифицированные специалисты</h3>
              <p className="text-muted-foreground">Официальные сертификаты производителей оборудования</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ShieldCheck" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Официальная гарантия</h3>
              <p className="text-muted-foreground">Гарантия на все виды работ и оборудование</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Briefcase" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Комплексный подход</h3>
              <p className="text-muted-foreground">От проектирования до сдачи «под ключ»</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-secondary/50 backdrop-blur p-12 rounded-xl border border-white/10">
            <h2 className="text-4xl font-bold text-center mb-6 text-white font-montserrat">Этапы работы</h2>
            <div className="grid md:grid-cols-5 gap-6 mt-12">
              {[
                { icon: 'MessageSquare', title: 'Консультация', desc: 'Обсуждаем задачи' },
                { icon: 'MapPin', title: 'Выезд', desc: 'Оцениваем объём' },
                { icon: 'FileText', title: 'Проект', desc: 'Разрабатываем решение' },
                { icon: 'Wrench', title: 'Монтаж', desc: 'Выполняем работы' },
                { icon: 'CheckCircle', title: 'Сдача', desc: 'Обучаем персонал' }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} size={28} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{idx + 1}</div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white font-montserrat">Готовы начать проект?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-white/90">
            Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/contacts" 
              className="bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              Оставить заявку
            </Link>
            <a 
              href="tel:+74951234567" 
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition text-lg"
            >
              Позвонить: +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
