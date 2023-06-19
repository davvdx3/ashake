import NavBar from '../Utilities/NavBar'
import FrontPage from './FrontPage';
import Menu from './Menu';
import Footer from '../Utilities/Footer';
import Reviews from './Reviews';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <FrontPage />
            <Menu />
            <Reviews />
            <Footer />
        </div>
    );
}

export default Home;