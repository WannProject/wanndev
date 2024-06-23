// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Tambahkan ini jika Anda mengalami masalah dengan gambar
  },
};

module.exports = nextConfig;
