
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Home/Contact/Contact';
import Portfolio from './Pages/Home/Portfolio/Portfolio';
import About from './Pages/Home/About/About';
import TopNav from './Pages/Shared/TopNav/TopNav';
import Skills from './Pages/Skills/Skills';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="">
      <TopNav></TopNav>


      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />




      </Routes>
      <Footer></Footer>




    </div>
  );
}

export default App;
