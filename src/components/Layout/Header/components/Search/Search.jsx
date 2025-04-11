import React from 'react';
import './Search.css';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useGetRecipesByNameQuery } from '../../../../../features/apiSlice';
import { useState } from 'react';
import SearchItem from '../SearchItem/SearchItem';
function Search(props) {
	const [searchInput, setSearchInput] = useState('');

	const { data, isLoading: isRecipesLoading } =
		useGetRecipesByNameQuery(searchInput);

	const handleInputChange = event => {
		setSearchInput(event.target.value);
	};

	const handleClose = () => {
		props.onClose();
	};

	if (isRecipesLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="search-box">
			<div className="search-input">
				<TextField
					id="standard-basic"
					label="Search"
					variant="standard"
					fullWidth
					value={searchInput}
					InputProps={{
						endAdornment: (
							<FontAwesomeIcon
								icon={faX}
								onClick={handleClose}
								style={{ marginRight: '10px', marginBottom: '10px' }}
							/>
						),
					}}
					onChange={handleInputChange}
				></TextField>
			</div>

			<div className="search-output">
				{Array.isArray(data?.meals) &&
					data?.meals.map(recipe => (
						<SearchItem
							id={recipe.idMeal}
							title={recipe.strMeal}
							category={recipe.strCategory}
							image={recipe.strMealThumb}
						/>
					))}
			</div>
		</div>
	);
}

export default Search;
