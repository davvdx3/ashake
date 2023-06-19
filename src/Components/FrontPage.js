import './FrontPage.css';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';

const FrontPage = () => {
    return (
        <section className="fp">
            <div className="fp__container">
                <div className='fp__col-1'>
                    <h1>delicious and healthy</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui commodi dolore reprehenderit quas fugiat, corporis nostrum aliquam asperiores dicta expedita.</p>
                </div>
            </div>
            <div className="order">
                <Link to='/order' >
                    <FaShoppingBasket className='order-icon' />
                </Link>
            </div>
        </section>
    );
}

export default FrontPage;