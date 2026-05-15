/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ya no necesitas output: 'export' a menos que quieras algo muy específico,
  // pero Vercel maneja todo por defecto.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
