import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configurams VITE para que soporte a REACT
export default defineConfig({
  plugins: [react()],
  test: { // <-- Config. de VITEST
    environment: 'happy-dom'
  },
  server: {
    proxy: {
        '/': {
            target: 'http://localhost:1234',
            changeOrigin: true,
            secure: false
        }
      }
    }
})

// Con HAPPY-DOM simulamos un navegador con todo los eventos del usuario
