import { useSelector, useDispatch } from 'react-redux'
import summarizer from '../summarizer';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Order.css';
import { selectCount, del, clr } from '../Reducer';
import { FaArrowLeft } from "react-icons/fa";


const Order = () => {
    const order = useSelector(selectCount)
    const { totalCost } = useSelector(summarizer)
    const dispatch = useDispatch();

    const handleDel = (id) => {
        dispatch(del(id));
    }

    const handlePay = () => {
        // CODE TO HANDLE PAYMENT
    }

    const handleClear = () => {
        dispatch(clr());
    }

    return (
        <div className="order-cpt">
            <div className="container">
                <Link to='/' className="order-cpt__icon">
                    <FaArrowLeft className='order-cpt__icon--right' />
                </Link>
                <h1>Order</h1>
                <div className='order-cpt__container'>
                    <div className='row'>
                        <span className='row-header'>title</span>
                        <span className='row-header'>qty</span>
                        <span className='row-header'>price</span>
                    </div>
                    <ol>
                        {order.map(({ id, name, qty, price }) => (
                            <li key={id} className='row'>
                                <span>{name}</span>
                                <span>{qty}</span>
                                <span>{`#${price}`}</span>
                                <button className='btn' onClick={() => handleDel(id)}>{<FaTrash />}</button>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="order-cpt__sum">
                    <div>
                        <p>Total cost: ${totalCost}</p>
                    </div>
                    <button className='btn pay' onClick={handlePay}>
                        pay
                    </button><br />
                    <button className='btn clear' onClick={handleClear}>
                        clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Order;