import { menu } from "../data";
import { useDispatch } from "react-redux";
import './Menu.css';

const Menu = () => {
    const dispatch = useDispatch();

    const handleBuy = (id, name, price, image) => {
        dispatch({ type: 'buy', payload: { id, name, price, image } })
    }

    return (
        <section className="menu" id="menu">
            <div className="container">
                <h1>menu</h1>
                <div className="menu__items">
                    {menu.map(({ id, name, price, image }) => (
                        <div key={id}>
                            <img src={image} alt={name} />
                            <dd>
                                <h4>{name}</h4>
                                <p>{`$${price}`}</p>
                                <button onClick={() => handleBuy(id, name, price, image)} className="btn">Buy</button>
                            </dd>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Menu;