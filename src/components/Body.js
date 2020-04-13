import React, { Component } from 'react'
import {bodyTxt} from '../const'
import './Body.css'


class Body extends Component {
    render() {
        return (
            <div id="body">
                <div className="container bodyDiv">
                    <h1 className="bodyHead">{bodyTxt[0]}</h1>
                    <div className="bodyGrid">
                        <div className="bodyDiv">
                            <div className="innerBodyLeft">
                                <div className="aboutMe">
                                    <p className="bodyTxt">{bodyTxt[1]}</p>
                                    <p className="bodyTxt">{bodyTxt[2]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bodyDiv">
                            <div className="innerBodyRight">
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
