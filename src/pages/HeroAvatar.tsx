import coolGuy from "/src/assets/hero-withoutbghd.png";

const HeroAvatar = () => {
  return (
    <div className="col-span-1 animate-fade-in-up relative flex justify-center items-center">
      {/* Tech Logos - Left Side (Before) */}
      <div
        className="absolute left-[40px] top-1/4 animate-float max-sm:left-0 max-sm:top-[15%]"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/src/assets/logos/cross-platform.png"
          className="w-8 h-8"
          alt="HTML"
        />
      </div>
      <div className="absolute left-[5%] top-[43%]  animate-float">
        <img src="/src/assets/logos/css-3.png" className="w-8 h-8" alt="CSS" />
      </div>
      <div
        className="absolute left-[20%] top-[45%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/src/assets/logos/html.png"
          className="w-8 h-8 "
          alt="React"
        />
      </div>

      <div className="absolute left-[5%] top-[55%]  animate-float">
        <img
          src="/src/assets/logos/react-01.png"
          className="w-8 h-8 "
          alt="CSS"
        />
      </div>
      <div
        className="absolute left-[0%] top-[32%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/src/assets/logos/mui.png"
          className="w-8 h-8 rounded-2xl"
          alt="CSS"
        />
      </div>

      <div className="absolute left-[20%] top-[65%]  animate-float">
        <img
          src="/src/assets/logos/tailwind.png"
          className="w-8 h-8 rounded-2xl animate-glow"
          alt="CSS"
        />
      </div>
      <div
        className="absolute left-[25%] top-[15%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/src/assets/logos/vscode.jpeg"
          className="w-8 h-8 rounded-2xl animate-glow"
          alt="CSS"
        />
      </div>

      {/* Main Image */}
      <img
        src={coolGuy}
        className="h-4/6 z-10 animate-float"
        alt="CoolGuy"
        style={{ animationDelay: "3s" }}
      />

      {/* Tech Logos - Right Side (After) */}
      <div
        className="absolute right-[20%] top-[15%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/src/assets/logos/js.png"
          className="w-8 h-8 animate-glow"
          alt="Next.js"
        />
      </div>

      <div className="absolute right-[0%] sm:right-[15%] top-[40%]  animate-float">
        <img
          src="/src/assets/logos/typescript.png"
          className="w-8 h-8"
          alt="Capacitor"
        />
      </div>
      <div
        className="absolute max-sm:right-[5%] right-[28%] top-[25%] sm:top-[20%] animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/src/assets/logos/redux.png"
          className="w-16 h-14 rounded-full "
          alt="Capacitor"
        />
      </div>
      <div
        className="absolute right-[5%] top-[50%] sm:right-[20%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/src/assets/logos/daisyui.png"
          className="w-20 h-10"
          alt="Capacitor"
        />
      </div>
      <div className="absolute right-[28%] top-[65%]  animate-float">
        <img
          src="/src/assets/logos/css-3.png"
          className="w-8 h-8"
          alt="Capacitor"
        />
      </div>
      <div
        className="absolute right-[10%] top-[65%] animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/src/assets/logos/android-studio-icon.webp"
          className="w-8 h-8"
          alt="Capacitor"
        />
      </div>
      <div
        className="absolute right-[30%] top-[25%] sm:right-[15%]  animate-float"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/src/assets/logos/firebase.webp"
          className="w-8 h-8 rounded-2xl"
          alt="CSS"
        />
      </div>
    </div>
  );
};

export default HeroAvatar;
