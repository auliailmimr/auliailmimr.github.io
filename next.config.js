const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
	// Static export for GitHub Pages: `next build` writes the site to ./out
	output: "export",
	// Folder-style URLs (/about/index.html) so GitHub Pages resolves /about and /projects
	trailingSlash: true,
	images: {
		// GitHub Pages has no image optimization server
		unoptimized: true,
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.pdf$/i,
			type: "asset/source",
		});

		return config;
	},
	reactStrictMode: true,
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
				  }
				: false,
	},
});
