import { useSelector } from 'react-redux'
import './Order.css';



const Order = () => {
    const order = useSelector(state => state.order)

    return (
        <div className="order-cpt">
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
                        </li>
                    ))}
                </ol>
            </div>
            <div className="total">
                <p>Total:{``}</p>
            </div>
        </div>
    );
}

export default Order;