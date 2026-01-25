import { 
  Footprints, 
  Swords, 
  Backpack, 
  Wheat, 
  Building2, 
  Shield, 
  Zap, 
  Moon, 
  Terminal, 
  Eye, 
  Layers 
} from "lucide-react";

export interface Macro {
  name: string;
  description: string;
}

export interface MacroCategory {
  id: string;
  number: string;
  title: string;
  icon: typeof Footprints;
  color: "emerald" | "torch" | "diamond" | "redstone" | "ender";
  macros: Macro[];
}

export const macroCategories: MacroCategory[] = [
  {
    id: "movement",
    number: "1",
    title: "Player Movement Automation",
    icon: Footprints,
    color: "emerald",
    macros: [
      { name: "Auto-Walk / Auto-Run", description: "Hold W automatically, stop on obstacles." },
      { name: "Auto-Sprint", description: "Sprint while moving forward automatically." },
      { name: "Auto-Jump / Bunny Hop", description: "Continuously jump while walking." },
      { name: "Parkour Macros", description: "Automated precise jumps over gaps." },
      { name: "Auto-Fly / Glide", description: "Maintain flight path or loop (Creative mode)." },
      { name: "Waypoint Teleport", description: "Automate movement to fixed coordinates." },
    ],
  },
  {
    id: "combat",
    number: "2",
    title: "Combat Automation",
    icon: Swords,
    color: "redstone",
    macros: [
      { name: "Auto-Attack / Kill Aura", description: "Continuously attack mobs in range." },
      { name: "Auto-Block / Shielding", description: "Use shield when enemies attack." },
      { name: "Auto-Bow / Crossbow", description: "Aim & fire projectiles automatically." },
      { name: "Auto-Target / Aim Assist", description: "Track mobs and move crosshair." },
    ],
  },
  {
    id: "inventory",
    number: "3",
    title: "Inventory & Item Management",
    icon: Backpack,
    color: "torch",
    macros: [
      { name: "Auto Inventory Sort", description: "Move items into specific slots automatically." },
      { name: "Auto Hotbar Setup", description: "Place tools into designated hotbar slots." },
      { name: "Auto-Stack Items", description: "Merge stacks in inventory." },
      { name: "Auto-Consume Items", description: "Automatically eat food, potions, or use items." },
      { name: "Auto-Crafting", description: "Perform repetitive crafting actions." },
      { name: "Auto-Drop / Pickup", description: "Drop items when full, pick up automatically." },
    ],
  },
  {
    id: "farming",
    number: "4",
    title: "Farming & Resource Automation",
    icon: Wheat,
    color: "emerald",
    macros: [
      { name: "Auto-Fish", description: "Detect bobber splash and right-click automatically." },
      { name: "Auto-Mine", description: "Continuously break blocks using pickaxe." },
      { name: "Auto-Harvest Crops", description: "Detect ripe crops and harvest them." },
      { name: "Auto-Plant / Replant", description: "Plant seeds automatically after harvesting." },
      { name: "Auto-Smelt", description: "Open furnace UI and move items." },
      { name: "Auto-Animal Breeding", description: "Feed animals automatically when conditions met." },
    ],
  },
  {
    id: "building",
    number: "5",
    title: "Building & Construction",
    icon: Building2,
    color: "diamond",
    macros: [
      { name: "Auto-Place Blocks", description: "Place blocks in preset pattern or coordinates." },
      { name: "Auto-Build Structures", description: "Predefined structures placed automatically." },
      { name: "Fill / Line / Tower", description: "Build walls, lines, or vertical pillars." },
      { name: "Auto-Bridge", description: "Place blocks while moving to span gaps." },
    ],
  },
  {
    id: "defense",
    number: "6",
    title: "Combat/Defense Support",
    icon: Shield,
    color: "ender",
    macros: [
      { name: "Auto-Trap", description: "Place blocks around self when under attack." },
      { name: "Auto-Potion / Healing", description: "Automatically use potions when health is low." },
      { name: "Auto-TNT / Explosives", description: "Place and detonate TNT with timing." },
    ],
  },
  {
    id: "redstone",
    number: "7",
    title: "Redstone / Mechanism Automation",
    icon: Zap,
    color: "redstone",
    macros: [
      { name: "Redstone Pulse Automation", description: "Activate buttons/levers at intervals." },
      { name: "Auto-Hopper / Chest", description: "Move items between chests using hotkeys." },
      { name: "Auto-Furnace Logic", description: "Open furnace, move items in/out." },
    ],
  },
  {
    id: "afk",
    number: "8",
    title: "AFK / Idle Automation",
    icon: Moon,
    color: "ender",
    macros: [
      { name: "AFK Farm / Crop", description: "Stand still while harvesting repeatedly." },
      { name: "AFK Fishing / Looting", description: "Keep fishing bobber clicks active." },
      { name: "AFK Mob Farming", description: "Kill mobs automatically or stay in trap." },
      { name: "AFK Movement Loop", description: "Walk in small pattern to avoid AFK kick." },
    ],
  },
  {
    id: "commands",
    number: "9",
    title: "Command / Server Automation",
    icon: Terminal,
    color: "torch",
    macros: [
      { name: "Auto-Run Commands", description: "Execute /give, /tp, /effect automatically." },
      { name: "Macro Chat Messages", description: "Auto-type repetitive messages or alerts." },
      { name: "Scheduled Commands", description: "Run commands at intervals." },
    ],
  },
  {
    id: "detection",
    number: "10",
    title: "Advanced Detection / Event",
    icon: Eye,
    color: "diamond",
    macros: [
      { name: "Health / Hunger Monitor", description: "Trigger actions when low." },
      { name: "Environmental Detection", description: "Detect mobs, blocks, or biomes." },
      { name: "Time-Based Actions", description: "Day/night cycle triggers (e.g., auto sleep)." },
      { name: "Event Reaction Macros", description: "Respond to explosions, lava, falling blocks." },
    ],
  },
  {
    id: "hybrid",
    number: "11",
    title: "Hybrid / Multi-Feature Macros",
    icon: Layers,
    color: "emerald",
    macros: [
      { name: "Auto-farm Combo", description: "Auto-farm + auto-collect + auto-replant." },
      { name: "Mining Pipeline", description: "Auto-mine + auto-smelt + auto-store." },
      { name: "Combat Suite", description: "Combat + potion + retreat macros combined." },
    ],
  },
];
