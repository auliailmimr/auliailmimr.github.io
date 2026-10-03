"use client";
import { useRef, useState } from "react";

// Browser-style frame that shows a full-page screenshot the visitor can scroll,
// with one tab per page of the website
function WebsitePreview({ screens, title }) {
	const [active, setActive] = useState(0);
	const viewportRef = useRef(null);
	const screen = screens[active];

	const selectScreen = (index) => {
		setActive(index);
		if (viewportRef.current) viewportRef.current.scrollTop = 0;
	};

	return (
		<div className="w-full max-w-6xl mx-auto">
			<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 mb-5">
				Website Preview
			</h2>
			{screens.length > 1 && (
				<div className="flex flex-wrap gap-2 mb-4" role="tablist">
					{screens.map((item, index) => (
						<button
							key={item.image}
							type="button"
							role="tab"
							aria-selected={index === active}
							onClick={() => selectScreen(index)}
							className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
								index === active
									? "bg-neutral-900 text-white border-neutral-900"
									: "bg-white text-neutral-600 border-neutral-300 hover:border-neutral-900"
							}`}>
							{item.label}
						</button>
					))}
				</div>
			)}
			<div className="rounded-xl overflow-hidden border border-neutral-200 shadow-2xl bg-white">
				<div className="flex items-center gap-3 px-4 py-3 bg-neutral-100 border-b border-neutral-200">
					<div className="flex gap-1.5 shrink-0">
						<span className="h-3 w-3 rounded-full bg-red-400" />
						<span className="h-3 w-3 rounded-full bg-yellow-400" />
						<span className="h-3 w-3 rounded-full bg-green-400" />
					</div>
					<div className="flex-1 min-w-0 rounded-md bg-white px-3 py-1 text-sm text-neutral-500 truncate">
						{screen.url || screen.label}
					</div>
				</div>
				<div
					ref={viewportRef}
					className="h-[70vh] overflow-y-auto overscroll-contain bg-white">
					{/* Full-page screenshots have varying heights, so a plain img keeps their natural size */}
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						key={screen.image}
						src={screen.image}
						alt={`${title}, ${screen.label} page`}
						className="block w-full h-auto"
					/>
				</div>
			</div>
			<p className="mt-3 text-sm text-neutral-400 text-center">
				Scroll inside the window to see the full page.
			</p>
		</div>
	);
}

export default WebsitePreview;
