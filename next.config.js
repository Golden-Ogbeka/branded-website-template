/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
