// "Global Causes, Local Impact"
import { BsChevronDoubleDown } from "react-icons/bs";

const Hero = () => {
	return (
		<div className="min-h-[100vh] bg-white flex  bg-[url('./src/assets/18.jpg')]  flex-col items-center relative bg-[] bg-cover bg-left-bottom ">
			<div className="   flex justify-center w-full  items-center  sm:px-20 pt-[10rem] sm:pt-[15rem] ">
				<div className="w-full flex flex-col justify-center items-center px-1 h-full ">
					<h1 className=" uppercase  font-bold text-[3.5rem] lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-purple-500">
						CrowdBase
					</h1>
					<h2 className="font-semibold text-base text-primary pl-2 sm:pl-4 text-center w-full ">
						Building a Better Tomorrow Together
					</h2>
				</div>
				{/* <div className="w-full h-full flex items-center">
					<img src={images.hero} className="w-full" alt="" />
				</div> */}
			</div>
			<div className="absolute bottom-20 ">
				<BsChevronDoubleDown size={20} className="" />
			</div>
		</div>
	);
};
export default Hero;
