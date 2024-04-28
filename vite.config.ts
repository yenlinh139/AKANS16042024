import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(),],
  base: "./",
  build: { 
    polyfillModulePreload:false,
    rollupOptions: {
    output: {
        entryFileNames: 'assets/[name].[hash].module.js',
        chunkFileNames: 'assets/[name].[hash].module.js',
      },
    },
  }
})
