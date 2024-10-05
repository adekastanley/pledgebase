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

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { WalletComponents } from "../user/WalletComponent";
const leftNavLinks = [
	// {
	// 	title: "Projects",
	// 	link: "/projects",
	// },
	{
		title: "Success stories",
		link: "/success",
	},
	{
		title: "About",
		link: "/about",
	},
];
const leftProjectsLinks = [
	{
		title: "ALl Projects",
		link: "/projects",
		text: "find health related projects to support",
	},
	{
		title: "Health",
		link: "/projects",
		text: "find health related projects to support",
	},
	{
		title: "Education",
		link: "/projects",
		text: "find health related projects to support",
	},
	{
		title: "Community",
		link: "/projects",
		text: "find health related projects to support",
	},
	{
		title: "Social",
		link: "/projects",
		text: "find health related projects to support",
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

				<li className="">
					<Link to={"/projects"}>
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className="bg-transparent  font-semibold px-3 py-1 flex items-center rounded-sm">
										Projects
									</NavigationMenuTrigger>
									<NavigationMenuContent className="bg-none">
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
											{leftProjectsLinks.map((item, index) => (
												<li className="hover:bg-gray-100" key={index}>
													<Link className="" to={item.link}>
														<h6>{item.title}</h6>
														<span className="text-xs font-light">
															{item.text}
														</span>
													</Link>
												</li>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</Link>
				</li>
				{leftNavLinks.map((item, index) => (
					<li className="rounded-sm shadow-sm px-3 py-1 " key={index}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
			<div className="flex relative  items-center gap-2">
				<Button className="bg-black rounded-[24px] hover:text-black hover:outline hover:outline-2 hover:outline-black">
					<WalletComponents />
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
