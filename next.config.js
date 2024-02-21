const { paraglide } = require('@inlang/paraglide-js-adapter-next/plugin');

/** @type {import('next').NextConfig} */
const nextConfig = paraglide({
  paraglide: {
		project: "./project.inlang",
		outdir: "./paraglide",
	},

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      }
    ]
  }
});

module.exports = nextConfig;
