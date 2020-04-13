import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="footerGrid">
                        <div>
                        <p className="footerTxt">RADS</p>
                        </div>
                        <div>
                        <p className="footerTxt">COPYRIGHTS</p>
                        </div>
                        <div>
                        <p className="footerTxt">LOREM IPSUM</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
