import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Blog-App-ReactJS/',
  plugins: [react()],
  server: {
    port: 3000, // Specify the desired port for the Vite development server
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Change this to match your blog data server's URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
