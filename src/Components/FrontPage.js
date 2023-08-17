import './FrontPage.css';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const DisplayGreen = ({ plate }) => {
    if (plate < 1) {
        return
    } else {
        return (
            <div className="green">
                <span>{plate}</span>
            </div>
        )
    }
}

const FrontPage = () => {
    const plate = useSelector(state => state.reducer.plate)

    return (
        <section className="fp">
            <div className="fp__box container">
                <div className='fp__header'>
                    <h1>delicious and healthy</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui commodi dolore reprehenderit quas fugiat, corporis nostrum aliquam asperiores dicta expedita.</p>
                </div>
            </div>
            <div className="order-icon__box">
                <Link to='/order' >
                    <FaShoppingBasket className='order-icon' />
                </Link>
                <DisplayGreen plate={plate} />
            </div>
        </section>
    );
}

export default FrontPage;