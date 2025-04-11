import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './RatedRecipe.css';
import { Link } from 'react-router-dom';

function RatedRecipe(props) {
	const [stars, setStars] = useState(1);

	useEffect(() => {
		setStars(Math.floor(Math.random() * 5) + 1);
	}, []);

	return (
		<Link
			to={{
				pathname: '/recipe',
				state: { recipeId: props.id },
				search: `?id=${props.id}`,
			}}
			className="link-without-decoration"
		>
			<div className="rated-recipe">
				<div className="rated-recipe-img">
					<img src={props.image} alt={props.title}></img>
				</div>
				<div className="rated-recipe-stars">
					<span
						className={stars >= 1 ? 'fa fa-star checked' : 'fa fa-star'}
					></span>
					<span
						className={stars >= 2 ? 'fa fa-star checked' : 'fa fa-star'}
					></span>
					<span
						className={stars >= 3 ? 'fa fa-star checked' : 'fa fa-star'}
					></span>
					<span
						className={stars >= 4 ? 'fa fa-star checked' : 'fa fa-star'}
					></span>
					<span
						className={stars >= 5 ? 'fa fa-star checked' : 'fa fa-star'}
					></span>
				</div>
				<div className="rated-recipe-exp-box">
					<div className="rated-recipe-title">{props.title}</div>

					<i className="gg-arrow-right"></i>
				</div>
			</div>
		</Link>
	);
}

export default RatedRecipe;
