import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        host: true,
        port: 5173,
	cors: true,
        hmr: {
            host: '159.89.104.112',
	    protocol: 'ws',
        },
        watch: {
            ignored: ['**/vendor/**', '**/node_modules/**'],
        },
    },
    
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
});
