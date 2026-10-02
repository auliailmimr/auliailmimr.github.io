import jsonData from "@/json/data.json";
import ProjectDetail from "./ProjectDetail";

// Static export (GitHub Pages) pre-renders one HTML page per project slug
export const dynamicParams = false;

export function generateStaticParams() {
	return jsonData.Projects.map((project) => ({ slug: project.slug }));
}

export default function Page({ params }) {
	return <ProjectDetail params={params} />;
}
