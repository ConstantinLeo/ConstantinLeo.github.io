import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Le point de départ du projet
  publicDir: 'public', // Dossier contenant les fichiers statiques
})
