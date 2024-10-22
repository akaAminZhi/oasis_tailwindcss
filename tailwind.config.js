/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 3s linear infinite", // 自定义缓慢旋转
      },
    },
  },
  plugins: [],
};
