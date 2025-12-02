import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import FeatureSpotlights from "@/components/FeatureSpotlights";
import InvestorCollege from "@/components/InvestorCollege";
import PodcastsVideos from "@/components/PodcastsVideos";

interface Stock {
  code: string;
  price: number;
  change: number;
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tag?: string;
}

const stocks: Stock[] = [
  { code: "BHP Billion (BHP)", price: 874.00, change: 2.1 },
  { code: "Quintis (QTIS)", price: 612.10, change: -1.5 },
  { code: "Rio Billion (RIO)", price: 574.00, change: 1.8 },
  { code: "ArndalGrl", price: 483.01, change: -0.3 }
];

const articles: Article[] = [
  {
    id: 1,
    title: "Article Headline goes here",
    excerpt: "24 Jan 10 | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam, justo convallis luctus rutrum.",
    date: "24 Jan 10",
    tag: "BUY"
  },
  {
    id: 2,
    title: "Article Headline goes here",
    excerpt: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Praesent aliquam, justo convallis luctus",
    date: "24 Jan 10"
  },
  {
    id: 3,
    title: "Article Headline goes here",
    excerpt: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Praesent aliquam, justo convallis luctus",
    date: "24 Jan 10"
  }
];

const Dashboard = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-[#E74C3C] text-white px-4 py-2 flex items-center gap-2">
        <span className="font-bold text-sm">SPECIAL ALERT</span>
        <span className="text-sm">Praesent aliquam, justo convallis luctus rutrum, erat nulla fermentum diam, at nonummy quam ante ac quam</span>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/59a78f33-e1b1-4109-8454-f09bea6592ae.jpg"
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-white font-bold text-xl mb-2">Article headline goes here</h2>
                  <div className="flex gap-2">
                    <Icon name="Rss" size={16} className="text-white" />
                    <Icon name="Facebook" size={16} className="text-white" />
                    <Icon name="Twitter" size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm">STOCKS IN NEWS</h3>
                    <Icon name="Rss" size={16} className="text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    {stocks.map((stock) => (
                      <div key={stock.code} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{stock.code}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{stock.price.toFixed(2)}</span>
                          <span className={stock.change > 0 ? "text-green-600" : "text-red-600"}>
                            {stock.change > 0 ? "+" : ""}{stock.change}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Indicative US$/oz Morn. 4:00 AM EST</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-sm">LATEST FEEDS</h3>
                    <Icon name="Rss" size={16} className="text-muted-foreground" />
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="text-xs">
                        <p className="text-muted-foreground mb-1">18 JAN 10 | Lorem ipsum dolor sit amet</p>
                        <a href="#" className="text-blue-600 hover:underline">More</a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
                STOCK RESEARCH
                <Button variant="outline" size="sm">BLUE CHIPS</Button>
                <Button variant="ghost" size="sm">SECOND LINE</Button>
                <Button variant="ghost" size="sm">SPECULATIVE</Button>
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-3 mb-3">
                      <img
                        src="https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/80b444e6-9996-4b65-8f87-0a027ddb0613.jpg"
                        alt="Research"
                        className="w-24 h-20 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-bold text-sm mb-1">BHP gets a bullet</h3>
                        <p className="text-xs text-muted-foreground">18 JAN 10 | Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {articles.slice(0, 2).map((article) => (
                  <Card key={article.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        {article.tag && (
                          <Badge className="bg-green-600 text-white">{article.tag}</Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                      <h3 className="font-semibold text-sm mb-2">{article.title}</h3>
                      <p className="text-xs text-muted-foreground">{article.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">STOCKS IN RETAIL</h3>
                <p className="text-sm mb-3">Article Headline goes here</p>
                <Button size="sm" className="bg-primary hover:bg-primary/90 w-full">
                  LATEST NEWS
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm">ASK THE EXPERTS</h3>
                  <Button variant="link" size="sm" className="text-xs">COMING UP</Button>
                </div>
                <div className="space-y-2">
                  {[
                    "Nulla turpis, cursus quis",
                    "Curabitur diam, at nonummy quam ante ac",
                    "Vivamu. Maecenas urna purus, fermentum id",
                    "Morbi in, commodo porilisi"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                      <p className="text-xs text-blue-600 hover:underline cursor-pointer">{text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-100">
              <CardContent className="p-4 text-center">
                <h3 className="font-bold mb-2">MEMBERSHIP RENEWAL</h3>
                <p className="text-xs mb-3">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                <Button className="bg-[#2C3E50] hover:bg-[#1C2E40] text-white w-full">
                  RENEW NOW
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <FeatureSpotlights />
        <InvestorCollege />
        <PodcastsVideos />
      </div>

      <footer className="bg-[#2C3E50] text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-3">Main Heading</h4>
              <ul className="space-y-1 text-white/70">
                <li>Aliquam lorem ante, dapius in</li>
                <li>Eeff. Aenean fermentum</li>
                <li>Aenean leo ligula</li>
                <li>Aenean leo, Aenean</li>
                <li>Maecenas urna purus</li>
                <li>Fermentum id, molestie in porilisi, non.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Main Heading</h4>
              <ul className="space-y-1 text-white/70">
                <li>Eeff, Cum sociis 34349 Officia</li>
                <li>Eeff, Cum sociis fermentum</li>
                <li>Maecenas</li>
                <li>Aenean leo, quam</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Main Heading</h4>
              <ul className="space-y-1 text-white/70">
                <li>Maecenas urna purus nut</li>
                <li>Eeff, Cum sociis Officia</li>
                <li>Fermentum id, molestie in</li>
                <li>Maecenas urna purus</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact Details</h4>
              <ul className="space-y-1 text-white/70">
                <li>Tel: 0234 567 891</li>
                <li>Fax: 12345 678 900</li>
                <li className="text-primary">officia@smartinvestor.com</li>
                <li>PO Box: 1120</li>
                <li>Bond Junction NSW 1355</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-xs text-white/50">
            <p>Copyright © 2018 The Smart Investor</p>
            <p>ABN:2330 567 890 | Financial Service Number: 000000</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;