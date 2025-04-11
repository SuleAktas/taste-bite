import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Layout/Header/Header.jsx';
import Footer from '../Layout/Footer/Footer.jsx';
import HomePage from '../HomePage/HomePage.jsx';
import BlogPage from '../BlogPage/BlogPage.jsx';
import RecipePage from '../RecipePage/RecipePage.jsx';
import CategoryPage from '../CategoryPage/CategoryPage.jsx';
import RecipesPage from '../RecipesPage/RecipesPage.jsx';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/categories" element={<CategoryPage />} />
					<Route path="/recipes" element={<RecipesPage />} />
					<Route path="/recipe" element={<RecipePage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
