import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../sections/Home'));
const Service = lazy(() => import('../sections/Service'));
const News = lazy(() => import('../sections/News'));
const Aircraft = lazy(() => import('../sections/Aircraft'));
const Tools = lazy(() => import('../sections/Tools'));
const Projects = lazy(() => import('../sections/Projects'));
const About = lazy(() => import('../sections/About'));
const Contact = lazy(() => import('../sections/Contact'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));

export default function AppRoutes() {
    return (
        <Suspense fallback={<div className="text-white/70 py-10">Loading...</div>}>
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
        </Suspense>
    );
}