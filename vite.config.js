import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/status': {
        target: 'https://e64d3f093bf3.ngrok-free.app/status.php',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/status/, '/status.php'),
      },
    },
  },
});

