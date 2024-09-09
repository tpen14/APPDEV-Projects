export default function Header(){
    return(
        <header>
        <nav>
        <div class="nav-center">
            <div class="nav-header">
            <h1>My Profile</h1>
                <button class="nav-toggle">
                <i class="fas fa-bars"></i>
                </button>
            </div>
         <ul class="links">
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="about.html">About</a>
            </li>
            <li>
                <a href="projects.html">Projects</a>
            </li>
            <li>
                <a href="contacts.html">Contacts</a>
            </li>
            </ul>
            </div>
        </nav>
            {/* <nav> 
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav> */}
        </header>
    )
}