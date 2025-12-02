import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import NewsDetail from "@/components/NewsDetail";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: Date;
  readTime: number;
  author: string;
  commentsCount: number;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "Революция в технологиях: новая эра искусственного интеллекта",
    excerpt: "Исследователи представили прорывную систему ИИ, способную решать сложные задачи с беспрецедентной точностью. Технология обещает изменить множество отраслей.",
    image: "https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/59a78f33-e1b1-4109-8454-f09bea6592ae.jpg",
    category: "Технологии",
    date: new Date(2024, 11, 2),
    readTime: 8,
    author: "Алексей Морозов",
    commentsCount: 34
  },
  {
    id: 2,
    title: "Экономический прогноз на 2025: что ждёт мировые рынки",
    excerpt: "Ведущие аналитики делятся прогнозами о развитии глобальной экономики. Эксперты сходятся во мнении о ключевых трендах будущего года.",
    image: "https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/95a36912-90f7-45d4-b025-bf8cf75e9c50.jpg",
    category: "Экономика",
    date: new Date(2024, 11, 1),
    readTime: 12,
    author: "Мария Петрова",
    commentsCount: 18
  },
  {
    id: 3,
    title: "Цифровая трансформация: как бизнес адаптируется к новым реалиям",
    excerpt: "Компании по всему миру внедряют цифровые решения для повышения эффективности. Рассказываем о самых успешных кейсах трансформации.",
    image: "https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/80b444e6-9996-4b65-8f87-0a027ddb0613.jpg",
    category: "Бизнес",
    date: new Date(2024, 10, 30),
    readTime: 6,
    author: "Дмитрий Соколов",
    commentsCount: 22
  }
];

const Home = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <>
      {selectedNews && (
        <NewsDetail
          title={selectedNews.title}
          category={selectedNews.category}
          image={selectedNews.image}
          content={selectedNews.excerpt}
          author={selectedNews.author}
          date={selectedNews.date}
          readTime={selectedNews.readTime}
          onClose={() => setSelectedNews(null)}
        />
      )}
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-12 animate-fade-in">
          <div className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer" onClick={() => setSelectedNews(mockNews[0])}>
            <img 
              src={mockNews[0].image} 
              alt={mockNews[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Badge className="mb-4 bg-primary text-white">{mockNews[0].category}</Badge>
              <h1 className="font-cormorant text-5xl font-bold mb-4 leading-tight">{mockNews[0].title}</h1>
              <p className="text-lg text-white/90 mb-4 max-w-3xl">{mockNews[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <Icon name="User" size={16} />
                  {mockNews[0].author}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  {mockNews[0].readTime} мин
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  {mockNews[0].commentsCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNews.slice(1).map((news, index) => (
            <Card 
              key={news.id} 
              className="cursor-pointer overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedNews(news)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">{news.category}</Badge>
                <h3 className="font-cormorant text-2xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {news.readTime} мин
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="MessageCircle" size={14} />
                      {news.commentsCount}
                    </span>
                  </div>
                  <span>{formatDistanceToNow(news.date, { addSuffix: true, locale: ru })}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;