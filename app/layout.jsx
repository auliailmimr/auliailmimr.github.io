import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
	metadataBase: new URL("https://auliailmimr.github.io"),
	verification: {
		google: "sDLXBwUIsXMYStQY6SCtVvi0Dqthn2uSbl9q_U04vjc",
	},
	title: "Aulia Ilmi Maghfira Ridwan | Portfolio",
	description:
		"Aulia Ilmi Maghfira Ridwan, an Informatics Engineering graduate and AI & Machine Learning enthusiast focused on data analysis, machine learning, and applying AI to real-world problems.",
	authors: [{ name: "Aulia Ilmi Maghfira Ridwan" }],
	applicationName: "Auliaimr",
	keywords: [
		"auliaimr",
		"aulia ilmi maghfira ridwan",
		"aulia ilmi maghfira",
		"aulia ilmi",
		"data analyst",
		"ai enthusiast",
		"machine learning",
		"uin malang",
	],
	openGraph: {
		type: "website",
		url: "/",
		title: "Aulia Ilmi Maghfira Ridwan | Portfolio",
		siteName: "Aulia Ilmi Maghfira Ridwan | Portfolio",
		description:
			"Portfolio of Aulia Ilmi Maghfira Ridwan, AI & Machine Learning enthusiast.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Aulia Ilmi Maghfira Ridwan Portfolio",
			},
		],
	},
};

// Structured data so search engines can match the site to the person's name
const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Aulia Ilmi Maghfira Ridwan",
	alternateName: ["Aulia Ilmi Maghfira", "Auliaimr"],
	url: "https://auliailmimr.github.io/",
	image: "https://auliailmimr.github.io/og-image.png",
	jobTitle: "AI & Machine Learning Enthusiast",
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Universitas Islam Negeri Maulana Malik Ibrahim Malang",
	},
	address: { "@type": "PostalAddress", addressLocality: "Malang", addressCountry: "ID" },
	knowsAbout: ["Data Analysis", "Machine Learning", "Computer Vision", "Python", "SQL"],
	sameAs: [
		"https://github.com/auliailmimr",
		"https://www.linkedin.com/in/auliailmimr",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
