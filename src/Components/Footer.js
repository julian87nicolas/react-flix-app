
import "../css/footer.css"

function Footer() {
    return (
        <div className="container w-100">
        <footer className="d-flex flex-wrap py-3 my-4 border-top flex-md-column justify-content-md-center align-items-md-center">
            <div>
                <img src="logo-footer.svg" />
            </div>
            <div className="col-md-8 d-flex justify-content-md-start align-items-center col-md-12 justify-content-md-center">
                <ul className="list-unstyled d-flex flex-column align-items-center">
                    <li><span className="text-muted">© Copyright Alkemy Challenge</span></li>
                    <li><span className="text-muted">Julián camargo</span></li>    
                </ul>
            </div>

            <ul className="nav col-md-4 d-flex col-md-12 justify-content-sm-center">
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
