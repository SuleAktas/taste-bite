import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import BlogPage from "../BlogPage/BlogPage";
import RecipePage from "../RecipePage/RecipePage";
import CategoryPage from "../CategoryPage/CategoryPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/recipe" element={<RecipePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
