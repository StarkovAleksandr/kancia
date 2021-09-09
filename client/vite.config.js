import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  plugins: [reactRefresh()],
});
