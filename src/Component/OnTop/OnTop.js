import React from 'react';
import './OnTop.css';





const OnTop = () => {
    window.addEventListener('scroll', () => {
        let nutTop = document.getElementById("nuttop");
        if(window.pageYOffset > 600){
            nutTop.classList.add('show-top');
        }
        else{
            nutTop.classList.remove('show-top');
        }
    
        nutTop.onclick = () => {
            document.documentElement.scrollTop = 0
        }
    })
    
    return (
        <div id="nuttop" className="btn-top">
            <i className="fas fa-arrow-alt-circle-up top"></i>
        </div>
    );
}

export default OnTop;
