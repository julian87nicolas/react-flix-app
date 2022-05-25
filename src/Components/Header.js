import { Link } from 'react-router-dom';

// components
import Buscador from './Buscador';

import "../css/index.css"

function Header() {
    return (
        <>
            <nav className='navbar navbar-expand bg-dark navbar-dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to="/">
                        <img src="logo.svg" alt="" width="80px" className='m-0 p-0 '/>
                        ReactFlix
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="collapsibleNavbar"> 
                        <div className='navbar-nav'>
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/listado">Listado</Link>
                        </div>
                </div>                    
                </div>
                <Buscador className= "col-2"/>
            </nav> 
        </>
    )
}

export default Header;