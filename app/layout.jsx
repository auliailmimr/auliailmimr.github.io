import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
	metadataBase: new URL("https://auliailmimr.github.io"),
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

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
