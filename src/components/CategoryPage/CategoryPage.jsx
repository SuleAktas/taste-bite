import React from "react";
import "./CategoryPage.css";
import Category from "./components/Category/Category";
import { useGetAllCategoriesQuery } from "../../features/apiSlice";

function CategoryPage() {
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetAllCategoriesQuery();
  if (isCategoriesLoading) return <div>Loading...</div>;
  return (
    <div className="categories">
      <div className="categories-title">Categories</div>
      <div className="categories-box">
        {categories?.categories.slice(0, 32).map((category) => (
          <Category
            image={category.strCategoryThumb}
            title={category.strCategory}
            key={category.idCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
