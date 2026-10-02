// sitemap-generator.js
const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

async function generateSitemap() {
	const sitemap = new SitemapStream({
		hostname: "https://auliailmimr.github.io/",
	});

	// Add URLs to your sitemap
	sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
	sitemap.write({ url: "/about/", changefreq: "daily", priority: 0.9 });
	sitemap.write({ url: "/projects/", changefreq: "daily", priority: 0.9 });
	sitemap.write({ url: "/projects/archive/", changefreq: "daily", priority: 0.7 });

	// One entry per published project in json/data.json
	const { Projects } = require("./json/data.json");
	Projects.filter((project) => project.show).forEach((project) =>
		sitemap.write({ url: `/projects/${project.slug}/`, changefreq: "monthly", priority: 0.6 })
	);

	sitemap.end();

	const sitemapXML = (await streamToPromise(sitemap)).toString();
	fs.writeFileSync("./public/sitemap.xml", sitemapXML);
}

generateSitemap();
