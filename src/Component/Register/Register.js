import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import '../Login/Login.css'


let styleH2 = {
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "uppercase",
  display: "inline-block",
  margin: "40px 8px 10px 8px",
  color: "#919191"
}

const Register = () => {
    async function isRegister(){
      let response = await axios.post('https://apitaipham.herokuapp.com/register' , {
          fullname : document.getElementById('fullname').value,
          username : document.getElementById('username').value,
          password : document.getElementById('password').value
      })
      if(response.data.message){
          alert(response.data.message)
      }
      else{
          Cookies.set("iduser", response.data.data._id);
          Cookies.set("nameuser", response.data.data.fullname);
          window.location.href = '/'
      }
    }
    return (
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <h2 style={styleH2}>Please Register</h2>
            </div>
                <input type="text" id="fullname" className="fadeIn second" placeholder="Full name" />
                <input type="text" id="username" className="fadeIn second" placeholder="Username" />
                <input type="password" id="password" className="fadeIn second" placeholder="Password" />
                <button onClick={isRegister} type="button" className="btn btn-primary btn-login fadeIn fourth">Register</button>
            <div id="formFooter">
              <span>Already have an account? </span>
              <a className="underlineHover" href="/login"> Login here</a>
            </div>
          </div>
        </div>
    );
}

export default Register;
