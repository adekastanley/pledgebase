import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";

import BaseLayout from "@/components/layout/BaseLayout";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "",
				element: <LandingPage />,
			},
		],
	},
]);
export default routes;
