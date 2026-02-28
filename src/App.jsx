import AviationBackground from './components/AviationBackground';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-dvh">
      {/* make the background fixed + behind (z-index) */}
      <AviationBackground />   {/* we'll set it to fixed in the component */}

      <div className="relative z-10 flex min-h-dvh flex-col">
        <NavBar />
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
          <div className="mx-auto max-w-6xl">
            <AppRoutes />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
