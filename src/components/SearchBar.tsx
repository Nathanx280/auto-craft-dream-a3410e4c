import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-md mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search macros..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
      />
    </div>
  );
};

export default SearchBar;
