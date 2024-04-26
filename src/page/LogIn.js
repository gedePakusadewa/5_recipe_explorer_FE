import { AuthContext } from "../App.js";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GeneralConst from "../resource/General.js"
import "../style.css";

const LogIn = () =>{
  const context = useContext(AuthContext);

  const [form, setForm] = useState({
    username:"",
    password:""
  });
  const [isShowSignUp, setIsShowSignUp] = useState(false);

  const updateForm = (e)  =>{
    setForm(previousState =>{
      return { 
        ...previousState,
        [e.target.name]:e.target.value
      }
    });
  }
 
  return(
    <div className="login-container-bg">
      <div className="login-container">
        <div>
          <h2>{GeneralConst.TITLELOGIN}</h2>
          {context.isErrorInput && (
            <p className="wrong-username-password">{GeneralConst.WRONGINPUTLOGIN}</p>
          )}
          <label htmlFor="title">{GeneralConst.USERNAME}</label><br />
          <input 
            type="text"
            name="username"
            onChange={(e)=>{updateForm(e)}}
          /><br />
          <label htmlFor="title">{GeneralConst.PASSWORD}</label><br />
          <input 
            type="password"
            name="password"
            onChange={(e)=>{updateForm(e)}}
          /><br />
          {context.isShowActionButton && (
            <button
              className="btn-cust btn-login btn-login-signup-first-child" 
              onClick={()=>context.handleLogin(form.username, form.password)}
            >
              {GeneralConst.LOGIN}
            </button>
          )}
          {(context.isShowActionButton && isShowSignUp) && (
            <button
              className="btn-cust btn-signup" 
              onClick={()=>context.handleSignUp()}
            >
              {GeneralConst.SIGNUP}
            </button>
          )}
          {(context.isShowActionButton && isShowSignUp === false) && (
            <button
              className="btn-cust btn-signup" 
              onClick={()=>context.handleLogInDemo()}
            >
              {GeneralConst.LOGIN_AS_GUEST}
            </button>
          )}
          {context.isShowActionButton === false && (
            <>
              <div className="login-wait-message">
                {GeneralConst.PROFILE_WAIT_MESSAGE}
              </div>
              <div className="login-wait-message-icon">
                <FontAwesomeIcon icon="fa-solid fa-spinner" spinPulse />
              </div>            
            </>
          )} 
        </div>
      </div>
    </div>
  )
}
  
export default LogIn