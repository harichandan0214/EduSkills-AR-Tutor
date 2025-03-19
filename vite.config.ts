import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows network access
    port: 5173, // Optional: Specify the port
    https: {
  
  key:   "C:/Users/Hari Chandan/Downloads/project-bolt-sb1-sde6vlem/project/localhost.key",
 cert:    "C:/Users/Hari Chandan/Downloads/project-bolt-sb1-sde6vlem/project/localhost.crt",
},
  },  
})
