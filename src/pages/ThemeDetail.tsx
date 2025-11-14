import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Zap } from "lucide-react";
import { toast } from "sonner";

// Configuration des IPs pour chaque thème et difficulté
const themeConfig: Record<string, { name: string; debutant: string; expert: string }> = {
  web: {
    name: "Web",
    debutant: "192.168.240.201",
    expert: "192.168.240.201",
  },
  linux: {
    name: "Linux",
    debutant: "192.168.240.201",
    expert: "192.168.240.201",
  },
  crypto: {
    name: "Cryptographie",
    debutant: "192.168.240.201",
    expert: "192.168.240.201",
  },
  osint: {
    name: "OSINT",
    debutant: "192.168.240.201",
    expert: "192.168.240.201",
  },
  forensics: {
    name: "Forensics",
    debutant: "192.168.240.201",
    expert: "192.168.240.201",
  },
  stegano: {
    name: "Stéganographie",
    debutant: "192.168.240.201",
    expert: "192.168.240.201",
  },
};

const ThemeDetail = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const navigate = useNavigate();

  if (!themeId || !themeConfig[themeId]) {
    navigate("/ctf");
    return null;
  }

  const theme = themeConfig[themeId];

  const handleRedirect = (difficulty: "debutant" | "expert") => {
    const ip = theme[difficulty];
    toast.success(`Redirection vers ${difficulty === "debutant" ? "Débutant" : "Expert"}`, {
      description: `Connexion à ${ip}...`,
    });
    
    // Redirection vers l'IP
    window.location.href = `http://${ip}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Button
          variant="ghost"
          onClick={() => navigate("/ctf")}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux thèmes
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-black uppercase mb-4 text-foreground">
            {theme.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            Choisissez votre niveau de difficulté
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card
            className="group cursor-pointer transition-all duration-300 hover:shadow-glow hover:scale-105 border-border/50"
            onClick={() => handleRedirect("debutant")}
          >
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold">Débutant</CardTitle>
              <CardDescription className="text-base mt-2">
                Parfait pour commencer et apprendre les bases
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>✓ Challenges guidés</p>
                <p>✓ Hints disponibles</p>
                <p>✓ Documentation fournie</p>
              </div>
              <div className="mt-6 p-3 bg-muted rounded-lg">
                <code className="text-xs text-primary font-mono">{theme.debutant}</code>
              </div>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer transition-all duration-300 hover:shadow-glow-strong hover:scale-105 border-primary/50"
            onClick={() => handleRedirect("expert")}
          >
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/20 w-fit group-hover:bg-primary/30 transition-colors">
                <Zap className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold">Expert</CardTitle>
              <CardDescription className="text-base mt-2">
                Pour les hackers expérimentés qui aiment les défis
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>✓ Challenges complexes</p>
                <p>✓ Pas d'indices</p>
                <p>✓ Réalisme maximum</p>
              </div>
              <div className="mt-6 p-3 bg-muted rounded-lg border border-primary/30">
                <code className="text-xs text-primary font-mono">{theme.expert}</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThemeDetail;
