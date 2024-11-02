// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // Proxy all requests starting with `/api` to `http://localhost:9090`
            '/api': {
                target: 'http://localhost:9090',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove `/api` prefix
            },
        },
    },
});
