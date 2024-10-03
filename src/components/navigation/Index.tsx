import Pc from "./Pc";
import Mobile from "./Mobile";
import { useEffect, useState } from "react";
const Index = () => {
	const [isHandHeld, setIsHandHeld] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setIsHandHeld(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return <>{isHandHeld > 1100 ? <Pc /> : <Mobile />}</>;
};
export default Index;
