import React, { Component } from 'react'
import {bodyTxt} from '../const'
import './Body.css'
import 'tachyons'



class Body extends Component {
    render() {
        return (
            <div id="body">
               <div className="flexContainer pa3">
                   <div className="shadow-5 grow titleCard pr3 pl3">
                        <h1 className="tc white bodyHeader">{bodyTxt[0]}</h1>
                    </div>
               </div>

               <div className="flexContainer pa3">
                   <div className="grow shadow-1 innerBodyLeft flexItemAboutMe ph3 mr2">
                        <p className="bodyTxt ">{bodyTxt[1]} {bodyTxt[2]} </p>
                        <p className="bodyTxt mb0">{bodyTxt[3]}</p>

                        <div className="flexTableCont ma0">
                              <div className="mr2 flexTableItem">
                                  <h3 className="tdResp white mb0 tc">Front-End</h3>
                                  <p className="tdResp white mt2 tc mb0">AngularJS</p>
                                  <p className="tdResp white tc mt2">ReactJS</p>
                              </div>
                              <div className="mr2 flexTableItem">
                                  <h3 className="tdResp white mb0 tc">Back-End</h3>
                                  <p className="tdResp white mt2 tc mb0">ExpressJS</p>
                                  <p className="tdResp white tc mt2">NodeJS</p>
                              </div>
                              <div className="mr2 flexTableItem">
                                  <h3 className="tdResp white mb0 tc">Database</h3>
                                  <p className="tdResp white mt2 tc mb0">MongoDB</p>
                                  <p className="tdResp white tc mt2">SQL</p>
                              </div>
                              <div className="flexTableItem">
                                  <h3 className="tdResp white mb0 tc">CMS</h3>
                                  <p className="tdResp white mt2 tc mb0">WordPress</p>
                                  <p className="tdResp white tc mt2">Drupal</p>
                              </div>
                        </div>
                   </div>
                   <div className="grow shadow-1 innerBodyRight flexItemContactForm ph3 ml2">
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
