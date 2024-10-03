import { Button } from "../ui/button";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const leftNavLinks = [
	{
		title: "Projects",
		link: "/projects",
	},
	{
		title: "Success stories",
		link: "/success",
	},
	{
		title: "About",
		link: "/about",
	},
];
const Pc = () => {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious() ?? 0;

		if (latest > previous && latest > 200) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});
	return (
		<motion.header
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			className="flex justify-between px-20 fixed  w-full  py-5 z-10"
		>
			<ul className="flex  text-white gap-2 py-2  font-semibold  items-center px-16 rounded-[24px] bg-black shadow-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100">
				<li className=" shadow-lg px-3 py-1 flex items-center rounded-sm justify-center">
					<Link to={"/"}>Logo</Link>
				</li>
				{leftNavLinks.map((item, index) => (
					<li className="rounded-sm shadow-sm px-3 py-1 " key={index}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
			<div className="flex relative  items-center gap-2">
				<Button className="bg-black rounded-[24px] hover:text-black hover:outline hover:outline-2 hover:outline-black">
					Connect Wallet
				</Button>
				<div className=" ">
					<DropdownMenu>
						<DropdownMenuTrigger className="">
							<FaBars size={32} className="outline-0 border-none" />
						</DropdownMenuTrigger>
						<DropdownMenuContent className="">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>How It Works</DropdownMenuItem>
							<DropdownMenuItem>Contact</DropdownMenuItem>
							<DropdownMenuItem>Blog</DropdownMenuItem>
							<DropdownMenuItem>FAQ</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</motion.header>
	);
};
export default Pc;
