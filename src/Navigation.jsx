import logo from './assets/logo-b-w.svg'
import './Navigation.css'

function Navigation(){
    return(
        // NAV - FIXED ON THE RIGHT 
        <div className="fixed-container">
            <nav className="fixed">
                <ul>
                    <div>
                        {/* PROJECTS LINK*/ }
                        <li>
                            <a href="#section1">
                                <span className="rect"></span>
                                <span className="circle"></span>
                                Projects
                            </a>
                        </li>

                        {/* ABOUT LINK */ }
                        <li>
                            <a href="#section2">
                                <span className="rect"></span>
                                <span className="circle"></span>
                                About
                            </a>
                        </li>

                        {/* TOOLS LINK */ }
                        <li>
                            <a href="#section3">
                                <span className="rect"></span>
                                <span className="circle"></span>
                                Tools
                            </a>
                        </li>

                       {/* CONTACT LINK*/ }
                        <li>
                            <a href="#section4">
                                <span className="rect"></span>
                                <span className="circle"></span>
                                Contact
                            </a>
                        </li>
                    </div>

                    <div className="flex-center logo">
                        <img id="logo" src={logo}></img>
                        <span className="arrow-up">&#8593;</span>
                    </div>
                    
                </ul>
           
            </nav>
        </div>
    );
}
export default Navigation