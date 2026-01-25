import { X, Star, Keyboard, AlertCircle, ExternalLink } from "lucide-react";
import { Macro, MacroCategory } from "@/data/macroCategories";
import { useFavoritesStore } from "@/stores/appStore";
import { cn } from "@/lib/utils";

interface MacroDetailModalProps {
  macro: Macro;
  category: MacroCategory;
  onClose: () => void;
}

const difficultyInfo = {
  easy: { label: "Easy", color: "text-emerald bg-emerald/10", description: "Can be set up with basic automation tools" },
  medium: { label: "Medium", color: "text-accent bg-accent/10", description: "Requires some scripting or timing knowledge" },
  hard: { label: "Hard", color: "text-redstone bg-redstone/10", description: "Advanced setup, may require image recognition or scripting" },
};

const MacroDetailModal = ({ macro, category, onClose }: MacroDetailModalProps) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(macro.id);
  const Icon = category.icon;
  const difficulty = macro.difficulty ? difficultyInfo[macro.difficulty] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-xl w-full max-w-lg card-glow animate-scale-in overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-lg">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">{macro.name}</h2>
                <p className="text-sm text-muted-foreground">{category.title}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleFavorite(macro.id)}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  favorite ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <Star className={cn("w-5 h-5", favorite && "fill-accent")} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
            <p className="text-foreground">{macro.description}</p>
          </div>
          
          {/* Difficulty */}
          {difficulty && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Difficulty</h3>
              <div className="flex items-center gap-3">
                <span className={cn("px-3 py-1.5 rounded-lg text-sm font-medium", difficulty.color)}>
                  {difficulty.label}
                </span>
                <span className="text-sm text-muted-foreground">{difficulty.description}</span>
              </div>
            </div>
          )}
          
          {/* Keybinds */}
          {macro.keybinds && macro.keybinds.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                <Keyboard className="w-4 h-4" />
                Keybinds
              </h3>
              <div className="flex flex-wrap gap-2">
                {macro.keybinds.map((key) => (
                  <span 
                    key={key} 
                    className="px-3 py-1.5 bg-secondary rounded-lg text-foreground font-mono text-sm"
                  >
                    {key}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Requirements */}
          {macro.requirements && macro.requirements.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Requirements
              </h3>
              <div className="flex flex-wrap gap-2">
                {macro.requirements.map((req) => (
                  <span 
                    key={req} 
                    className="px-3 py-1.5 bg-destructive/10 text-destructive rounded-lg text-sm"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Implementation Tips */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Implementation Tips</h3>
            <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm text-muted-foreground">
              <p>• Use desktop automation tools like AutoHotkey or Macro Recorder</p>
              <p>• Test in singleplayer before using on servers</p>
              <p>• Some macros may violate server rules - check policies first</p>
              {macro.requirements?.includes("OpenCV") && (
                <p>• Image recognition requires Python + OpenCV setup</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-border bg-secondary/30">
          <button
            onClick={() => toggleFavorite(macro.id)}
            className={cn(
              "w-full py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
              favorite 
                ? "bg-accent/20 text-accent hover:bg-accent/30" 
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            <Star className={cn("w-4 h-4", favorite && "fill-current")} />
            {favorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MacroDetailModal;
