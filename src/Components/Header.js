import { Link } from 'react-router-dom';

// components
import Buscador from './Buscador';

import "../css/index.css"

function Header(props) {
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
                            <Link className='nav-link' to="/favoritos">
                                Favoritos {props.favorites.length > 0 && <>({props.favorites.length})</> }
                            </Link>
                        </div>
                </div>                    
                </div>
                <div className='container-fluid justify-content-end'>
                    <Buscador />
                </div>
            </nav> 
        </>
    )
}

export default Header;