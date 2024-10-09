import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

type ProjectProps = {
	id: number;
	projectImage: string;
	projectCategory: string;
	projectGoalReached: string;
	projectTitle: string;
	projectDescription: string;
};
const DisplayProjectCard: React.FC<ProjectProps> = ({
	id,
	projectImage,

	projectGoalReached,
	projectTitle,
}) => {
	return (
		<div className="w-full flex-grow  col-span-1 flex justify-center py-2  ">
			<Link className="w-full" to={`/projects/project/${id}`}>
				<div className="flex flex-col  rounded-xl ">
					<div>
						<img
							className="aspect-square w-full  rounded-t-xl"
							src={projectImage}
							alt=""
						/>
					</div>
					<div className="text-black bg-white rounded-b-xl w-full  flex flex-col gap-2 py-2 px-2">
						<h3 className="w-full ">{projectTitle}</h3>
						<div className="bg-gray-300 rounded">
							<Progress value={Number(projectGoalReached)} />
						</div>
						<h4 className="w-full">Goal {projectGoalReached}% Reached</h4>
					</div>
				</div>
			</Link>
		</div>
	);
};
export default DisplayProjectCard;
