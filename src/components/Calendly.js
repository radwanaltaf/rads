import React, { Component } from 'react'
import './Body.css'
import 'tachyons'

class Calendly extends Component {
    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }
    componentWillUnmount() {
        //cleanup the widgets code
    }

    render(){
    return (
            <div id="schedule_form">
                <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/radwanaltaf/project-proposal-meeting"
                style={window.innerWidth > 1299 ? { minWidth: '320px', width: '50vw', height: '90vh', marginTop: '-40px'} : {minWidth: '320px', width: '50vw', height: '90vh',}} />

            </div>
        );
    }
}
export default Calendly