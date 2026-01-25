import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeVariant = "default" | "nether" | "end" | "ocean";

interface ThemeState {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "default",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "macro-theme",
    }
  )
);

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (macroId: string) => void;
  isFavorite: (macroId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (macroId) =>
        set((state) => ({
          favorites: state.favorites.includes(macroId)
            ? state.favorites.filter((id) => id !== macroId)
            : [...state.favorites, macroId],
        })),
      isFavorite: (macroId) => get().favorites.includes(macroId),
    }),
    {
      name: "macro-favorites",
    }
  )
);
