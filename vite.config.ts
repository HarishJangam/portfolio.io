import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// export default defineConfig(() => ({
//   server: {
//     host: "::",
//     port: 8081,
//   },
//   plugins: [
//     react(),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));
export default defineConfig({
  base: '/portfolio.io/', // Add this line
  plugins: [react()], // or whatever plugins you have
})
