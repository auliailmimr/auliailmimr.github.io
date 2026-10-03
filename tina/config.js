import { defineConfig } from "tinacms";

// Tina Cloud reads/writes content on this branch; GitHub Actions provides it during deploy
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.GITHUB_REF_NAME ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	token: process.env.TINA_TOKEN,

	build: {
		// Admin UI is published at /admin/
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "image/projects",
			publicFolder: "public",
		},
	},
	schema: {
		collections: [
			{
				name: "projects",
				label: "Projects",
				path: "json",
				format: "json",
				match: { include: "data" },
				ui: {
					// json/data.json is the only document; projects are edited as a list inside it
					allowedActions: { create: false, delete: false },
				},
				fields: [
					{
						type: "object",
						name: "Projects",
						label: "Projects",
						list: true,
						ui: {
							itemProps: (item) => ({ label: item?.title || "New project" }),
							defaultItem: {
								show: true,
								year: String(new Date().getFullYear()),
								category: ["2"],
							},
						},
						fields: [
							{
								type: "boolean",
								name: "show",
								label: "Show on Projects page",
								description: "Turn off to list the project only in the archive.",
							},
							{ type: "string", name: "title", label: "Title", required: true },
							{
								type: "string",
								name: "slug",
								label: "Slug",
								description:
									"URL name, e.g. emotion-detection. Lowercase, numbers, and dashes only. Must be unique.",
								required: true,
							},
							{
								type: "string",
								name: "desc",
								label: "Description paragraphs",
								list: true,
								// One textarea per paragraph (a plain "textarea" component would join the list)
								ui: { component: "list", field: { component: "textarea" } },
							},
							{ type: "string", name: "year", label: "Year" },
							{ type: "string", name: "tech", label: "Technologies", list: true },
							{
								type: "string",
								name: "category",
								label: "Categories",
								list: true,
								options: [
									{ value: "1", label: "Data Analysis" },
									{ value: "2", label: "AI & Machine Learning" },
									{ value: "3", label: "Web Development" },
									{ value: "9", label: "Other" },
								],
								ui: { component: "checkbox-group" },
							},
							{ type: "string", name: "code", label: "Source code URL (GitHub)" },
							{ type: "string", name: "preview", label: "Live demo URL" },
							{ type: "image", name: "thumbnail", label: "Thumbnail" },
							{ type: "image", name: "images", label: "Gallery images", list: true },
							{
								type: "object",
								name: "screens",
								label: "Website preview pages",
								description:
									"Full-page screenshots shown in a scrollable browser frame, one tab per page.",
								list: true,
								ui: { itemProps: (item) => ({ label: item?.label }) },
								fields: [
									{ type: "string", name: "label", label: "Tab label", required: true },
									{ type: "string", name: "url", label: "Address bar text" },
									{ type: "image", name: "image", label: "Full-page screenshot", required: true },
								],
							},
						],
					},
				],
			},
		],
	},
});
