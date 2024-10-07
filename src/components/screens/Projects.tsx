import DisplayProjectCategoryBar from "../display/DisplayProjectCategoryBar";
import DisplayLatestProjects from "../display/DisplayLatestProjects";
const Projects = () => {
	return (
		<div className="min-h-[100dvh] mt-[5rem] ">
			<div>
				<DisplayProjectCategoryBar />
			</div>
			<div className=" mt-10 sm:mt-[5rem]">
				<h2 className="text-xl">Latest Projects</h2>
				<DisplayLatestProjects />
			</div>
		</div>
	);
};
export default Projects;
