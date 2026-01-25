import { useState, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import MacroCard from "@/components/MacroCard";
import SearchBar from "@/components/SearchBar";
import NotesSection from "@/components/NotesSection";
import { macroCategories } from "@/data/macroCategories";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return macroCategories;
    
    const query = searchQuery.toLowerCase();
    
    return macroCategories.filter((category) => {
      // Check if category title matches
      if (category.title.toLowerCase().includes(query)) return true;
      
      // Check if any macro name or description matches
      return category.macros.some(
        (macro) =>
          macro.name.toLowerCase().includes(query) ||
          macro.description.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 pb-16">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">No macros found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredCategories.map((category, index) => (
              <MacroCard key={category.id} category={category} index={index} />
            ))}
          </div>
        )}
        
        <NotesSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="font-pixel text-xs text-primary">BEDROCK MACROS</span>
            {" "}— Minecraft Automation Reference Guide
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
