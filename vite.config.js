import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    server: {
        host: true,
        port: 5173,
	    cors: true,
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'certs/live/petrucodes.ro/privkey.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'certs/live/petrucodes.ro/fullchain.pem')),
        },
        hmr: {
            host: 'petrucodes.ro',
	        protocol: 'wss',
            port: 5173,
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
