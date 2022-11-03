import './HeaderContent.css';
import avater from "../../../assets/avater.png"
import cv from "../../../assets/mycv.pdf"
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function HeaderContent(props) {

  let animationContent = [
    '<span>a</span> <h1>computer engineer</h1>',
    '<span>a</span> <h1>front-end developer</h1>',
    '<span>a</span> <h1>graphics designer</h1>'
  ];

  // const [textAni, setTextAni] = useState('<h1>Md. Rasel Mahmud</h1>');
  // setInterval((e) => {

  // }, 2000);
  
 
  

  return (
        <div className="HeaderContent">
            <p>Hello! I'm</p>
          <article>
            <div className='textAnimation'>
              <h1>Md. Rasel Mahmud</h1>
            </div>

            {/* <div className="textAnimation">
              <span>a</span> <h1>computer engineer</h1>
            </div>

            <div className="textAnimation">
              <span>a</span> <h1>front-end developer</h1>
            </div>

            <div className="textAnimation">
              <span>a</span> <h1>graphics designer</h1>
            </div>  */}
          </article>


          <div className="buttons">
            <a href={cv} download target={"_blank"}  className="btn">Download CV</a>

            <Link to="/Contact" className="btn-primary">
              Hire me
            </Link>
          </div>

          <div className="avater">
            <img src={avater} alt="Rasel Mahmud" />
            <div className="img-border"></div>
          </div>
          <Navbar ></Navbar>
        </div>
  );
}

export default HeaderContent;