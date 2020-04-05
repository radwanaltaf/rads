import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const txt = ["My name is Radwan, I am a Software Engineer.", 
             "I help businesses by building customer-centric websites."
            ]

const MainHeader = () => {
    return (
        <div>
            <ReactTypingEffect
                text={txt}
                className="mainHead"
                speed="100"
                typingDelay="800"
            />
        </div>
    );
  };


export default MainHeader
