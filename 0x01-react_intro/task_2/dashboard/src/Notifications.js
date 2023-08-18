import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
	const handleClick = () => {
		console.log("Close button has been clicked");
	};

	return (
		<div className="Notifications">
		{/* ... other elements ... */}
		<button
		style={{float: 'right', fontWeight:'bold',
			    background:'none', border:'none', fontSize:'15px',
			    position:'absolute' }}
		aria-label="Close"
		onClick={handleClick}
		>

		<img src={closeIcon} alt="Close" />
		</button>
		{/* ... rest of the content ... */}
		<p>Here is the list of notifications</p>
		<ul>
		<li data-priority="default">New course available</li>
		<li data-priority="urgent">New resume available</li>
		<li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
		</ul>
		</div>
	);
}


export default Notifications;

