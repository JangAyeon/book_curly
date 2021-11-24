import React,{useState} from "react";
import Axios from "axios";
import './App.css';

function App() {

  const [usernameReg, setusernameReg]=useState("");
  const [passwordReg,setPasswordReg]=useState("");

  const [username, setusername]=useState("");
  const [password,setPassword]=useState("");

  const [loginStatus, setLoginStatus]=useState("");


  const register=()=>{
    Axios.post("https://localhost3001/register",
    {username:usernameReg,
      password:passwordReg,
    }).then(response=>
      console.log(response));
  };

  const login=()=>{
    Axios.post("https://localhost3001/login",
    {username:username,
      password:password,
    }).then((response)=>
      if (response.data.message){
        /*유저가 등록되지 않은 경우 */
        setLoginStatus(response.data.message)
      }
      else{
        setLoginStatus(response.data[0].user)
      }
    
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registeration</h1>
        <label>Username</label>
        <input 
          type="text"
          onChange={(e)=>{
            setusernameReg(e.target.value);
          }}
          />
        <label>Password</label>
        <input type="text"
        onChange={(e)=>{
          setPasswordReg(e.target.value);
        }}
          />
        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>login</h1>

        <input 
          type="text"
          placeholder="Username...."
          onChange={(e)=>{
            setusername(e.target.value);
        }}/>

        <input 
          ype="text"
          placeholder="Password.."
          onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
        <button onClick={login}>Login</button>
      </div>

      <h1>loginStatus</h1>


    </div>
  );
}

export default App;
