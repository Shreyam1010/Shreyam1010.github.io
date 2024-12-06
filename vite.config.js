import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shoppingreact/', // Ensure this matches the deployment subdirectory
  plugins: [react()],
})
