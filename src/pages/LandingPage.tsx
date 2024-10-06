import Hero from "@/components/screens/Hero";
import Projects from "@/components/screens/Projects";

const LandingPage = () => {
	return (
		<main>
			<section>
				<Hero />
			</section>

			<section className="lg:mx-[5rem]  ">
				<Projects />
			</section>
		</main>
	);
};
export default LandingPage;
