import React, { Component } from 'react'
import {bodyTxt} from '../const'
import './Body.css'
import tachyons from 'tachyons'


class Body extends Component {
    render() {
        return (
            <div id="body">
                <div className="container bodyDiv">
                    <div className="shadow-5 grow titleCard">
                        <h1 className="bodyHead">{bodyTxt[0]}</h1>
                    </div>
                    <div className="bodyGrid">
                        <div className=" grow bodyDiv">
                            <div className="shadow-1 innerBodyLeft">
                                <div className="aboutMe">
                                    <p className="bodyTxt">{bodyTxt[1]} </p>
                                    {/* <p className="bodyTxt">{bodyTxt[2]}</p> */}
                                    <p className="bodyTxt">{bodyTxt[3]}</p>
                                    <div className="bodyGrid">
                                        <div className="tc">
                                            <h3 className="ma0 white">
                                                Front-End
                                            </h3>
                                           <p className="lightgray ma0 mt2 txtAlign">
                                               AngularJS
                                           </p>
                                           <p className="white ma0 mt2 txtAlign">
                                               ReactJS
                                           </p>
                                        </div>
                                        <div className="tc">
                                            <h3 className="ma0 white">
                                                Back-End
                                            </h3>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="grow bodyDiv">
                            <div className="shadow-1 innerBodyRight">
                                <div className="contactForm">
                                    <p className="bodyTxt">{bodyTxt[1]}</p>
                                    <p className="bodyTxt">{bodyTxt[2]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Body
