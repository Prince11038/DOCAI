import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['styled-components'],
  },
  resolve: {
    alias: {
      'styled-components': 'styled-components/dist/styled-components.cjs.js',
    },
  },
})
