import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: 'http://localhost:3000/',
    server: {
      open: true,
    },
  };
});
