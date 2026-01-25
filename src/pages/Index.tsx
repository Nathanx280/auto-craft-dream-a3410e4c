import { useState, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import MacroCard from "@/components/MacroCard";
import SearchBar from "@/components/SearchBar";
import NotesSection from "@/components/NotesSection";
import CategoryFilters from "@/components/CategoryFilters";
import FavoritesPanel from "@/components/FavoritesPanel";
import MacroDetailModal from "@/components/MacroDetailModal";
import { macroCategories, Macro, MacroCategory } from "@/data/macroCategories";
import { useFavoritesStore, useThemeStore } from "@/stores/appStore";
import { useEffect } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedMacro, setSelectedMacro] = useState<{ macro: Macro; category: MacroCategory } | null>(null);
  
  const { favorites } = useFavoritesStore();
  const { theme } = useThemeStore();

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.classList.remove("theme-nether", "theme-end", "theme-ocean");
    if (theme !== "default") {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  const filteredCategories = useMemo(() => {
    let categories = macroCategories;
    
    // Filter by category
    if (selectedCategory) {
      categories = categories.filter((cat) => cat.id === selectedCategory);
    }
    
    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      categories = categories
        .map((category) => ({
          ...category,
          macros: category.macros.filter(
            (macro) =>
              macro.name.toLowerCase().includes(query) ||
              macro.description.toLowerCase().includes(query)
          ),
        }))
        .filter((category) => category.macros.length > 0);
    }
    
    return categories;
  }, [searchQuery, selectedCategory]);

  const handleMacroClick = (macro: Macro, category: MacroCategory) => {
    setSelectedMacro({ macro, category });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 pb-16">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
        <CategoryFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          showFavorites={showFavorites}
          onToggleFavorites={() => setShowFavorites(!showFavorites)}
          favoritesCount={favorites.length}
        />
        
        {showFavorites ? (
          <FavoritesPanel onMacroClick={handleMacroClick} />
        ) : filteredCategories.length === 0 ? (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">No macros found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
              }}
              className="mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredCategories.map((category, index) => (
              <MacroCard 
                key={category.id} 
                category={category} 
                index={index}
                onMacroClick={handleMacroClick}
              />
            ))}
          </div>
        )}
        
        <NotesSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-6 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="font-pixel text-xs text-primary">BEDROCK MACROS</span>
            {" "}— Minecraft Automation Reference Guide • {macroCategories.reduce((acc, cat) => acc + cat.macros.length, 0)} Macros
          </p>
        </div>
      </footer>

      {/* Detail Modal */}
      {selectedMacro && (
        <MacroDetailModal
          macro={selectedMacro.macro}
          category={selectedMacro.category}
          onClose={() => setSelectedMacro(null)}
        />
      )}
    </div>
  );
};

export default Index;
