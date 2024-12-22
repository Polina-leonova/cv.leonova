import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "https://polina-leonova.github.io/cv.leonova"
  server: {
    port: 3000 
  }
});
