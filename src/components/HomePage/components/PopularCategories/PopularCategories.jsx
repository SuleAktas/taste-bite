import React from 'react';
import './PopularCategories.css';

function PopularCategories(props) {
	const getTitle = title => {
		return title.length > 7 ? title.substring(0, 6) + '...' : title;
	};

	return (
		<div className="category">
			<div className="category-image">
				<img src={props.image} alt={props.title}></img>
			</div>
			<div className="category-title">{getTitle(props.title)}</div>
		</div>
	);
}

export default PopularCategories;
