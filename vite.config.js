import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const REPO_NAME = 'Portfolio';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'ghpages' ? `/${REPO_NAME}/` : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
}));
