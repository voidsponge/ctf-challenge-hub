import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ThemeCardProps {
  id: string;
  name: string;
  image: string;
}

export const ThemeCard = ({ id, name, image }: ThemeCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow-strong border-border/50"
      onClick={() => navigate(`/theme/${id}`)}
    >
      <CardContent className="p-0 relative aspect-[4/5]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-foreground uppercase tracking-wider">
            {name}
          </h3>
        </div>
        <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </CardContent>
    </Card>
  );
};
