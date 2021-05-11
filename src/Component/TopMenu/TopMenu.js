import Cookies from 'js-cookie';
import React from 'react';


const TopMenu = () => {
    function SignOut(){
        Cookies.remove('iduser')
        Cookies.remove('nameuser')
        window.location.reload()
    }

    window.addEventListener('scroll', function(){
        let topmenu = document.getElementById('topmenu');
        if(window.pageYOffset > 200){
            topmenu.classList.add('hidden');
            topmenu.classList.remove('show');
        }
        else if(window.pageYOffset < 200){
            if(topmenu.classList.contains('hidden')){
                topmenu.classList.remove('hidden');
                topmenu.classList.add('show');
            }
        } 
    })

    return (
        <nav id="topmenu" className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">Tai Pham</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                {Cookies.get('iduser') ?
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <span className="nav-link">{Cookies.get('nameuser')}</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={SignOut}>Sign out</span>
                    </li>  
                </ul>
                :
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Log In</a>
                    </li>
                </ul>
                 }
                 
                </div>
            </div>
        </nav>
    );
}

export default TopMenu;
