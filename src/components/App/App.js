import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import BlogPage from "../BlogPage/BlogPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
