import { useState } from "react";
import "./componentsCSS/Login.css";
function Login(){
  const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[isLoggedIn,setIsLoggedIn] = useState(false);
    const [isClickedToggle, setIsClickedToggle] = useState(false);
    const loginHandler = () => {
        if (username.trim() !== '' && password.trim() !== '') {
          setIsLoggedIn(true);
        }
    }
    const clickToggler = () => {
        setIsClickedToggle(!isClickedToggle);
    }
    
    return <div>
      <div className="header">
        <button className = "button" onClick={clickToggler}>Login</button>
        {isClickedToggle ? 
        <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginHandler}>Login</button>
        {isLoggedIn ? 
            <p>Welcome, {username}!</p> : undefined}
      </div> : undefined}
        </div>
    </div>
}
    export default Login;