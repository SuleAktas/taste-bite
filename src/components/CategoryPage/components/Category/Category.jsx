import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

function Category(props) {
	return (
		<div className="category-box">
			<div className="ctg-image">
				<img src={props.image} alt={props.title}></img>
			</div>
			<Link
				to={{
					pathname: '/recipes',
					search: `?name=${props.title}`,
				}}
				className="link-without-decoration"
			>
				<div className="ctg-title">{props.title}</div>
			</Link>
		</div>
	);
}

export default Category;
