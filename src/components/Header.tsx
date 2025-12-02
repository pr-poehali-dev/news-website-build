import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-[#2C3E50] text-white">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center gap-4">
              <span>24 JAN 10</span>
              <Link to="/about" className="hover:text-primary transition-colors">ABOUT US</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">CONTACT US</Link>
              <Link to="/help" className="hover:text-primary transition-colors">HELP</Link>
              <Link to="/welcome" className="hover:text-primary transition-colors">WELCOME JOHN JUGGS</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/logout" className="hover:text-primary transition-colors">LOGOUT</Link>
              <Button size="sm" className="bg-[#5DADE2] hover:bg-[#4A9FD5] text-white text-xs h-7">
                JOIN NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Icon name="TrendingUp" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Smart Investor</h1>
              <p className="text-xs text-white/70">Analysis & Advice</p>
            </div>
          </div>
          
          <div className="flex-1 max-w-md ml-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="ASX Code, Company name or keyword"
                className="bg-white text-black pl-4 pr-12 h-9"
              />
              <Button size="sm" className="absolute right-0 top-0 h-9 px-4 rounded-l-none">
                GO
              </Button>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 h-9 text-sm">
              All the Latest
            </Button>
          </Link>
          <Link to="/recommendations">
            <Button className="bg-primary hover:bg-primary/90 h-9 text-sm">
              Recommendations
            </Button>
          </Link>
          <Link to="/companies">
            <Button variant="ghost" className="text-white hover:bg-white/10 h-9 text-sm">
              Companies
            </Button>
          </Link>
          <Link to="/portfolios">
            <Button variant="ghost" className="text-white hover:bg-white/10 h-9 text-sm">
              Portfolios
            </Button>
          </Link>
          <Link to="/college">
            <Button variant="ghost" className="text-white hover:bg-white/10 h-9 text-sm">
              Investor's College
            </Button>
          </Link>
          <Button className="bg-primary hover:bg-primary/90 h-9 text-sm ml-auto">
            SIGN UP TODAY
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
