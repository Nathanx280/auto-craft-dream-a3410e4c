import { Palette, Flame, Moon, Waves, Sparkles } from "lucide-react";
import { useThemeStore, ThemeVariant } from "@/stores/appStore";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const themes: { id: ThemeVariant; name: string; icon: typeof Palette; colors: string }[] = [
  { id: "default", name: "Emerald", icon: Sparkles, colors: "from-emerald-500 to-emerald-700" },
  { id: "nether", name: "Nether", icon: Flame, colors: "from-orange-500 to-red-600" },
  { id: "end", name: "End", icon: Moon, colors: "from-purple-500 to-violet-700" },
  { id: "ocean", name: "Ocean", icon: Waves, colors: "from-cyan-500 to-blue-600" },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Remove all theme classes and add the current one
    document.documentElement.classList.remove("theme-nether", "theme-end", "theme-ocean");
    if (theme !== "default") {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-1 p-1 bg-secondary/80 rounded-lg backdrop-blur-sm">
      {themes.map((t) => {
        const Icon = t.icon;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={cn(
              "p-2 rounded-md transition-all duration-200",
              theme === t.id
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
            title={t.name}
          >
            <Icon className="w-4 h-4" />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
