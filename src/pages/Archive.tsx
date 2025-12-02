import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ArchiveItem {
  id: number;
  title: string;
  category: string;
  date: string;
  month: string;
}

const archiveData: ArchiveItem[] = [
  { id: 1, title: "Революция в технологиях: новая эра искусственного интеллекта", category: "Технологии", date: "2 дек", month: "Декабрь 2024" },
  { id: 2, title: "Экономический прогноз на 2025: что ждёт мировые рынки", category: "Экономика", date: "1 дек", month: "Декабрь 2024" },
  { id: 3, title: "Инновации в медицине: прорыв в лечении онкологии", category: "Медицина", date: "30 ноя", month: "Ноябрь 2024" },
  { id: 4, title: "Космические программы 2025: новые горизонты", category: "Космос", date: "29 ноя", month: "Ноябрь 2024" },
  { id: 5, title: "Цифровая трансформация бизнеса в новой реальности", category: "Бизнес", date: "28 ноя", month: "Ноябрь 2024" },
  { id: 6, title: "Климатические изменения: глобальные вызовы", category: "Экология", date: "15 ноя", month: "Ноябрь 2024" },
  { id: 7, title: "Образование будущего: тренды и технологии", category: "Образование", date: "10 ноя", month: "Ноябрь 2024" },
  { id: 8, title: "Культурные события осени: обзор выставок", category: "Культура", date: "5 окт", month: "Октябрь 2024" }
];

const Archive = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>("Все");
  
  const months = ["Все", "Декабрь 2024", "Ноябрь 2024", "Октябрь 2024"];
  
  const filteredArticles = selectedMonth === "Все" 
    ? archiveData 
    : archiveData.filter(item => item.month === selectedMonth);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="font-cormorant text-6xl font-bold mb-4">Архив</h1>
          <p className="text-lg text-muted-foreground">Все публикации нашего издания</p>
        </div>

        <div className="flex gap-3 mb-8 flex-wrap">
          {months.map((month) => (
            <Button
              key={month}
              variant={selectedMonth === month ? "default" : "outline"}
              onClick={() => setSelectedMonth(month)}
              className="rounded-full"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              {month}
            </Button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredArticles.map((article, index) => (
            <Card 
              key={article.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 text-center">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="font-cormorant text-sm font-semibold text-primary">{article.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.month}</span>
                    </div>
                    
                    <h3 className="font-cormorant text-xl font-semibold hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  
                  <Icon name="ChevronRight" size={24} className="text-muted-foreground flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <Icon name="ArchiveX" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">В этом периоде нет публикаций</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
