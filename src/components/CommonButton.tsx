import { Button } from "./ui/button";

const CommonButton = ({
  text,
  variant,
  idName,
  size,
}: {
  text: string;
  variant: "primary" | "outline";
  idName: string;
  size: "lg" | "sm" | "default" | "icon";
}) => {
  return (
    <>
      <Button
        size={size}
        className={`"glass-hover glass-hover text-lg px-8 py-3 hover:scale-105 transition-all duration-300 group relative overflow-hidden ${
          variant === "primary"
            ? "glass-strong bg-primary/20 hover:bg-primary/30 border-primary/30"
            : "glass border-white/20 hover:bg-white/10 "
        }`}
        onClick={() =>
          document
            .getElementById(idName)
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="relative z-10">{text}</span>

        <div
          className={`absolute inset-0 bg-gradient-to-r transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${
            variant === "primary"
              ? "from-primary/0 via-primary/50 to-primary/0"
              : "from-accent/0 via-accent/30 to-accent/0 "
          }`}
        ></div>
      </Button>
    </>
  );
};

export default CommonButton;
