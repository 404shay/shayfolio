import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./lawmatics.png"
								alt="lawmatics"
								className="work-image"
							/>
							<div className="work-title">Lawmatics</div>
							<div className="work-subtitle">
								Deliverability Engineer & Postmaster
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./klaviyo.png"
								alt="klaviyo"
								className="work-image"
							/>
							<div className="work-title">Klaviyo</div>
							<div className="work-subtitle">
								Senior Deliverability & Compliance
							</div>
							<div className="work-duration">2022 - 2023 *RIF</div>	
						</div>
						
						<div className="work">
							<img
								src="./messagegears.png"
								alt="messagegears"
								className="work-image"
							/>
							<div className="work-title">MessageGears</div>
							<div className="work-subtitle">
								Deliverability Engineer
							</div>
							<div className="work-duration">2021-2022</div>
						</div>
						<div className="work">
							<img
								src="./mailchimp.png"
								alt="mailchimp"
								className="work-image"
							/>
							<div className="work-title">Mailchimp</div>
							<div className="work-subtitle">
								Compliance Analyst
							</div>
							<div className="work-duration">2018-2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
