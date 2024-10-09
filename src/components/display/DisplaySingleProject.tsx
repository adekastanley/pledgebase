import { Button } from "../ui/button";

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
		<main className="project-detail relative  w-full   flex flex-col lg:flex-row pt-20 sm:pt-[6rem] gap-2 px-2">
			<div className="w-full  lg:w-[30%] flex flex-col gap-1">
				<img
					className="w-full "
					src={project.projectImage}
					alt={project.projectTitle}
				/>
				<h3 className="font-bold">Category: {project.projectCategory}</h3>
				<p>Goal Reached: {project.projectGoalReached}%</p>
				<div className="w-full">
					<Button>Fund Project</Button>
				</div>
			</div>
			<div className="w-full">
				<h1 className="text-3xl font-bold">{project.projectTitle}</h1>

				<p className="">{project.projectDescription}</p>
				<p>
					Problem Statement: Access to clean and safe drinking water remains a
					significant challenge for many rural communities in Africa.
					Contaminated water sources are the leading cause of waterborne
					diseases such as cholera, typhoid, and diarrhea, which
					disproportionately affect children and the elderly. These diseases
					contribute to high mortality rates and hinder the overall health and
					productivity of the community. Many villagers, especially women and
					children, spend hours each day fetching water from distant and often
					polluted sources, reducing their opportunities for education and
					income-generating activities.
				</p>
				<p>
					Project Plan and Fund Allocation: This project seeks to address the
					urgent need for clean drinking water by implementing a sustainable
					water purification and distribution system. With the funds raised, we
					will:
				</p>
				<ol className="list-decimal pl-5">
					<li>
						Install Water Purification Systems: Purchase and install
						purification units in key locations within the village to treat
						contaminated water, making it safe for consumption.
					</li>
					<li>
						Construct Wells and Boreholes: Drill new wells and boreholes to
						access underground water, which will be treated using the
						purification systems.
					</li>
					<li>
						Build Storage and Distribution Facilities: Set up storage tanks and
						a simple distribution network to ensure a continuous supply of clean
						water.
					</li>
					<li>
						Community Training and Ownership: Conduct training workshops for
						local residents on how to maintain and operate the systems. This
						will ensure that the community takes ownership and can manage the
						systems independently.
					</li>
				</ol>
				<p>
					Impact and Appeal: By contributing to this project, donors will help
					save countless lives and transform the quality of life in these
					communities. Access to clean water will not only reduce waterborne
					diseases but also enable women and children to focus on education and
					other productive activities. We believe that a modest donation can
					have a lasting impact on the health and future of these communities.
					Join us in making clean water a reality for everyone!
				</p>
			</div>
		</main>
	);
};

export default DisplaySingleProject;
