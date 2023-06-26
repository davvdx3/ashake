import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer__box container">
                <div className="footer__col-1">
                    <div className="logo-box">
                        <span className="logo">ashake</span>
                    </div>
                    <h3>Contact</h3>
                    <p>ashakeshop@getshop.com</p>
                    <p>+2348100000022</p>
                </div>
                <div className="footer__col-2">
                    <h3>Company</h3>
                    <p>FAQs</p>
                    <p>User policy</p>
                    <p>Support</p>
                </div>
                <div className="footer__col-3">
                    <h3>Locations</h3>
                    <p>Sango</p>
                    <p>Eleyele</p>
                    <p>Ojo</p>
                    <p>Lekki</p>
                    <p>ikoyi</p>
                </div>
                <div className="footer__social">
                    <label>social:<FaFacebookF className="social-icon" /><FaInstagram className="social-icon" /><FaTwitter className="social-icon" /></label>
                </div>
            </div>
            <p className="footer__copyright">copyright2023 Ashake. All right reserved</p>
        </footer>
    );
}

export default Footer;