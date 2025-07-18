import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set the base path for the project.
  // This should be the name of your GitHub repository.
  base: "/React-lottery-ticket/",
  plugins: [react()],
})