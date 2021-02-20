import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="footerGrid">
                        <div className="footerCol">
                        <p className="footerTxt">Lets turn your dreams into reality</p>
                        </div>
                        <div className="footerCol">
                        <p className="footerTxt">Designed & Developed by Radwan A</p>
                        </div>
                        <div className="footerCol">
                        <p className="footerTxt">
                            <a className="footerIcons" href="https://www.linkedin.com/in/radwanaltaf/">
                                <FontAwesomeIcon icon={faLinkedin} className="mr2" />
                            </a>
                            <a className="footerIcons" href="https://www.instagram.com/radwanaltaf/">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
