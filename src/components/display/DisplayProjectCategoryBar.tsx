import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";
import {
	Card,
	CardContent,
	// CardDescription,
	// CardFooter,
	// CardHeader,
	// CardTitle,
} from "@/components/ui/card";

import React from "react";
const projectList = [
	{
		link: "",

		cardText:
			"Find you next community project build a better tomorrow today, on base",
		cardCategory: "All Projects",
	},
	{
		link: "",

		cardText:
			"Find you next community project build a better tomorrow today, on base",
		cardCategory: "Health Porjects",
	},
	{
		link: "",

		cardText:
			"Find you next community project build a better tomorrow today, on base",
		cardCategory: "Education Projects",
	},
];
const DisplayProjectCategoryBar = () => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const isHandheld = useMediaQuery({
		query: "(max-width: 800px)",
	});
	return (
		<div className="  px-2 w-full flex justify-between flex-col items-center">
			<Carousel setApi={setApi} className=" w-[95%] sm:w-[80%] ">
				<CarouselContent>
					{projectList.map((item, index) => (
						<CarouselItem key={index}>
							<Card>
								<CardContent className="flex items-center flex-col-reverse sm:flex-row  p-6 h-full">
									{/* <span className="text-4xl font-semibold">{index + 1}</span> */}
									<div className="w-full flex flex-col gap-4  h-full">
										<div>top div</div>
										<p className="text-light">{item.cardText}</p>
										<p className="font-semibold">{item.cardCategory}</p>
									</div>
									<div className="w-full h-full bg-red-900 ">
										image container
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				{!isHandheld && (
					<>
						<CarouselPrevious />
						<CarouselNext />
					</>
				)}
			</Carousel>
			<div className="py-2 text-center text-sm text-muted-foreground">
				Slide {current} of {count}
			</div>
		</div>
	);
};

export default DisplayProjectCategoryBar;
