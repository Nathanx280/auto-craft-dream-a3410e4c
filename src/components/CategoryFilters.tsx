import { macroCategories, MacroCategory } from "@/data/macroCategories";
import { cn } from "@/lib/utils";

interface CategoryFiltersProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  showFavorites: boolean;
  onToggleFavorites: () => void;
  favoritesCount: number;
}

const CategoryFilters = ({
  selectedCategory,
  onSelectCategory,
  showFavorites,
  onToggleFavorites,
  favoritesCount,
}: CategoryFiltersProps) => {
  return (
    <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.35s" }}>
      <div className="flex flex-wrap gap-2 justify-center">
        {/* All button */}
        <button
          onClick={() => {
            onSelectCategory(null);
            if (showFavorites) onToggleFavorites();
          }}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
            !selectedCategory && !showFavorites
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
          )}
        >
          All
        </button>

        {/* Favorites button */}
        <button
          onClick={onToggleFavorites}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
            showFavorites
              ? "bg-accent text-accent-foreground"
              : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
          )}
        >
          ⭐ Favorites
          {favoritesCount > 0 && (
            <span className="px-1.5 py-0.5 text-xs bg-background/30 rounded-full">
              {favoritesCount}
            </span>
          )}
        </button>

        {/* Category buttons */}
        {macroCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => {
                onSelectCategory(category.id);
                if (showFavorites) onToggleFavorites();
              }}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilters;
