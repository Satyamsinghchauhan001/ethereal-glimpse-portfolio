import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="glass glass-hover rounded-full w-12 h-12 border border-white/10 hover:border-white/20 transition-all duration-300 group"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        {/* Sun Icon */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}>
          <div className="w-6 h-6 relative">
            {/* Sun rays */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-2 bg-accent rounded-full"
                  style={{
                    top: "0px",
                    left: "50%",
                    transformOrigin: "center 12px",
                    transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  }}
                />
              ))}
            </div>
            {/* Sun center */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Moon Icon */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}>
          <div className="w-6 h-6 relative">
            <div className="w-5 h-5 rounded-full bg-accent relative overflow-hidden">
              <div className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-background" />
            </div>
          </div>
        </div>
      </div>
    </Button>
  );
};

export default ThemeToggle;