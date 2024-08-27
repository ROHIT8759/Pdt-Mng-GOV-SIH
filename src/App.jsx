import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import ImageSlider from './components/slidingImage.jsx';
import Home from './App.jsx';
import About from './pages/about/about.jsx';
import ContactAdmin from './pages/contact_admin/con_ad.jsx';
import Login from './pages/login/Login.jsx';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-admin" element={<ContactAdmin />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <ImageSlider />
        </Router>
    );
}

export default App;
