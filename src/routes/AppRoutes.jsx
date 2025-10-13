import { Routes, Route } from 'react-router-dom';
import Home from '../sections/Home';
import Service from '../sections/Service';
import News from '../sections/News';
import Aircraft from '../sections/Aircraft';
import Tools from '../sections/Tools';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Contact from '../sections/Contact';
import GalleryPage from "../pages/GalleryPage";
import ProjectsPage from "../pages/ProjectsPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/news" element={<News />} />
            <Route path="/aircraft" element={<Aircraft />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/gallery/:slug" element={<GalleryPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}