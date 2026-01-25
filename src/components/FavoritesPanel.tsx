import { Star, Trash2 } from "lucide-react";
import { macroCategories, Macro, MacroCategory } from "@/data/macroCategories";
import { useFavoritesStore } from "@/stores/appStore";
import { cn } from "@/lib/utils";

interface FavoritesPanelProps {
  onMacroClick: (macro: Macro, category: MacroCategory) => void;
}

const FavoritesPanel = ({ onMacroClick }: FavoritesPanelProps) => {
  const { favorites, toggleFavorite } = useFavoritesStore();

  // Get all favorited macros with their categories
  const favoritedMacros = favorites
    .map((id) => {
      for (const category of macroCategories) {
        const macro = category.macros.find((m) => m.id === id);
        if (macro) {
          return { macro, category };
        }
      }
      return null;
    })
    .filter(Boolean) as { macro: Macro; category: MacroCategory }[];

  if (favoritedMacros.length === 0) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="inline-flex p-4 bg-secondary rounded-xl mb-4">
          <Star className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No Favorites Yet</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Click the star icon on any macro to add it to your favorites for quick access.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Star className="w-5 h-5 text-accent fill-accent" />
          Your Favorites ({favoritedMacros.length})
        </h2>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {favoritedMacros.map(({ macro, category }) => {
          const Icon = category.icon;
          return (
            <div
              key={macro.id}
              className="group bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all cursor-pointer card-glow"
              onClick={() => onMacroClick(macro, category)}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-secondary rounded-md">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-foreground font-medium text-sm truncate">{macro.name}</h4>
                  <p className="text-muted-foreground text-xs truncate">{category.title}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(macro.id);
                  }}
                  className="p-1.5 text-accent hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                  title="Remove from favorites"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPanel;
