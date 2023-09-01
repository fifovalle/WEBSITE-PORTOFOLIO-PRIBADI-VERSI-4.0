module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "461px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
        customScrollbar: "#FF56F6",
      },
      backgroundImage: {
        site: "url('./assets/latar.jpg')",
        about: "url('./assets/tentang.png')",
        services: "url('./assets/layanan.png')",
      },
    },
  },
  plugins: [],
};
