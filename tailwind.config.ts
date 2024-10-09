import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        background: "#F5F5F5", // Light background
        foreground: "#121212", // Dark text
        gray: "#A6A6A6",      // Light gray
        midGray: "#3D3D3D",   // Dark gray
        
        // Dark mode colors
        'dark-background': "#121212", // Dark background
        'dark-foreground': "#F5F5F5", // Light text
        'dark-gray': "#3D3D3D",       // Dark gray
        'dark-midGray': "#A6A6A6",    // Light gray
      },
    },
    darkMode: 'class', // Enable dark mode via a class
  },
  plugins: [],
};

export default config;
