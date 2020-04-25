import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {headerTxt} from '../const';
import "./scroll.css";
import { Link } from 'react-scroll';
import './MainHeader.css';
import { Parallax } from 'react-scroll-parallax';



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
                    <Parallax className="custom-class" y={[30, -450]} tagOuter="figure">
                        <div className="mouse"></div>
                    </Parallax>

                    </Link>

            </div>
            </div>
        </div>
    );
  };


export default MainHeader






