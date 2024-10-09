// "Global Causes, Local Impact"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

//@ts-ignore
const DisplayLoader = (props) => {
	gsap.registerPlugin(useGSAP);

	const container = useRef();

	useGSAP(
		() => {
			const tl = gsap.timeline();

			// tl.from(".loadImg img ", {
			// 	opacity: 0,
			// 	y: 100,
			// 	stagger: 0.5,
			// 	onComplete: () => {
			// 		gsap.set(".loadImg", { display: "none" }); // Add this line
			// 	},
			// }),
			tl.from(".intro span ", {
				opacity: 0,
				x: 100,
				stagger: 0.2,
				delay: 1,
				onComplete: () => {
					props.setIsLoaded(true);
				},
			}),
				{};
		},
		{ scope: container }
	);

	return (
		<div
			//@ts-ignore
			ref={container}
			className="min-h-[100vh] w-full z-[100] fixed flex flex-col justify-start items-center "
		>
			{/* <div className=" loadImg w-[100vw]     flex bg-red-900  justify-center">
				{girls.map((_, index) => {
					return (
						<img
							className="w-[90%]  absolute  sm:w-[30rem] top-[10rem] aspect-square"
							key={index}
							src={girls[index]}
							alt="image"
						/>
					);
				})}
			</div> */}

			<p className="intro font-bold text-7xl  sm:text-9xl flex text-start  w-full justify-start  mt-[10rem]  flex-col  items-center pl-4 sm:pl-10">
				<span className="w-full ">Global</span>
				<span className="w-full ">Cause</span>
				<span className="w-full ">Local</span>
				<span className="w-full ">Impact</span>
			</p>
		</div>
	);
};
export default DisplayLoader;
