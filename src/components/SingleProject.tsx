import schoolsImages from "@/assets/images";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const SingleProject = () => {
	return (
		<div className=" col-span-1 flex justify-center py-2 px-2 ">
			<Link to={"/"}>
				<div className="flex flex-col  rounded-xl ">
					<div>
						<img
							className="aspect-square w-full sm:w-[20rem] rounded-t-xl"
							src={schoolsImages[0]}
							alt=""
						/>
					</div>
					<div className="text-black bg-white rounded-b-xl flex flex-col gap-2 py-2 px-2">
						<h3>Title Of Project</h3>
						<div className="bg-gray-300 rounded">
							<Progress color="text-red-900" value={70} className="" />
						</div>
						<h4>Goal 70% Reached</h4>
					</div>
				</div>
			</Link>
		</div>
	);
};
export default SingleProject;
