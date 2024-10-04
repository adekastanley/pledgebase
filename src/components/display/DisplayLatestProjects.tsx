import { Progress } from "@/components/ui/progress";

const DisplayLatestProjects = () => {
	return (
		<div className=" bg-red-900 sm:grid grid-cols-3 lg:mx-20">
			<div className=" col-span-1">
				<div></div>
				<div>
					<h3>Title Of Project</h3>
					<div>
						<Progress value={70} />
					</div>
					<h4>Goal 70% Reached</h4>
				</div>
			</div>
		</div>
	);
};
export default DisplayLatestProjects;
