// import React from "react";
// import { useParams } from "react-router-dom"; // React Router for dynamic routing
// import projectsData from "@/data/projects";

// const DisplaySingleProject: React.FC = () => {
// 	const { id } = useParams<{ id: string }>(); // Get the project ID from the URL
// 	const project = projectsData.find((proj) => proj.id === parseInt(id)); // Find the project by ID

// 	if (!project) {
// 		return <p>Project not found</p>;
// 	}

// 	return (
// 		<div className="project-detail">
// 			<h1>{project.projectTitle}</h1>
// 			<img src={project.projectImage} alt={project.projectTitle} />
// 			<p>{project.projectDescription}</p>
// 			<p>Category: {project.projectCategory}</p>
// 			<p>Goal Reached: {project.projectGoalReached}</p>
// 		</div>
// 	);
// };

// export default DisplaySingleProject;
import React from "react";
import { useParams } from "react-router-dom"; // React Router for dynamic routing
import projectsData from "@/data/projects";

const DisplaySingleProject: React.FC = () => {
	const { id } = useParams<{ id: string }>(); // Get the project ID from the URL

	// Convert `id` to a number before using it in the find method
	const project = projectsData.find((proj) => proj.id === Number(id));

	if (!project) {
		return <p>Project not found</p>;
	}

	return (
		<div className="project-detail">
			<h1>{project.projectTitle}</h1>
			<img src={project.projectImage} alt={project.projectTitle} />
			<p>{project.projectDescription}</p>
			<p>Category: {project.projectCategory}</p>
			<p>Goal Reached: {project.projectGoalReached}</p>
		</div>
	);
};

export default DisplaySingleProject;
