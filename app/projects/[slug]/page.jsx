import { notFound } from "next/navigation";
import jsonData from "@/json/data.json";
import ProjectDetail from "./ProjectDetail";

// Static export (GitHub Pages) pre-renders one HTML page per project slug
export const dynamicParams = false;

const findProject = (slug) =>
	jsonData.Projects.find((project) => project.slug === slug);

export function generateStaticParams() {
	return jsonData.Projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
	const project = findProject((await params).slug);
	if (!project) return {};
	const description = project.desc[0];
	return {
		title: `${project.title} | Aulia Ilmi Maghfira Ridwan`,
		description,
		openGraph: {
			title: project.title,
			description,
			url: `/projects/${project.slug}/`,
			images: project.thumbnail ? [{ url: project.thumbnail }] : undefined,
		},
	};
}

export default async function Page({ params }) {
	const project = findProject((await params).slug);
	if (!project) notFound();
	return <ProjectDetail project={project} />;
}
