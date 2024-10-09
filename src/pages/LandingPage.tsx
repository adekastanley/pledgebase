import Hero from "@/components/screens/Hero";
import Projects from "@/components/screens/Projects";
import DisplayLoader from "@/components/display/DisplayLoader";
import { useState } from "react";

const LandingPage = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			{!isLoaded && <DisplayLoader setIsLoaded={setIsLoaded} />}
			{isLoaded && (
				<main className="bg-gray-100">
					<section className="">
						<Hero />
					</section>

					<section className="lg:mx-[5rem] mt-[5rem] ">
						<Projects />
					</section>
				</main>
			)}
		</>
	);
};

export default LandingPage;
