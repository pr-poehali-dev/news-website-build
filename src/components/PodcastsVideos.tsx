import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PodcastItem {
  id: number;
  title: string;
  date: string;
  status?: string;
}

const podcasts: PodcastItem[] = [
  { id: 1, title: "Reporting season 14 Feb 10", date: "18 JAN 10" },
  { id: 2, title: "Lorem ipsum dolor sit amet, consectetur", date: "18 JAN 10", status: "VIDEO" },
  { id: 3, title: "Fermentum diam, at nonummy quam ante ac quam", date: "15 JAN 10", status: "VIDEO" },
  { id: 4, title: "Maecenas urna purus, fermentum id, molestie in", date: "15 JAN 10" }
];

const PodcastsVideos = () => {
  return (
    <div className="py-8">
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-xl">PODCASTS & VIDEOS</h2>
          <Button variant="outline" size="sm">DUMB QUESTIONS</Button>
          <Button variant="ghost" size="sm">STOCKTAKE</Button>
          <Button variant="ghost" size="sm">BOSS TALK</Button>
          <Button variant="ghost" size="sm">SPECIALS</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-3 mb-3">
              <div className="flex-shrink-0">
                <div className="w-20 h-16 bg-muted rounded flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{podcasts[0].title}</h3>
                <p className="text-xs text-muted-foreground">{podcasts[0].date} | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam, justo convallis luctus</p>
              </div>
            </div>
            <div className="space-y-2 border-t pt-3">
              {podcasts.slice(1).map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground flex-1">
                    {item.date} | {item.title}
                  </p>
                  {item.status && (
                    <Badge variant="secondary" className="text-xs ml-2">{item.status}</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2C3E50] text-white">
          <CardContent className="p-6 text-center">
            <Badge className="mb-4 bg-primary">PODCAST</Badge>
            <div className="w-full h-32 bg-white/10 rounded flex items-center justify-center mb-4">
              <Icon name="Play" size={48} className="text-primary" />
            </div>
            <p className="text-sm">Fermentum id, molestie in, commodo porilisi, non.</p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm">BLOGS</h3>
                <Button variant="link" size="sm" className="text-xs">More</Button>
              </div>
              <div className="space-y-2">
                {[
                  { title: "Lorem ipsum dolor sit amet", count: 9 },
                  { title: "Praesent aliquam, justo convallis", count: 5 },
                  { title: "Fermentum diam, at nonummy quam ante", count: 11 },
                  { title: "Maecenas urna purus, fermentum id", count: 8 }
                ].map((blog, i) => (
                  <div key={i} className="flex items-start justify-between">
                    <p className="text-xs text-muted-foreground flex-1">
                      18 JAN 10 | {blog.title}
                    </p>
                    <span className="text-xs font-semibold ml-2">({blog.count})</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-sm mb-3">LATEST COMMENTS</h3>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  Lorem ipsum Praesent aliquam, fermentum:
                </p>
                <p className="text-xs text-muted-foreground">
                  Praesent aliquam, justo convallis luctus rutrum, erat nulla fermentum diam, at nonummy
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PodcastsVideos;
