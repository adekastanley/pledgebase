import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import routes from "./route/routes";
import { Providers } from "./services/Providers";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<RouterProvider router={routes} />
		</Providers>
	</StrictMode>
);
