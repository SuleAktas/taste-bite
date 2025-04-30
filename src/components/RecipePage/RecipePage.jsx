import React from 'react';
import './RecipePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube';
import Checkbox from '@mui/material/Checkbox';
import { useLocation } from 'react-router-dom';
import { useGetMealByIdQuery } from '../../features/apiSlice';
import { useState } from 'react';
import { orange } from '@mui/material/colors';
import { formatDate } from '../../utils/dateUtils';

function RecipePage() {
	const opts = {
		height: '250',
		width: '345',
		borderRadius: '2',
		playerVars: {
			autoplay: 0,
		},
	};

	const [checkedItems, setCheckedItems] = useState({});

	const handleCheckboxChange = (event, index) => {
		const { checked } = event.target;
		setCheckedItems({ ...checkedItems, [index]: checked });
	};

	const location = useLocation();
	const params = new URLSearchParams(location.search);

	const { data, isLoading: isRecipeLoading } = useGetMealByIdQuery(
		params.get('id')
	);
	if (isRecipeLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="recipe-page">
			<div className="recipe-make-again">
				<i className="gg-trending"></i>
				<p>{data.rating * 10}% would make this again</p>
			</div>
			<div className="recipe-title">{data.name}</div>
			<div className="recipe-exp-section">
				<div className="recipe-exp">
					<div className="recipe-exp-author">
						<FontAwesomeIcon icon={faCircleUser} size="lg" /> {data.writer.name}
					</div>
					<div className="recipe-date">
						<FontAwesomeIcon
							icon={faCalendar}
							size="lg"
							className="icon-margin"
						/>

						{formatDate(data.createdDate)}
					</div>
				</div>
				<div className="recipe-stars">
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
				</div>
			</div>

			<div className="recipe-pre-exp">
				One thing a learned living in the Canarsie section of Brooklyn, Ny was
				how to be a good cook .Here is recipe I created after having this dish
				in a restourant. Enjoy!
			</div>
			<div className="blog-vid">
				<YouTube videoId={data.videoUrl.split('=')[1]} opts={opts} />
			</div>
			<div className="recipe-prep">
				<div className="recipe-time">
					<div className="recipe-prep-title">PREP TIME</div>
					<div className="recipe-prep-exp">{data.prepTime} MIN</div>
				</div>
				<div className="recipe-servings">
					<div className="recipe-prep-title">SERVINGS</div>
					<div className="recipe-prep-exp">{data.servings} PEOPLE</div>
				</div>
			</div>
			<div className="recipe-how-to-make">
				<div className="recipe-ingredients">
					<div className="recipe-title">Ingredients</div>
					<div className="recipe-ingredients-box">
						{data.ingredients.split(',').map((item, index) => (
							<div className="recipe-ingredient">
								<Checkbox
									key={index}
									sx={{
										color: orange[900],
										'&.Mui-checked': {
											color: orange[900],
										},
									}}
									checked={checkedItems[index] || false}
									onChange={event => handleCheckboxChange(event, index)}
								/>
								<div
									className="instruction-item"
									style={{
										textDecoration: checkedItems[index]
											? 'line-through'
											: 'none',
										color: checkedItems[index] ? 'grey' : 'inherit',
									}}
								>
									{item}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="recipe-instructions">
					<div className="recipe-title">Instructions</div>
					{data.instructions.split('\r\n').map((item, index) => (
						<div className="recipe-ingredient">
							<div>
								<div className="recipe-circle">{index + 1}</div>
							</div>
							<div className="instruction-item">{item}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default RecipePage;
