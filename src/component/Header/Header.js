import './Header.css';
import HeaderContent from './HeaderContent/HeaderContent';
import About from '../About/About';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import WhyMe from '../WhyMe/WhyMe';
import Contact from '../Contact/Contact';
import { Routes, Route, Link } from "react-router-dom";


function Header() {
  
  return (
    <div className='header fadeDown container'>
        <HeaderContent />

        {/* <div className="social-link">
          
        </div> */}

        <div className="show-output">
        <Routes>
          <Route path="/" element={''} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="WhyMe" element={<WhyMe />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        </div>

    </div>
  );
}

export default Header;
