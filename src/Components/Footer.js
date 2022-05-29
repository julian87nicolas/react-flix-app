
import "../css/footer.css"

function Footer() {
    return (
        <div className="container w-100">
        <footer className="container-fluid d-flex flex-wrap py-3 my-4 border-top flex-md-column justify-content-md-center align-items-md-center">
            <div>
                <img src="logo-footer.svg" className="img-fluid"/>
            </div>
            <div className="d-flex justify-content-center align-items-center col-sm-12">
                <ul className="list-unstyled d-flex flex-column align-items-center justify-content-center">
                    <li><span className="text-muted badge text-wrap">© Copyright Alkemy Challenge</span></li>
                    <li><span className="text-muted badge text-wrap">Julián camargo</span></li>    
                </ul>
            </div>

            <ul className="nav col-md-4 d-flex col-md-12 justify-content-center">
                <li className="ms-3">
                    <a class="text-muted" href="https://www.linkedin.com/in/julian-camargo/">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a class="text-muted" href="https://github.com/julian87nicolas">
                        <i class="bi bi-github"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a class="text-muted" href="https://www.instagram.com/julian87nicolas/">
                        <i className="bi bi-instagram"></i>
                    </a>
                </li>
            </ul>
            
        </footer>
        </div>
    )
}

export default Footer;
