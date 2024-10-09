import DisplayProjectCard from "./DisplayProjectCard";
import projectsData from "@/data/projects";
const DisplayProjects = () => {
	return (
		<div className="w-full flex flex-col sm:grid sm:grid-cols-3 gap-2 lg:grid-cols-4 px-2 sm:px-5 lg:px-20">
			{projectsData.map((project) => (
				<DisplayProjectCard
					key={project.id}
					id={project.id}
					projectImage={project.projectImage}
					projectCategory={project.projectCategory}
					projectGoalReached={project.projectGoalReached}
					projectTitle={project.projectTitle}
					projectDescription={project.projectDescription}
				/>
			))}
		</div>
	);
};
export default DisplayProjects;
