// "Global Causes, Local Impact"
import { BsChevronDoubleDown } from "react-icons/bs";
import { images } from "@/assets/images";

const Hero = () => {
	return (
		<div className="min-h-[80vh] bg-white flex  flex-col items-center relative bg-[] bg-cover bg-left-bottom ">
			<div className="   flex flex-col sm:flex-row w-full  items-center sm:px-20 pt-20 ">
				<div className="w-full flex flex-col justify-center sm:items-center px-1 h-full ">
					<h1 className="font-bold uppercase text-5xl lg:text-9xl">
						CrowdBase
					</h1>
					<h2 className="font-semibold text-xl pl-2 sm:pl-4 text-start w-full ">
						Building a Better Tomorrow Together
					</h2>
				</div>
				<div className="w-full h-full flex items-center">
					<img src={images.hero} className="w-full" alt="" />
				</div>
			</div>
			<div className="absolute bottom-20 ">
				<BsChevronDoubleDown size={20} className="" />
			</div>
		</div>
	);
};
export default Hero;
