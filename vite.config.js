import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  base: './',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
