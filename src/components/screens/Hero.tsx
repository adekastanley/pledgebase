// "Global Causes, Local Impact"
import { BsChevronDoubleDown } from "react-icons/bs";
const Hero = () => {
	return (
		<div className="min-h-[100vh] flex justify-center  relative bg-[url('src/assets/hands.jpg')] bg-cover">
			<div className="mt-[10rem] lg:mt-[14rem] text-center">
				<h1 className="font-bold text-5xl sm:text-7xl lg:text-9xl uppercase ">
					{/* PledgeBase */}
					CrowdBase
				</h1>
				<h2 className="font-semibold">Building a Better Tomorrow Together</h2>
			</div>
			<div className="absolute bottom-20 ">
				<BsChevronDoubleDown size={20} className="" />
			</div>
		</div>
	);
};
export default Hero;
