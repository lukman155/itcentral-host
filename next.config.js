module.exports = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    // Warning: Disabling ESLint during production builds!
    ignoreDuringBuilds: true,
  },
};
