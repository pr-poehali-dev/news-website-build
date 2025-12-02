import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: 'Главная', path: '/' },
    { title: 'Видеонаблюдение', path: '/cctv' },
    { title: 'ЛВС', path: '/lan' },
    { title: 'СКС', path: '/scs' },
    { title: 'СКУД', path: '/acs' },
    { title: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="bg-secondary/80 backdrop-blur-sm sticky top-0 z-50 border-b border-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <div>
              <div className="text-xl font-bold font-montserrat text-white">UPLINK CONTROL</div>
              <div className="text-xs text-muted-foreground">Слаботочные системы</div>
            </div>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-all"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
