import { Outlet } from "react-router-dom";
import Index from "../navigation/Index";
import Footer from "../Footer";
const BaseLayout = () => {
	return (
		<div>
			<Index />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};
export default BaseLayout;
