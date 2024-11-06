import React, {useState} from "react";
import Shop from "./Shop";
import AdminPanel from "./AdminPanel";

export default function Login(){
    let accounts =
    [
        {id:1, username: "customer", password: "customer", role: "customer"},
        {id:2, username: "admin", password: "admin", role: "admin"},
        {id:3, username: "customer2", password: "customer2", role: "customer"},
        {id:4, username: "customer3", password: "customer3", role: "customer"}
    ]
    let items = [
        {id:1, name: 'Item 1', price:10},
        {id:2, name: 'Item 2', price:15},
        {id:3, name: 'Item 3', price:20},
        {id:4, name: 'Item 4', price:25},
        {id:5, name: 'Item 5', price:30}
        ]

    const [isLoggedIn, setIstLoggedIn] = useState(false)
    const [role, setRole] = useState("")
    const [enteredUsername, setEnteredUsername] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")

    function getUsername(event){
        setEnteredUsername(event.target.value)
    }
    function getPassword(event){
        setEnteredPassword(event.target.value)
    }

    function handleLogin(){
        accounts.map((account)=> {
            if (account.username == enteredUsername && account.password == enteredPassword){
                setIstLoggedIn(true)
                setRole(account.role)
            }
        })
    }

    const renderLogin = () => {
        return(
            <div>
                <h1>Login</h1>
                username: <input type="text" placeholder="Username" id="username" onChange={getUsername}/>
                password: <input type="text" placeholder="password" id="passsword" onChange={getPassword}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }

    const renderShop = () => {
        return(
            <Shop items={items}/>
        )
    }

    const renderAdmin = () =>{
        return(
            <AdminPanel isLoggedIn= {isLoggedIn} accounts = {accounts}/>
        )
    }

    if (isLoggedIn == false){
        return renderLogin()
    }
    else{
        if (role === "customer"){
            return renderShop()
        }
        else if (role === "admin"){
            return renderAdmin()
        }
    }
    
}