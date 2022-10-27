import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light color-navbar">
            <div className="container-fluid" >

                <a className="navbar-brand fw-bold fst-italic color-deltexto"  href="#">CROSSFIT EQUIPMENT</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                    <a className="nav-link  color-deltexto" aria-current="page" href="#">Home</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link color-deltexto" href="#">Productos</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link color-deltexto" href="#">Contactanos</a>
                    </li>

                </ul>

                <CartWidget />
            </div>
        </nav>
      </>
    );
}

export default NavBar;