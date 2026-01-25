import { Pickaxe, Sparkles, Star } from "lucide-react";
import { useFavoritesStore } from "@/stores/appStore";
import { macroCategories } from "@/data/macroCategories";
import ThemeSwitcher from "./ThemeSwitcher";

const HeroSection = () => {
  const { favorites } = useFavoritesStore();
  
  const totalMacros = macroCategories.reduce((acc, cat) => acc + cat.macros.length, 0);

  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-sm animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-sm animate-float opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-diamond rounded-sm animate-float opacity-30" style={{ animationDelay: "2s" }} />
      
      <div className="relative container mx-auto px-4">
        {/* Theme switcher */}
        <div className="absolute top-0 right-4">
          <ThemeSwitcher />
        </div>
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-6 p-4 bg-secondary rounded-lg card-glow animate-scale-in">
            <Pickaxe className="w-12 h-12 text-primary" />
          </div>
          
          {/* Title */}
          <h1 className="font-pixel text-lg md:text-xl lg:text-2xl text-primary text-glow mb-4 animate-fade-in">
            BEDROCK MACROS
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Minecraft Automation Guide
          </p>
          
          <p className="text-muted-foreground text-base max-w-2xl mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Comprehensive collection of macros and automation scripts for Minecraft Bedrock Edition. 
            From movement to combat, farming to building — automate your gameplay.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-foreground font-medium text-sm">{macroCategories.length} Categories</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium text-sm">{totalMacros} Macros</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-foreground font-medium text-sm">{favorites.length} Favorites</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
