import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { ProjectsPage } from "./pages/Projects";
import { ContactPage } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-[0.14em] focus:text-ink-950 focus:outline-none"
      >
        Skip to content
      </a>
      <ErrorBoundary>
        <Header />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
