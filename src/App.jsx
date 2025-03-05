import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenavbar from './components/sidenavbar/Sidenavbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Router>
        <main className="w-full max-h-screen min-h-screen flex flex-col bg-zinc-900 text-zinc-400">
          <div className="w-full flex items-start gap-16 md:py-6 py-0 md:pl-6 pl-0">
            {/* Sidebar NavItems */}
            <Sidenavbar />

            {/* Main Content */}
            <div className="flex-1 md:max-h-[calc(100vh-3rem)] max-h-screen md:min-h-[calc(100vh-3rem)] min-h-screen md:rounded-lg overflow-y-auto overflow-x-hidden md:pr-6 pr-0">

              {/* Layouts */}
              <div className="w-full bg-zinc-800 md:rounded-lg">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/me" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>

              {/* Foote section */}
              <Footer />
            </div>
          </div>
        </main>
      </Router>
    </>
  )
}

export default App;
