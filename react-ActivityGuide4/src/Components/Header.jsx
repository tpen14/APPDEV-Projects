import { Link } from "react-router-dom";

export default function Header(){
return(
    <nav>
        <h1 className="title">My Games!</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>                                                  
        </ul>
      </nav>
)
}
