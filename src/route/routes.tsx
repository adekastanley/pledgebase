import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import MyAccount from "@/pages/MyAccount";

import Projects from "@/pages/Projects";

import BaseLayout from "@/components/layout/BaseLayout";

import DisplaySingleProject from "@/components/display/DisplaySingleProject";

import About from "@/pages/About";

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
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "/projects",
				element: <Projects />,
			},
		],
	},
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "/about",
				element: <About />,
			},
		],
	},
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "/projects/project/:id",
				element: <DisplaySingleProject />,
			},
		],
	},
]);
export default routes;
