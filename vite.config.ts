import path from 'node:path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vitePlugin as remix } from '@remix-run/dev';

export default defineConfig({
  resolve: {
    alias: {
      '~pages': path.resolve(__dirname, 'app/src/pages'),
      '~layouts': path.resolve(__dirname, 'app/src/layouts'),
      '~modules': path.resolve(__dirname, 'app/src/modules'),
      '~shared': path.resolve(__dirname, 'app/src/shared'),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route('/admin', 'routes/admin/_index.jsx');
        });
      },
    }),
    tsconfigPaths(),
  ],
  ssr: {
    noExternal: ['react-use'],
  },
});
