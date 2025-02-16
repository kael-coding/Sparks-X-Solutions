// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Use the port provided by Render
    host: '0.0.0.0', // Bind to all network interfaces
  },
  preview: {
    allowedHosts: ['sparks-x-solutions.onrender.com', 'localhost'], // Add your Render URL here
  },
});
