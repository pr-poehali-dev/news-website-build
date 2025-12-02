import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Spotlight {
  id: number;
  type: string;
  title: string;
  description: string;
  icon: string;
}

const spotlights: Spotlight[] = [
  {
    id: 1,
    type: "ANNOUNCEMENT",
    title: "Title of goes here",
    description: "Vestibulum ante ipsum primis",
    icon: "Megaphone"
  },
  {
    id: 2,
    type: "PDF",
    title: "Title of goes here (208kb)",
    description: "",
    icon: "FileText"
  },
  {
    id: 3,
    type: "ARTICLE",
    title: "Audio comollis lectus",
    description: "Nullam wisi dorem, consectetuer adipiscing elitla",
    icon: "FileText"
  },
  {
    id: 4,
    type: "ARTICLE",
    title: "Curabitur welerisque suscepril elit, tempor elepar, justo consilis",
    description: "",
    icon: "DollarSign"
  },
  {
    id: 5,
    type: "VIDEO",
    title: "Video title goes here",
    description: "",
    icon: "Video"
  }
];

const FeatureSpotlights = () => {
  return (
    <div className="py-8">
      <h2 className="font-bold text-xl mb-6">FEATURE SPOTLIGHTS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {spotlights.map((spot) => (
          <Card key={spot.id} className="cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-4 text-center">
              <div className="w-full h-24 bg-muted rounded flex items-center justify-center mb-3">
                <Icon name={spot.icon as any} size={40} className="text-primary" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-primary mb-1">{spot.type}:</p>
                <p className="text-blue-600 hover:underline mb-1">{spot.title}</p>
                {spot.description && (
                  <p className="text-muted-foreground">{spot.description}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureSpotlights;
