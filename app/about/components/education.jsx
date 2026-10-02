import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCertificate,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Me4 from "@/public/image/me4.jpeg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);

	const achievementsByYear = {
		2024: [
			{
				icon: faCertificate,
				title: "Guide to Learn SQL with AI",
				subtitle: "DQLab",
				date: "",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faCertificate,
				title: "Guide to Learn Python with AI",
				subtitle: "DQLab",
				date: "",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faCertificate,
				title: "Machine Learning with Python",
				subtitle: "Certification",
				date: "",
				color: "from-yellow-400 to-orange-500",
			},
			{
				icon: faCertificate,
				title: "Python 101 for Data Science",
				subtitle: "Certification",
				date: "",
				color: "from-yellow-400 to-orange-500",
			},
		],
		2023: [
			{
				icon: faCertificate,
				title: "Data Analysis Fundamental",
				subtitle: "MySkill",
				date: "",
				color: "from-amber-600 to-yellow-600",
			},
			{
				icon: faCertificate,
				title: "Mobile Experience",
				subtitle: "Google Skillshop",
				date: "",
				color: "from-amber-600 to-yellow-600",
			},
			{
				icon: faCertificate,
				title: "Belajar Dasar Visualisasi Data",
				subtitle: "Certification",
				date: "",
				color: "from-slate-400 to-slate-500",
			},
		],
	};

	// Flatten all achievements into a single array for easier limiting
	const allAchievements = Object.entries(achievementsByYear)
		.sort(([a], [b]) => parseInt(b) - parseInt(a))
		.flatMap(([year, achievements]) =>
			achievements.map((achievement) => ({ ...achievement, year }))
		);

	const visibleAchievements = isExpanded
		? allAchievements
		: allAchievements.slice(0, 6);
	const hasMoreAchievements = allAchievements.length > 6;

	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{" "}
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>
				{/* Main Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4">Fresh Graduate</div>
						<div>
							<h2 className="font-semibold text-xl">
								Universitas Islam Negeri Maulana Malik Ibrahim Malang
							</h2>
							<h3 className="text-md font-normal mb-3">
								S1 Teknik Informatika | Informatics Engineering
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me5}
										width={400}
										height={225}
										alt="Aulia Ilmi Maghfira Ridwan"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me4}
										width={400}
										height={225}
										alt="Aulia Ilmi Maghfira Ridwan"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me6}
										width={400}
										height={225}
										alt="Aulia Ilmi Maghfira Ridwan"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<p className="text-gray-600 text-justify title text-lg">
									I&rsquo;m a fresh graduate in{" "}
									<span className="text-black font-medium">
										Informatics Engineering
									</span>{" "}
									from{" "}
									<span className="text-black font-medium">
										UIN Maulana Malik Ibrahim Malang
									</span>
									, with a strong interest in{" "}
									<span className="text-black font-medium">
										data analysis, machine learning, and artificial intelligence
									</span>
									.
									<br />
									<br />
									During my studies I served as a{" "}
									<span className="text-black font-medium">
										lab assistant for Web Programming and Software Engineering
									</span>
									, completed the{" "}
									<span className="text-black font-medium">
										Kimia Farma Big Data Analytics
									</span>{" "}
									program with Rakamin Academy, and was active in the{" "}
									<span className="text-black font-medium">
										Himpunan Mahasiswa Teknik Informatika
									</span>{" "}
									as Public Relations.
									<br />
									<br />I adapt quickly to both team and individual work, and
									I enjoy turning data into insights that support better
									decisions.
								</p>
							</div>
						</div>
					</motion.div>{" "}
					{/* Certifications Section - Right */}
					<motion.div
						className="flex flex-col justify-start px-5 md:px-0"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<h2 className="font-semibold text-xl mt-7">Certifications</h2>
						<p className="text-md font-normal mb-3 md:mb-6">
							Courses and certifications I have completed.
						</p>

						{/* Achievements Container with transparent bottom effect */}
						<div className="relative">
							<div className="space-y-4">
								{/* Show visible achievements */}
								<AnimatePresence>
									{visibleAchievements.map((achievement, index) => (
										<motion.div
											key={`${achievement.year}-${index}`}
											className="group"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.5, delay: index * 0.05 }}>
											{/* Year indicator for first achievement of each year */}
											{index === 0 ||
											visibleAchievements[index - 1]?.year !==
												achievement.year ? (
												<div className="flex items-center gap-3 mb-3 mt-2">
													<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
														<span className="text-xs font-bold text-gray-600">
															{achievement.year}
														</span>
													</div>
													<div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
												</div>
											) : null}

											{/* Glassmorphism achievement card with monochrome to color effect */}
											<div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
												<div className="flex items-center gap-4">
													<div
														className={`aspect-square w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}>
														<FontAwesomeIcon
															icon={achievement.icon}
															className="text-white h-5 w-5"
														/>
													</div>
													<div>
														<h3 className="font-medium">{achievement.title}</h3>
														<p className="text-sm">{achievement.subtitle}</p>
														{achievement.date && (
															<div className="text-xs text-gray-500 mt-1">
																{achievement.date}
															</div>
														)}
													</div>
												</div>
											</div>
										</motion.div>
									))}
								</AnimatePresence>
							</div>

							{/* Transparent bottom overlay when not expanded */}
							{!isExpanded && hasMoreAchievements && (
								<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stale-300 via-stale/70 to-transparent pointer-events-none"></div>
							)}

							{/* Expand/Collapse Button */}
							{hasMoreAchievements && (
								<motion.div
									className="flex justify-center mt-6"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}>
									<button
										onClick={() => setIsExpanded(!isExpanded)}
										className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
										<span>
											{isExpanded
												? `Show Less`
												: `Show ${allAchievements.length - 6} More`}
										</span>
										<FontAwesomeIcon
											icon={isExpanded ? faChevronUp : faChevronDown}
											className="h-3 w-3 transition-transform duration-300"
										/>
									</button>
								</motion.div>
							)}
						</div>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}
