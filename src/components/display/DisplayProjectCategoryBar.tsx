const projectList = [
	{
		link: "",
		title: "Education",
	},
	{
		link: "",
		title: "Health",
	},
	{
		link: "",
		title: "housing",
	},
];
const DisplayProjectCategoryBar = () => {
	return (
		<ul className="bg-red-900 flex gap-3 px-10 py-3 min-h-10 items-center overflow-auto ">
			{projectList.map((project, index) => (
				<li
					key={index}
					className="bg-green-900 px-10 py-1 sm:py-3 rounded-[24px] text-sm sm:text-base uppercase"
				>
					{project.title}
				</li>
			))}
		</ul>
	);
};

export default DisplayProjectCategoryBar;
