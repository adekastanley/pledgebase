import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import MyAccount from "@/pages/MyAccount";

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
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "/account",
				element: <MyAccount />,
			},
		],
	},
]);
export default routes;
