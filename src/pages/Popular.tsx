import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PopularArticle {
  id: number;
  title: string;
  views: number;
  category: string;
  readTime: number;
  trending: boolean;
}

const popularArticles: PopularArticle[] = [
  {
    id: 1,
    title: "Революция в технологиях: новая эра искусственного интеллекта",
    views: 15400,
    category: "Технологии",
    readTime: 8,
    trending: true
  },
  {
    id: 2,
    title: "Инновации в медицине: прорыв в лечении онкологии",
    views: 12300,
    category: "Наука",
    readTime: 10,
    trending: true
  },
  {
    id: 3,
    title: "Космические программы 2025: новые горизонты исследований",
    views: 11200,
    category: "Космос",
    readTime: 7,
    trending: false
  },
  {
    id: 4,
    title: "Экономический прогноз на 2025: что ждёт мировые рынки",
    views: 9800,
    category: "Экономика",
    readTime: 12,
    trending: false
  },
  {
    id: 5,
    title: "Зелёная энергетика: переход к устойчивому будущему",
    views: 8500,
    category: "Экология",
    readTime: 6,
    trending: true
  }
];

const Popular = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="font-cormorant text-6xl font-bold mb-4">Популярное</h1>
          <p className="text-lg text-muted-foreground">Самые читаемые материалы этой недели</p>
        </div>

        <div className="space-y-6">
          {popularArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-cormorant text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      {article.trending && (
                        <Badge className="bg-red-500 text-white">
                          <Icon name="TrendingUp" size={12} className="mr-1" />
                          В тренде
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="font-cormorant text-2xl font-semibold mb-3 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Icon name="Eye" size={16} />
                        {article.views.toLocaleString('ru-RU')} просмотров
                      </span>
                      <span className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        {article.readTime} мин
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
