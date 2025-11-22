import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is crucial for GitHub Pages!
  // It tells Vite that the app is hosted at https://emdarx.github.io/dino-runner/
  base: '/dino-runner/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});