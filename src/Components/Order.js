import { useSelector } from 'react-redux'
import './Order.css';



const Order = () => {
    const order = useSelector(state => state.items)
    return (
        <div className="order__container">
            <h1>Order</h1>
            <table>
                <tr>
                    <th>S/N</th>
                    <th>title</th>
                    <th>qty</th>
                    <th>price</th>
                </tr>
                {order.map(({ id, typeOfFood, price }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{typeOfFood}</td>
                        <td>2</td>
                        <td>{`#${price}`}</td>
                    </tr>
                ))}
            </table>
            <div className="total">
                <p>Total:</p>
            </div>
        </div>
    );
}

export default Order;