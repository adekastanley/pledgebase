import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";
// import { WalletComponents } from "../user/WalletComponent";

// wallet
import {
	ConnectWallet,
	Wallet,
	WalletDropdown,
	WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Address, Avatar, Name, Identity } from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Define the type for each menu item
type MenuLink = {
	title: string;
	link: string;
	text: string;
};

// Define the menu links array
const menuLinks: MenuLink[] = [
	{
		title: "All Projects",
		link: "/projects",
		text: "Find health-related projects to support",
	},
	{
		title: "Health",
		link: "/projects",
		text: "Find health-related projects to support",
	},
	{
		title: "Education",
		link: "/projects",
		text: "Find health-related projects to support",
	},
	{
		title: "Community",
		link: "/projects",
		text: "Find health-related projects to support",
	},
	{
		title: "Social",
		link: "/projects",
		text: "Find health-related projects to support",
	},
];

const Mobile: React.FC = () => {
	const [open, setOpen] = React.useState(false);

	const container = useRef<HTMLElement | null>(null);
	const overlayRef = useRef<HTMLDivElement | null>(null);
	const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

	// Animation timeline reference
	const tl = useRef<gsap.core.Timeline | null>(null);

	// State to control menu open/close
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	// Toggle the menu open/close state
	const toggleNav = () => {
		setIsMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		if (!overlayRef.current || menuItemsRef.current.length === 0) return;

		// Set initial states for the menu items and overlay
		gsap.set(overlayRef.current, {
			clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 0)",
		});
		gsap.set(menuItemsRef.current, { y: 75, opacity: 0 });

		// Create the animation timeline
		tl.current = gsap
			.timeline({ paused: true })
			.to(overlayRef.current, {
				duration: 1.25,
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
				ease: "power4.inOut",
			})
			.to(
				menuItemsRef.current,
				{
					y: 0,
					opacity: 1,
					duration: 0.75,
					stagger: 0.1,
					ease: "power4.inOut",
				},
				"-=0.75"
			);
	}, []);

	useEffect(() => {
		if (tl.current) {
			if (isMenuOpen) {
				tl.current.play();
			} else {
				tl.current.reverse();
			}
		}
	}, [isMenuOpen]);

	return (
		<header ref={container} className="fixed  w-full z-10   ">
			<div className="!container  w-full flex items-center justify-between py-4 px-6   z-[20]  ">
				<div className="text-black font-bold text-lg">LOGO</div>
				<div className="flex items-center gap-2">
					{/* <Button size={"sm"}>
						<WalletComponents />
					</Button> */}
					<Dialog open={open} onOpenChange={setOpen}>
						<DialogTrigger asChild>
							<Button variant="outline"> Wallet</Button>
						</DialogTrigger>
						<DialogContent className="w-auto">
							<WalletComponents />
						</DialogContent>
					</Dialog>
					<button onClick={toggleNav} className="text-black">
						{isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
					</button>
				</div>
			</div>
			<div
				ref={overlayRef}
				className="menu-overlay fixed top-0 left-0 w-full h-full bg-yellow-400 z-10 overflow-hidden"
			>
				<ul className="h-full flex flex-col items-center justify-center gap-8">
					{menuLinks.map((item, index) => (
						<li
							key={index}
							className="menu-link-item text-2xl text-black hover:text-red-500 cursor-pointer"
							ref={(el) => (menuItemsRef.current[index] = el)}
						>
							{item.title}
						</li>
					))}
				</ul>
			</div>

			{/* <ul className="fixed bottom-0 w-full flex  px-2 items-center justify-between h-[3rem] text-white bg-black">
				<li>Projects</li>
				<li> Stories</li>
				<li>Account</li>
			</ul> */}
		</header>
	);
};

export default Mobile;

export function WalletComponents() {
	return (
		<div className="flex justify-end ">
			<Wallet className="">
				<ConnectWallet>
					<Avatar className="h-6 w-6" />
					<Name />
				</ConnectWallet>
				<WalletDropdown className="bg-black">
					<Identity className="px-4 pt-3 pb-2 " hasCopyAddressOnClick>
						<Avatar className="shadow-sm mx-1 border-2 border-primary " />
						<Name className=" my-1" />
						<Address className={""} />
						<Address className={color.foregroundMuted} />
					</Identity>
					<WalletDropdownDisconnect className="bg-red-500 text-white  text-center w-full pl-10 pb-2 rounded  " />
				</WalletDropdown>
			</Wallet>
		</div>
	);
}
