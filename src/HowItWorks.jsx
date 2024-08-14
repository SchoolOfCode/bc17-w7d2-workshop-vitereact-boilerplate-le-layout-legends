import Tile from "./Tile";

let tileInfo = [
	{
		image:
			"https://raw.githubusercontent.com/SchoolOfCode/frontend-eng-example/main/images/how-it-works-1.png",
		alt: "Phone call illustration",
		title: "Give us a call...",
		description: "Call us and book in a Design Consultation on a date and time that suits you."
	},
	{
		image:
			"https://raw.githubusercontent.com/SchoolOfCode/frontend-eng-example/main/images/how-it-works-2.png",
		alt: "Home visit illustration",
		title: "We come to you...",
		description:
			"We come to your home to do an assessment of the space and to your style preference."
	},
	{
		alt: "Fireplace recommendation illustration",
		title: "We recommend...",
		description: "We send you a bespoke set of fireplace recommendations.",
		image:
			"https://raw.githubusercontent.com/SchoolOfCode/frontend-eng-example/main/images/how-it-works-3.png"
	}
];

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="how-it-works-section">
			<h2 className="how-it-works-text">How It Works</h2>
			<div className="tiles">
				{tileInfo.map(({ image, title, description, alt }) => {
					return <Tile image={image} title={title} description={description} alt={alt} />;
				})}
			</div>
		</section>
	);
}
