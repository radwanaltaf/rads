import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {headerTxt} from '../const';
import "./scroll.css";
import { Link } from 'react-scroll';
import './MainHeader.css'



const MainHeader = () => {
    return (
        <div className="mainHeadDiv">
            <div>
            <ReactTypingEffect
                text={headerTxt}
                className="mainHead"
                speed="100"
                typingDelay="800"
            />
            <div  className="scroll">
            <Link
                activeClass="active"
                to="body"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
                <div className="mouse"></div>
            </Link>
            </div>
            </div>
        </div>
    );
  };


export default MainHeader
