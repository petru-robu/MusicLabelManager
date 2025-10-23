import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx',
            ],
            refresh: true,
            buildDirectory: 'build',
        }),
        react(),
        tailwindcss(),
    ],
    build: {
        outDir: 'public/build',
        manifest: true,
        rollupOptions: {
            // remove 'input' here, let laravel-vite-plugin handle both JS and CSS
        },
    },
});
