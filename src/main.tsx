import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import routes from "./route/routes";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={routes} />
	</StrictMode>
);
