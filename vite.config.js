import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',   // add this
                'resources/js/app.jsx',
            ],
            refresh: true,
            buildDirectory: 'build',
        }),
        react(),
        tailwindcss(),
        {
            name: 'move-manifest',
            writeBundle(options, bundle) {
                const viteManifestPath = path.resolve('public/build/.vite/manifest.json');
                const targetPath = path.resolve('public/build/manifest.json');
                if (fs.existsSync(viteManifestPath)) {
                    fs.renameSync(viteManifestPath, targetPath);
                }
            },
        },
    ],
    build: {
        outDir: 'public/build',
        manifest: true,
        rollupOptions: {
            input: 'resources/js/app.jsx',
        },
    },
});
