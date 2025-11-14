import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-8 text-6xl font-black bg-gradient-to-r from-primary to-cyber-dark bg-clip-text text-transparent">
          CTF Challenge
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Journée Portes Ouvertes - Capture The Flag
        </p>
        <Button 
          onClick={() => navigate("/ctf")}
          size="lg"
          className="text-lg px-8 py-6 shadow-glow hover:shadow-glow-strong transition-all"
        >
          Accéder aux Challenges
        </Button>
      </div>
    </div>
  );
};

export default Index;
