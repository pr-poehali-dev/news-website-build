import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

interface Comment {
  id: number;
  author: string;
  text: string;
  date: Date;
  likes: number;
}

interface NewsDetailProps {
  title: string;
  category: string;
  image: string;
  content: string;
  author: string;
  date: Date;
  readTime: number;
  onClose: () => void;
}

const NewsDetail = ({ title, category, image, content, author, date, readTime, onClose }: NewsDetailProps) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Анна Смирнова",
      text: "Отличная статья! Очень интересный взгляд на проблему.",
      date: new Date(2024, 11, 2, 14, 30),
      likes: 12
    },
    {
      id: 2,
      author: "Михаил Козлов",
      text: "Было бы интересно узнать больше деталей о технической стороне вопроса.",
      date: new Date(2024, 11, 2, 16, 15),
      likes: 5
    }
  ]);
  
  const [newComment, setNewComment] = useState({ author: "", text: "" });

  const handleAddComment = () => {
    if (newComment.author && newComment.text) {
      setComments([...comments, {
        id: comments.length + 1,
        author: newComment.author,
        text: newComment.text,
        date: new Date(),
        likes: 0
      }]);
      setNewComment({ author: "", text: "" });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto animate-fade-in">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="mb-4 bg-white hover:bg-gray-100"
        >
          <Icon name="X" size={24} />
        </Button>

        <Card className="animate-scale-in">
          <div className="relative h-96 overflow-hidden rounded-t-lg">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          
          <CardContent className="p-8">
            <div className="mb-6">
              <Badge className="mb-4">{category}</Badge>
              <h1 className="font-cormorant text-5xl font-bold mb-4 leading-tight">{title}</h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <Icon name="User" size={16} />
                  {author}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  {formatDistanceToNow(date, { addSuffix: true, locale: ru })}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  {readTime} мин
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed text-foreground">{content}</p>
              <p className="text-lg leading-relaxed text-foreground mt-4">
                Эксперты отмечают, что данная тенденция будет иметь долгосрочное влияние на отрасль. 
                Многие компании уже начали адаптировать свои стратегии с учетом новых реалий.
              </p>
              <p className="text-lg leading-relaxed text-foreground mt-4">
                В ближайшем будущем мы можем ожидать еще больше инноваций в этой области, 
                которые изменят привычный порядок вещей и откроют новые возможности.
              </p>
            </div>

            <div className="border-t pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-cormorant text-3xl font-bold">Комментарии</h2>
                <Badge variant="secondary">{comments.length}</Badge>
              </div>

              <div className="space-y-6 mb-8">
                {comments.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-white">
                            {comment.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">{comment.author}</span>
                            <span className="text-xs text-muted-foreground">
                              {formatDistanceToNow(comment.date, { addSuffix: true, locale: ru })}
                            </span>
                          </div>
                          <p className="text-sm mb-3">{comment.text}</p>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Icon name="ThumbsUp" size={14} />
                            {comment.likes}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-secondary/20">
                <CardContent className="p-6">
                  <h3 className="font-cormorant text-2xl font-semibold mb-4">Оставить комментарий</h3>
                  <div className="space-y-4">
                    <Input
                      placeholder="Ваше имя"
                      value={newComment.author}
                      onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                    />
                    <Textarea
                      placeholder="Ваш комментарий..."
                      value={newComment.text}
                      onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                      rows={4}
                    />
                    <Button onClick={handleAddComment} className="w-full gap-2">
                      <Icon name="Send" size={16} />
                      Отправить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsDetail;
