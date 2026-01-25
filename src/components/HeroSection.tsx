import { Pickaxe, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-sm animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-sm animate-float opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-diamond rounded-sm animate-float opacity-30" style={{ animationDelay: "2s" }} />
      
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-6 p-4 bg-secondary rounded-lg card-glow animate-scale-in">
            <Pickaxe className="w-12 h-12 text-primary" />
          </div>
          
          {/* Title */}
          <h1 className="font-pixel text-xl md:text-2xl lg:text-3xl text-primary text-glow mb-4 animate-fade-in">
            BEDROCK MACROS
          </h1>
          
          <p className="text-2xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Minecraft Automation Guide
          </p>
          
          <p className="text-muted-foreground text-lg max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Comprehensive collection of macros and automation scripts for Minecraft Bedrock Edition. 
            From movement to combat, farming to building — automate your gameplay.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-foreground font-semibold">11 Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold">50+ Macros</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-diamond" />
              <span className="text-foreground font-semibold">Bedrock Edition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
