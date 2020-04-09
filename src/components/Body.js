import React, { Component } from 'react'
import {bodyTxt} from '../const'

class Body extends Component {
    render() {
        return (
            <div id="body">
                <div className="container bodyDiv">
                <h1 className="h">Hello</h1>
                <div className="bodyGrid">
                <div className="bodyDiv">
                <p className="bodyTxt">{bodyTxt}</p>
                </div>
                <div className="bodyDiv">
                <p className="bodyTxt">{bodyTxt}</p>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Body
