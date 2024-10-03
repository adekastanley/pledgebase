import { Outlet } from "react-router-dom";
const BaseLayout = () => {
	return (
		<div>
			BaseLayout
			<div>
				<Outlet />
			</div>
		</div>
	);
};
export default BaseLayout;
