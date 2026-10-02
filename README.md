# Aulia Ilmi Maghfira Ridwan | Portfolio

Personal portfolio website of **Aulia Ilmi Maghfira Ridwan**, an Informatics Engineering graduate from UIN Maulana Malik Ibrahim Malang and an AI & Machine Learning enthusiast.

Built with Next.js, Tailwind CSS, Framer Motion, and Fullpage.js. The site has four main sections (Home, About, Projects, Contact), plus a project archive and project detail pages.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Getting Started

1. Install dependencies:

   ```shell
   npm install
   ```

2. Start the development server:

   ```shell
   npm run dev
   ```

3. Build the static site (output goes to `out/`):

   ```shell
   npm run build
   ```

## Deployment

The site is hosted on GitHub Pages at https://auliailmimr.github.io. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the static export and publishes it. In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

## Adding a Project

### With the admin (TinaCMS)

Open https://auliailmimr.github.io/admin/ and log in with Tina Cloud. Go to **Projects → data**, click **+** to add a project, upload images, and click **Save**. Tina commits the change to `main`, and GitHub Actions redeploys the site in about a minute.

To use the admin locally, run `npm run dev` and open http://localhost:3000/admin/index.html. Local edits are saved straight to `json/data.json`.

The admin needs two repository secrets (Settings → Secrets and variables → Actions) from your Tina Cloud project: `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`. Without them the site still deploys, just without `/admin`.

### By hand

Projects are read from `json/data.json`. Put images in `public/image/projects/<slug>/` and add an entry:

```json
{
  "show": true,
  "title": "Project title",
  "desc": ["First paragraph.", "Second paragraph."],
  "year": "2026",
  "preview": "https://link-to-demo (optional)",
  "code": "https://github.com/auliailmimr/repo (optional)",
  "thumbnail": "/image/projects/<slug>/thumbnail.jpg",
  "images": ["/image/projects/<slug>/1.png"],
  "tech": ["Python", "Scikit-learn"],
  "slug": "project-slug",
  "category": ["1"]
}
```

Categories: `"1"` Data Analysis, `"2"` AI & Machine Learning, `"9"` Other. Set `"show": false` to list a project only in the archive.

The sitemap is regenerated automatically during deployment. At least one project must exist in `json/data.json`, because the static export needs a page for every project slug.

## Credits

This site is based on the open-source [Alvalens portfolio template](https://github.com/Alvalens/Alvalens-porto-2-nextJs) by Alvalen Shafelbilyunazra, licensed under GPL-3.0. All personal content, images, and data have been replaced with my own.

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.

Copyright (C) 2025 Alvalen Shafelbilyunazra
Modifications Copyright (C) 2026 Aulia Ilmi Maghfira Ridwan
