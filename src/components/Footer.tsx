import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white border-t border-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-montserrat">UPLINK CONTROL</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Профессиональный монтаж слаботочных систем: видеонаблюдение, ЛВС, СКС, СКУД. Опыт более 10 лет.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-montserrat">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/cctv" className="text-muted-foreground hover:text-primary transition flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  Видеонаблюдение
                </Link>
              </li>
              <li>
                <Link to="/lan" className="text-muted-foreground hover:text-primary transition flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  ЛВС
                </Link>
              </li>
              <li>
                <Link to="/scs" className="text-muted-foreground hover:text-primary transition flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  СКС
                </Link>
              </li>
              <li>
                <Link to="/acs" className="text-muted-foreground hover:text-primary transition flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  СКУД
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-primary transition flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-montserrat">Контакты</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-3">
                <Icon name="Phone" size={18} className="text-primary" />
                <a href="tel:+74951234567" className="hover:text-primary transition">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" size={18} className="text-primary" />
                <a href="tel:+78005553535" className="hover:text-primary transition">
                  8 (800) 555-35-35
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" size={18} className="text-primary" />
                <a href="mailto:info@uplink-ctrl.ru" className="hover:text-primary transition">
                  info@uplink-ctrl.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>г. Москва, ул. Примерная, д. 10</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-montserrat">Режим работы</h3>
            <div className="text-sm text-muted-foreground space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <p>Пн-Пт: 9:00 - 20:00</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <p>Сб: 10:00 - 16:00</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <p>Вс: выходной</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 font-montserrat">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition"
                  aria-label="VK"
                >
                  <span className="text-sm font-bold">VK</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition"
                  aria-label="Telegram"
                >
                  <span className="text-sm font-bold">TG</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 UPLINK CONTROL. Все права защищены.</p>
          <p className="mt-2">Профессиональный монтаж слаботочных систем по всей России</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
