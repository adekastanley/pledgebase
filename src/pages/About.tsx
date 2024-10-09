const About = () => {
	return (
		<main className="flex flex-col justify-center pt-20 px-1 sm:px-10 lg:px-20">
			<h1 className="text-center text-3xl">Welcome to CrowdBase!</h1>

			<div>
				<p>
					This platform is a proof of concept, showcasing my journey into the
					world of blockchain technology. Built with React, TypeScript,
					OnchainKit, and Wagmi, this site is designed to demonstrate how
					blockchain can be used to create a transparent and secure environment
					for fundraising initiatives. It is not yet a full-fledged application
					but a stepping stone toward something greater
				</p>
				<p>
					As I continue to learn and expand my skills, I plan to enhance and
					refine this project. My goal is to create a platform that enables
					communities to come together and support meaningful projects, ranging
					from health and education to social and community development.
				</p>
				<p>
					Instead of shelving the idea due to limitations, I decided to present
					it in its current state, believing that even as a proof of concept, it
					highlights a practical and valuable use case for blockchain
					technology. Although i was not able to add the functionalities id have
					liked too due to my lack of time and knowledge, i decide to still
					submit this and at least let people know about the idea
				</p>
			</div>

			<div>
				<h2>How It Works:</h2>
				<ol className="list-disc pl-5">
					<li>
						User Authentication: Users can sign up and connect their Base or
						Ethereum wallets to interact with the site.
					</li>
					<li>
						Project Listings: Projects are displayed as cards, each containing
						essential details like title, description, and funding goals.
					</li>
					<li>
						Dynamic Navigation: Clicking on a project displays its full details,
						including the funds raised and how they will be used.
					</li>
					<li>
						Blockchain Integration: Transactions are handled on-chain, ensuring
						transparency and security for every donation.
					</li>
				</ol>
			</div>
			<div>
				<p>
					Pledge Base is just the beginning. I look forward to building more
					sophisticated features as I delve deeper into the intricacies of
					blockchain technology. Your support and feedback are invaluable as I
					continue this learning journey.
				</p>
				<p>
					Thank you for being part of this proof of concept and for believing in
					the vision of a decentralized platform for positive change.
				</p>
			</div>
		</main>
	);
};
export default About;
