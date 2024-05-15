import React from "react";

function article_1() {
	return {
		date: "9 November 2023",
		title: "An Introduction to Email Authentication for Legal Professionals",
		description:
			"Originally written for The Lawmatics Blog & subsequently picked up by the National Law Review.",
		keywords: [
			"Shay Paris",
			"Deliverability",
			"DMARC",
			"SPF",
			"DKIM",
			"Email Authentication",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "15 October 2023",
		title: "Understanding Domain and IP Reputation in Email Deliverability",
		description:
			"Originally written for The Lawmatics Blog & subsequently picked up by the National Law Review.",
		style: ``,
		keywords: [
			"Shay Paris",
			"Deliverability",
			"Sender Reputation",
			"Blocklist",
			"Blacklist",
			"Domain Reputation",
			"IP Reputation",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
