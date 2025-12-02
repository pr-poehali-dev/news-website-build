import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

const allArticles: SearchResult[] = [
  {
    id: 1,
    title: "Революция в технологиях: новая эра искусственного интеллекта",
    excerpt: "Исследователи представили прорывную систему ИИ, способную решать сложные задачи",
    category: "Технологии",
    date: "2 декабря 2024"
  },
  {
    id: 2,
    title: "Экономический прогноз на 2025: что ждёт мировые рынки",
    excerpt: "Ведущие аналитики делятся прогнозами о развитии глобальной экономики",
    category: "Экономика",
    date: "1 декабря 2024"
  },
  {
    id: 3,
    title: "Инновации в медицине: прорыв в лечении онкологии",
    excerpt: "Новый метод терапии показал впечатляющие результаты в клинических испытаниях",
    category: "Медицина",
    date: "30 ноября 2024"
  },
  {
    id: 4,
    title: "Космические программы 2025: новые горизонты исследований",
    excerpt: "Международные агентства объявили о планах масштабных космических миссий",
    category: "Космос",
    date: "29 ноября 2024"
  }
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredArticles = searchQuery
    ? allArticles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allArticles;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="font-cormorant text-6xl font-bold mb-6">Поиск</h1>
          
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по новостям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </div>
          
          {searchQuery && (
            <p className="mt-4 text-muted-foreground">
              Найдено результатов: {filteredArticles.length}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {filteredArticles.map((article, index) => (
            <Card 
              key={article.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
                
                <h3 className="font-cormorant text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
          
          {filteredArticles.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Ничего не найдено</p>
              <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить запрос</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
