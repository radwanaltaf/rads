import React, { Component } from 'react'
import {bodyTxt} from '../const'
import './Body.css'
import tachyons from 'tachyons'


class Body extends Component {
    render() {
        return (
            <div id="body">
               <div className="flexContainer pa3">
                   <div className="shadow-5 grow titleCard pr3 pl3">
                        <h2 className="tc white">{bodyTxt[0]}</h2>
                    </div>
               </div>

               <div className="flexContainer pa3">
                   <div className="grow shadow-1 innerBodyLeft flexItemAboutMe ph3">
                        <p className="bodyTxt">{bodyTxt[1]} </p>
                        <p className="bodyTxt">{bodyTxt[2]}</p>
                        <p className="bodyTxt">{bodyTxt[1]}</p>
                   </div>
                   <div className="grow shadow-1 innerBodyRight flexItemContactForm ph3">
                        <p className="bodyTxt">{bodyTxt[1]}</p>
                        <p className="bodyTxt">{bodyTxt[2]}</p>
                        <p className="bodyTxt">{bodyTxt[1]}</p>
                    </div>

               </div>

            </div>

        )
    }
}

export default Body
