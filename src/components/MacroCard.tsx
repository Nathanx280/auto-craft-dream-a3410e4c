import { useState } from "react";
import { ChevronDown, ChevronUp, Star, Info, Keyboard, AlertCircle } from "lucide-react";
import { MacroCategory, Macro } from "@/data/macroCategories";
import { useFavoritesStore } from "@/stores/appStore";
import { cn } from "@/lib/utils";

interface MacroCardProps {
  category: MacroCategory;
  index: number;
  onMacroClick?: (macro: Macro, category: MacroCategory) => void;
}

const colorStyles = {
  emerald: {
    badge: "bg-primary/20 text-primary border-primary/30",
    icon: "text-primary",
    hover: "hover:border-primary/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]",
    dot: "bg-primary",
  },
  torch: {
    badge: "bg-accent/20 text-accent border-accent/30",
    icon: "text-accent",
    hover: "hover:border-accent/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]",
    dot: "bg-accent",
  },
  diamond: {
    badge: "bg-diamond/20 text-diamond border-diamond/30",
    icon: "text-diamond",
    hover: "hover:border-diamond/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--diamond)/0.2)]",
    dot: "bg-diamond",
  },
  redstone: {
    badge: "bg-redstone/20 text-redstone border-redstone/30",
    icon: "text-redstone",
    hover: "hover:border-redstone/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--redstone)/0.2)]",
    dot: "bg-redstone",
  },
  ender: {
    badge: "bg-ender/20 text-ender border-ender/30",
    icon: "text-ender",
    hover: "hover:border-ender/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--ender)/0.2)]",
    dot: "bg-ender",
  },
};

const difficultyColors = {
  easy: "text-emerald bg-emerald/10",
  medium: "text-accent bg-accent/10",
  hard: "text-redstone bg-redstone/10",
};

const MacroCard = ({ category, index, onMacroClick }: MacroCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const styles = colorStyles[category.color];
  const Icon = category.icon;

  return (
    <div
      className={cn(
        "group bg-card rounded-lg border border-border transition-all duration-300 card-glow animate-fade-in",
        styles.hover,
        styles.glow
      )}
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center gap-3 text-left"
      >
        <div className={cn("flex-shrink-0 w-9 h-9 rounded-md border flex items-center justify-center font-pixel text-xs", styles.badge)}>
          {category.number}
        </div>
        
        <div className={cn("flex-shrink-0", styles.icon)}>
          <Icon className="w-5 h-5" />
        </div>
        
        <div className="flex-grow min-w-0">
          <h3 className="text-foreground font-semibold text-sm md:text-base truncate">{category.title}</h3>
          <p className="text-muted-foreground text-xs">{category.macros.length} macros</p>
        </div>
        
        <div className="flex-shrink-0 text-muted-foreground">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      
      {/* Expanded content */}
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-border pt-3">
            <div className="grid gap-2 max-h-[400px] overflow-y-auto scrollbar-thin pr-1">
              {category.macros.map((macro) => {
                const favorite = isFavorite(macro.id);
                return (
                  <div
                    key={macro.id}
                    className="flex items-start gap-2 p-2.5 rounded-md bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group/macro"
                    onClick={() => onMacroClick?.(macro, category)}
                  >
                    <div className={cn("w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0", styles.dot)} />
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-foreground font-medium text-sm">{macro.name}</h4>
                        {macro.difficulty && (
                          <span className={cn("text-xs px-1.5 py-0.5 rounded-full", difficultyColors[macro.difficulty])}>
                            {macro.difficulty}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-xs mt-0.5">{macro.description}</p>
                      
                      {/* Keybinds & Requirements */}
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {macro.keybinds?.map((key) => (
                          <span key={key} className="text-xs px-1.5 py-0.5 bg-muted rounded text-muted-foreground flex items-center gap-1">
                            <Keyboard className="w-3 h-3" />
                            {key}
                          </span>
                        ))}
                        {macro.requirements?.map((req) => (
                          <span key={req} className="text-xs px-1.5 py-0.5 bg-muted rounded text-muted-foreground flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Favorite button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(macro.id);
                      }}
                      className={cn(
                        "flex-shrink-0 p-1.5 rounded-md transition-colors",
                        favorite ? "text-accent" : "text-muted-foreground hover:text-foreground opacity-0 group-hover/macro:opacity-100"
                      )}
                    >
                      <Star className={cn("w-4 h-4", favorite && "fill-accent")} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroCard;
