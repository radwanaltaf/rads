import React, { Component } from 'react'
import {bodyTxt} from '../const'
import './Body.css'
import 'tachyons'
import CalendlyPopup from './CalendlyPopup'


class Body extends Component {

    funcPop = () => {
    }

    render() {
        return (
            <div id="body">
               <div className="flexContainer pa3">
                   <div className="shadow-5 grow titleCard pr3 pl3">
                        <h1 className="tc white bodyHeader">{bodyTxt[0]}</h1>
                    </div>
               </div>

               <div className="flexContainer pa3">
                   <div className="grow shadow-1 innerBodyCard flexItemAboutMe ph3 mr2">
                        <p className="bodyTxt ">
                            {bodyTxt[1]} <br/> <br/>
                            {bodyTxt[2]} <br/> <br/>
                            Take a look at my portfolio <a className="bodyRef" href="https://www.behance.net/radwanaltaf/">here</a>
                        </p>
                   </div>
                   <div className="grow shadow-1 innerBodyCard flexItemSkills ph3 ml2">
                        <p className="bodyTxt mb0">{bodyTxt[3]}</p> 

                        <div className="flexTableCont ma0">
                              <div className="mr2 flexTableItem">
                                  <h3 className="tdResp white mb0 tc">Front-End</h3>
                                  <hr/>
                                  <p className="tdResp white mt2 tc mb0">AngularJS</p>
                                  <p className="tdResp white tc mt2">ReactJS</p>
                              </div>
                              <div className="mr2 flexTableItem">
                                  <h3 className="tdResp white mb0 tc">Back-End</h3>
                                  <hr/>
                                  <p className="tdResp white mt2 tc mb0">ExpressJS</p>
                                  <p className="tdResp white tc mt2">NodeJS</p>
                              </div>
                              <div className="mr2 flexTableItem">
                                  <h3 className="tdResp white mb0 tc">Database</h3>
                                  <hr/>
                                  <p className="tdResp white mt2 tc mb0">MongoDB</p>
                                  <p className="tdResp white tc mt2">SQL</p>
                              </div>
                              <div className="flexTableItem">
                                  <h3 className="tdResp white mb0 tc">CMS</h3>
                                  <hr/>
                                  <p className="tdResp white mt2 tc mb0">WordPress</p>
                                  <p className="tdResp white tc mt2">Drupal</p>
                              </div>
                        </div>

                    </div>
                    

                    <div className="shadow-1 calendlyCard ph3 mr2 mt3 br5">
                        <p className="bodyTxt ">
                            {bodyTxt[4]}
                            <CalendlyPopup/>
                        </p>
                        
                    </div>

               </div>

            </div>

        )
    }
}

export default Body