import React from "react";
import Popup from "reactjs-popup";
import Calendly from './Calendly'
import './Body.css'
import 'tachyons'

export default () => (
  <Popup lockScroll="true" trigger={<button className="btn f6 link dim ba ph3 pv2 mb2 dib white"> Open Modal </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="content">
        <Calendly/> 
        </div>

      </div>
    )}
  </Popup>
);