import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CollegeSection {
  id: number;
  title: string;
  content: string;
  date: string;
  image?: boolean;
}

const sections: CollegeSection[] = [
  {
    id: 1,
    title: "BHP gets a bullet",
    content: "18 JAN 10 | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam, justo convallis luctus rutrum, erat nulla fermentum diam, at nonummy",
    date: "18 JAN 10",
    image: true
  },
  {
    id: 2,
    title: "Lorem ipsum",
    content: "18 JAN 10 | Praesent aliquam, justo convallis luctus rutrum, fermentum diam",
    date: "18 JAN 10"
  },
  {
    id: 3,
    title: "Maecenas urna purus, fermentum id, molestie in",
    content: "18 JAN 10 | Nam blandit quam ut lacus. Quisque ornare risus quis ligula",
    date: "18 JAN 10"
  }
];

const InvestorCollege = () => {
  return (
    <div className="py-8">
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-bold text-xl">INVESTOR'S COLLEGE</h2>
          <Button variant="outline" size="sm">MASTERCLASS</Button>
          <Button variant="ghost" size="sm">PSYCHOLOGY</Button>
          <Button variant="ghost" size="sm">VALUATION</Button>
          <Button variant="ghost" size="sm">FUNDAMENTALS</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-all cursor-pointer">
          <CardContent className="p-0">
            <div className="flex gap-3 p-4">
              <img
                src="https://cdn.poehali.dev/projects/1200194d-dfd3-4ff6-ae95-388d106f123b/files/95a36912-90f7-45d4-b025-bf8cf75e9c50.jpg"
                alt="College"
                className="w-24 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-bold text-sm mb-2">{sections[0].title}</h3>
                <p className="text-xs text-muted-foreground">{sections[0].content}</p>
              </div>
            </div>
            <div className="border-t p-3 space-y-1">
              {[
                "18 JAN 10 | Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "18 JAN 10 | Praesent aliquam, justo convallis luctus rutrum",
                "18 JAN 10 | Fermentum diam, at nonummy quam ante ac quam",
                "18 JAN 10 | Maecenas urna purus, fermentum id, molestie in"
              ].map((text, i) => (
                <p key={i} className="text-xs text-muted-foreground hover:text-blue-600 cursor-pointer">
                  {text}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2C3E50] text-white">
          <CardContent className="p-6 text-center">
            <h3 className="font-bold text-lg mb-4">INSIGHT</h3>
            <div className="w-full h-24 bg-white/10 rounded flex items-center justify-center mb-4">
              <Icon name="BarChart3" size={48} className="text-primary" />
            </div>
            <p className="text-sm mb-4">Fermentum id, molestie in, commodo porilisi, non.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm">TOP RATED</h3>
              <Button variant="link" size="sm" className="text-xs">EDITOR'S PICK</Button>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-2">Lorem ipsum</p>
                <p className="text-xs text-muted-foreground">Lorem ipsum conse ctetuer adipisc present sitlorte.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-xs text-blue-600 hover:underline cursor-pointer">
                  Justo comollis lectus, tulum, erat nulla
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-xs text-blue-600 hover:underline cursor-pointer">
                  Curabitur diam, at nonummy quam
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-xs text-blue-600 hover:underline cursor-pointer">
                  Vivamu, Maecenas urna purus, fermentum id.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <p className="text-xs text-blue-600 hover:underline cursor-pointer">
                  Morbi in, commodo porilisi
                </p>
              </div>
            </div>
            <Button variant="link" size="sm" className="text-xs mt-3 p-0">More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestorCollege;
