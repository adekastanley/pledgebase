import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import DisplayProjects from "@/components/display/DisplayProjects";

const Projects = () => {
	return (
		<main className="min-h-screen bg-red-900 w-full pt-20 ">
			<section className="w-full ">
				<div className="flex w-full justify-end gap-1 sm:gap-2 px-2 ">
					<div className="w-full sm:w-[30%]">
						<Input placeholder="search" />
					</div>
					<div>
						<div>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Filter" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="light">All categories</SelectItem>
									<SelectItem value="dark">Education</SelectItem>
									<SelectItem value="system">Health</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				<div>
					<DisplayProjects />
				</div>
			</section>
		</main>
	);
};
export default Projects;
