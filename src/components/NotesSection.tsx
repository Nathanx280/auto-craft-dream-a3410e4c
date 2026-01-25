import { AlertTriangle, Info } from "lucide-react";

const NotesSection = () => {
  const notes = [
    "Bedrock Edition is much more restrictive than Java — desktop input macros work, but server-side commands or auto-aim/dupe exploits are mostly blocked.",
    "Many of these require singleplayer or creative mode.",
    "Some actions (like auto-build with exact coordinates) may require image recognition (OpenCV) or protocol scripting.",
    "True duping cannot reliably be automated anymore in modern Bedrock.",
  ];

  return (
    <section className="mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
      <div className="bg-card rounded-lg border border-border p-6 card-glow">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-accent" />
          <h2 className="text-xl font-semibold text-foreground">Notes & Limitations</h2>
        </div>
        
        <ul className="space-y-3">
          {notes.map((note, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <Info className="w-4 h-4 mt-1 flex-shrink-0 text-accent/60" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NotesSection;
