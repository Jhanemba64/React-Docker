import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Utiliser le polling pour surveiller les fichiers
      interval: 300, // Intervalle de polling en ms
    },
    host: "0.0.0.0", // Permet d'accéder au serveur depuis le container Docker
    port: 5173, // Port par défaut de Vite (à configurer si nécessaire)
    strictPort: true, // Forcer l'utilisation du port spécifié
    hmr: {
      protocol: "ws",
      host: "localhost", // WebSocket pour le hot reload
    },
  },
});
