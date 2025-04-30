import React from 'react';
import './CategoryPage.css';
import Category from './components/Category/Category';
import { useGetAllCategoriesQuery } from '../../features/apiSlice';

function CategoryPage() {
	const { data: categories, isLoading: isCategoriesLoading } =
		useGetAllCategoriesQuery();
	if (isCategoriesLoading) return <div>Loading...</div>;
	return (
		<div className="categories">
			<div className="categories-title">Categories</div>
			<div className="categories-box">
				{categories?.slice(0, 32).map(category => (
					<Category
						image={category.photoUrl}
						title={category.name}
						key={category.id}
					/>
				))}
			</div>
		</div>
	);
}

export default CategoryPage;
