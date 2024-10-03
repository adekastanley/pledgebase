import { Outlet } from "react-router-dom";
import Index from "../navigation/Index";
const BaseLayout = () => {
	return (
		<div>
			<Index />
			<div>
				<Outlet />
			</div>
		</div>
	);
};
export default BaseLayout;
