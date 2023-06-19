import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <ul className="nav__menu">
                    <li className="nav__item"><a href="/">home</a></li>
                    <li className="nav__item"><a href="#menu">menu</a></li>
                    <li className="nav__item"><a href="#footer">contact</a></li>
                </ul>
                <div className="logo">
                    <p className="logo-i">ashake</p>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;