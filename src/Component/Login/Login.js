import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import './Login.css'


let styleH2 = {
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "uppercase",
  display: "inline-block",
  margin: "40px 8px 10px 8px",
  color: "#919191"
}

const Login = () => {
    async function isLogin(){
      // If function not working then you will add try{}catch(e) and reload web page application 
      // If function run OKE you don't touch please !!!!
      let response = await axios.post('https://apitaipham.herokuapp.com/login', {
        username : document.getElementById('username').value,
        password : document.getElementById('password').value
      })
      if(response.data.message){
        alert(response.data.message)
      }
      else{
        Cookies.set('iduser' , response.data._id)
        Cookies.set('nameuser' , response.data.fullname)
        window.location.href = '/'
      }
    }
   
    return (
      <div>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <h2 style={styleH2}>Please Login</h2>
            </div>
              <input type="text" id="username" className="fadeIn second" name="login" placeholder="Username"/>
              <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password"/>
              <button onClick={isLogin} type="submit" className="btn btn-primary btn-login fadeIn fourth">Log In</button>
            <div id="formFooter">
              <span>Don't have an account yet? </span>
              <a className="underlineHover" href="/register"> Register here</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
