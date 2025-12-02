import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/popular", label: "Популярное", icon: "TrendingUp" },
    { path: "/search", label: "Поиск", icon: "Search" },
    { path: "/archive", label: "Архив", icon: "Archive" }
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Newspaper" size={20} className="text-white" />
            </div>
            <span className="font-cormorant text-2xl font-bold">Новости</span>
          </Link>
          
          <div className="flex items-center gap-2">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <Icon name={link.icon as any} size={16} />
                  <span className="hidden sm:inline">{link.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
