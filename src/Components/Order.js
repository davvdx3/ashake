import { useSelector, useDispatch } from 'react-redux'
import './Order.css';



const Order = () => {
    const order = useSelector(state => state.order)
    const dispatch = useDispatch();

    const handleDel = (id) => {
        dispatch({ type: "del", payload: id })
    }

    const handleClear = () => {
        dispatch({ type: "clr" })
    }

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
                            <button onClick={() => handleDel(id)}>del</button>
                        </li>
                    ))}
                </ol>
            </div>
            <div className="order__sum">
                <div className="total">
                    <p>Total cost:{``}</p>
                </div>
                <button onClick={handleClear}>
                    clear
                </button>
            </div>
        </div>
    );
}

export default Order;