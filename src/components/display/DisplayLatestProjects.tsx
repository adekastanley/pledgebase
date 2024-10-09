import SingleProject from "../SingleProject";

const DisplayLatestProjects = () => {
	return (
		<div className="   flex flex-col items-center justify-center  sm:grid sm:grid-cols-3 lg:grid-cols-5">
			{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
				return <SingleProject key={item} />;
			})}
		</div>
	);
};
export default DisplayLatestProjects;
