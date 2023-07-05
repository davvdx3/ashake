import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__container container">
                <ul className="nav__items">
                    <li className="nav__item"><a href="/">home</a></li>
                    <li className="nav__item"><a href="#menu">menu</a></li>
                    <li className="nav__item"><a href="#footer">contact</a></li>
                </ul>
                <div className="logo-box">
                    <span className="logo">ashake</span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;