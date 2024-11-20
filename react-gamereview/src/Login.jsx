import React, {useState} from "react";
import Reviews from "./Reviews";
export default function Login() {
    const account = {
        username: "admin",
        password: "admin"
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [enteredUsername, setEnteredUsername] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")

    function getUsername(event){
        setEnteredUsername(event.target.value)
    }
    function getPassword(event){
        setEnteredPassword(event.target.value)
    }

    function handleLogin() {
        if (account.username === enteredUsername && account.password === enteredPassword) {
            setIsLoggedIn(true);
            setRole(account.role);
        } else {
            alert("Invalid username or password!");
        }
    }

    const renderLoginForm = () => {
        return(
            <div>
            <h1>Welcome to Wormmmy's Reviews!</h1>
            <h4>Login to Continue:</h4>
            Username: 
            <input type="text" name="username" id="username" onChange={getUsername} />
            <br />
            <br />
            Password:
            <input type="password" name="password" id="password" onChange={getPassword}/>
            <br />
            <br />
            <button type="button" onClick={handleLogin}>Login</button>
            </div>
        );
    }

    const renderReview = () => {
        return(
            <Reviews></Reviews>
        )
    }

    if (isLoggedIn == false){
        return renderLoginForm()
    }
    else{
        return renderReview()
        }
}
