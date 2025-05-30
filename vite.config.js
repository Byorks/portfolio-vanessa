import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '5174-iogsgmnpun5f1dbtxqruj-4eba7cf5.manusvm.computer',
      'localhost',
      '127.0.0.1'
    ]
  }
})
