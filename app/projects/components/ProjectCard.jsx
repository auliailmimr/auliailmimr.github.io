import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";

// Cards share one fixed height, so the tech list is capped to keep it on screen.
const MAX_TECH = 3;

export default function ProjectCard({ project, index, activeCategory }) {
	const shownTech = project.tech.slice(0, MAX_TECH);
	const hiddenTech = project.tech.length - shownTech.length;

	return (
		<>
			{project.category.map(Number).includes(Number(activeCategory)) && (
				<Link href={"/projects/" + project.slug} key={index} className="block">
					<motion.div
						className="z-10 relative flex justify-center items-center flex-col w-full h-[26rem] md:h-[24rem] xl:h-[26rem] overflow-hidden bg-gray-400 group/tes px-6 pt-14 pb-8 md:px-10"
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							type: "spring",
						}}>
						<Image
							src={project.thumbnail}
							alt={project.title}
							fill
							placeholder="blur"
							className="object-cover bg-slate-950 opacity-10  group-hover/tes:opacity-100 transition-all ease duration-500"
							blurDataURL={BlurImage.src}
						/>
						<div className="absolute top-0 left-0 bg-gray-600 px-4 py-2">
							<h4 className="text-white">{project.year}</h4>
						</div>
						<div className="transition-all ease duration-500 opacity-100 content text-center group-hover/tes:opacity-0 z-10 w-full">
							<h1 className="text-2xl md:text-3xl font-bold mb-3 line-clamp-2">
								{project.title}
							</h1>
							<p className="line-clamp-3">{project.desc[0]}</p>
							<div className="flex justify-center items-center flex-row mt-5 flex-wrap">
								{shownTech.map((t, index) => (
									<span
										key={index}
										className="m-1 px-4 py-2 bg-gray-600 text-white ">
										{t}
									</span>
								))}
								{hiddenTech > 0 && (
									<span className="m-1 px-4 py-2 bg-gray-600 text-white ">
										+{hiddenTech}
									</span>
								)}
							</div>
						</div>
					</motion.div>
				</Link>
			)}
		</>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};
