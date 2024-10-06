import DisplayProjectCategoryBar from "../display/DisplayProjectCategoryBar";
import DisplayLatestProjects from "../display/DisplayLatestProjects";
const Projects = () => {
	return (
		<div className="min-h-[100dvh]  ">
			<div>
				<DisplayProjectCategoryBar />
			</div>
			<DisplayLatestProjects />
		</div>
	);
};
export default Projects;
