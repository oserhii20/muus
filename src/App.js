import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Teams from './pages/Teams'
import Contact from './pages/Contact'
import Footer from './components/layouts/Footer'
import Services from './pages/Services'
import Work from './pages/Work'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/services" element={<Services />}/>
        <Route exact path="/work" element={<Work />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/teams" element={<Teams />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
