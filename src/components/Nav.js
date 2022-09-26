import React from 'react'
import {useLocation,Link} from 'react-router-dom'

function Nav(props) {
    let location = useLocation();
    return (
    <nav className="navbar navbar-expand-lg navbar-dark mx-auto" id='nav'>
        <a className="navbar-brand">Menu</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className={`nav-item ${location.pathname === "/" && 'active'}`}>
                    <Link className="nav-link" to="/"><span className="fas fa-home"></span> Home Page</Link>
                </li>
                <li className={`nav-item ${location.pathname === "/about" && 'active'}`}>
                    <Link className="nav-link" to="/about"><span className="fas fa-question-circle"></span> About Me</Link>
                </li>
                {
                    (location.pathname === '/' && 
                    <li className="nav-item">
                    <Link className="nav-link" to="#"onClick={()=>props.toggleForm()}>
                        <span className="fas fa-plus"></span>
                    Add New</Link>
                    </li> 
                    )
                }   
            </ul>
        </div>  
    </nav>
    )
}

export default Nav