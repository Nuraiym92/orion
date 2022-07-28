import React from 'react'

function MainContacts(props) {
	return (
		<div className='mainContacts'>
			<h3>{props.contactTitle}</h3>
			<h3>{props.contactSubtitle}</h3>
			<p>{props.contactName}</p>
			<address>{props.contactAddress}</address>
			<a href={`tomail:${props.contactEmail}`}>{props.contactEmail}</a>
			<a href={`tel:${props.contactPhone}`}>{props.contactPhone}</a>

		</div>
	)
}

export default MainContacts;
