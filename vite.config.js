import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwind()],
  // 🔽 IMPORTANT: set this to your repo name if using project pages
  base: "/bell-aviation-romisoft/",
})
