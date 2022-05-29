import { Link } from 'react-router-dom';

// components
import Buscador from './Buscador';

import "../css/index.css"

function Header(props) {
    return (
        <>
            <nav className='navbar navbar-expand bg-dark navbar-dark d-flex flex-sm-row flex-column align-items-center justify-content-center w-100'>
                <div className='container-fluid d-flex flex-sm-row flex-column'>
                    <Link className='navbar-brand' to="/">
                        <img src="logo.svg" alt="" width="80px" className='m-0 p-0 '/>
                        ReactFlix
                    </Link>
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
                <div className='container-fluid justify-content-sm-end justify-content-center'>
                    <Buscador />
                </div>
            </nav> 
        </>
    )
}

export default Header;