import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MacroCategory } from "@/data/macroCategories";
import { cn } from "@/lib/utils";

interface MacroCardProps {
  category: MacroCategory;
  index: number;
}

const colorStyles = {
  emerald: {
    badge: "bg-primary/20 text-primary border-primary/30",
    icon: "text-primary",
    hover: "hover:border-primary/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(142_70%_45%/0.2)]",
  },
  torch: {
    badge: "bg-accent/20 text-accent border-accent/30",
    icon: "text-accent",
    hover: "hover:border-accent/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(35_90%_55%/0.2)]",
  },
  diamond: {
    badge: "bg-diamond/20 text-diamond border-diamond/30",
    icon: "text-diamond",
    hover: "hover:border-diamond/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(195_85%_55%/0.2)]",
  },
  redstone: {
    badge: "bg-redstone/20 text-redstone border-redstone/30",
    icon: "text-redstone",
    hover: "hover:border-redstone/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(0_75%_50%/0.2)]",
  },
  ender: {
    badge: "bg-ender/20 text-ender border-ender/30",
    icon: "text-ender",
    hover: "hover:border-ender/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(280_60%_55%/0.2)]",
  },
};

const MacroCard = ({ category, index }: MacroCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const styles = colorStyles[category.color];
  const Icon = category.icon;

  return (
    <div
      className={cn(
        "group bg-card rounded-lg border border-border transition-all duration-300 card-glow animate-fade-in",
        styles.hover,
        styles.glow
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-center gap-4 text-left"
      >
        {/* Number badge */}
        <div className={cn("flex-shrink-0 w-10 h-10 rounded-md border flex items-center justify-center font-pixel text-xs", styles.badge)}>
          {category.number}
        </div>
        
        {/* Icon */}
        <div className={cn("flex-shrink-0", styles.icon)}>
          <Icon className="w-6 h-6" />
        </div>
        
        {/* Title */}
        <div className="flex-grow min-w-0">
          <h3 className="text-foreground font-semibold text-lg truncate">{category.title}</h3>
          <p className="text-muted-foreground text-sm">{category.macros.length} macros available</p>
        </div>
        
        {/* Expand icon */}
        <div className="flex-shrink-0 text-muted-foreground">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 transition-transform" />
          ) : (
            <ChevronDown className="w-5 h-5 transition-transform" />
          )}
        </div>
      </button>
      
      {/* Expanded content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5 pt-0">
          <div className="border-t border-border pt-4">
            <div className="grid gap-3">
              {category.macros.map((macro, macroIndex) => (
                <div
                  key={macro.name}
                  className="flex items-start gap-3 p-3 rounded-md bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className={cn("w-2 h-2 rounded-full mt-2 flex-shrink-0", {
                    "bg-primary": category.color === "emerald",
                    "bg-accent": category.color === "torch",
                    "bg-diamond": category.color === "diamond",
                    "bg-redstone": category.color === "redstone",
                    "bg-ender": category.color === "ender",
                  })} />
                  <div>
                    <h4 className="text-foreground font-medium">{macro.name}</h4>
                    <p className="text-muted-foreground text-sm">{macro.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroCard;
