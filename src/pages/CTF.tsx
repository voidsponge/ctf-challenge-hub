import { ThemeCard } from "@/components/ThemeCard";
import themeWeb from "@/assets/theme-web.jpg";
import themeLinux from "@/assets/theme-linux.jpg";
import themeCrypto from "@/assets/theme-crypto.jpg";
import themeOsint from "@/assets/theme-osint.jpg";
import themeForensics from "@/assets/theme-forensics.jpg";
import themeStegano from "@/assets/theme-stegano.jpg";

const themes = [
  { id: "web", name: "Web", image: themeWeb },
  { id: "linux", name: "Linux", image: themeLinux },
  { id: "crypto", name: "Crypto", image: themeCrypto },
  { id: "osint", name: "OSINT", image: themeOsint },
  { id: "forensics", name: "Forensics", image: themeForensics },
  { id: "stegano", name: "Stéganographie", image: themeStegano },
];

const CTF = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyber-dark bg-clip-text text-transparent">
            CHOISISSEZ VOTRE
          </h1>
          <h2 className="text-7xl font-black uppercase tracking-tight text-foreground mb-6">
            THÈME
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Avec plus de 6 thèmes disponibles, vous en trouverez forcément un qui vous correspond.
            Maîtrisez-en un, ou maîtrisez-les tous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {themes.map((theme) => (
            <ThemeCard key={theme.id} {...theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTF;
