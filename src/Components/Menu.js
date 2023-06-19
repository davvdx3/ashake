import { menu } from "../data";
import { useDispatch } from "react-redux";
import './Menu.css';

const Menu = () => {
    const dispatch = useDispatch();
    return (
        <section className="menu" id="menu">
            <div className="menu__container">
                <h1>menu</h1>
                <div className="menu__food">
                    {menu.map((food) => (
                        <div key={food.id} className="menu__food-card">
                            <img src={food.image} alt={food.typeOfFood} />
                            <dd>
                                <h4>{food.typeOfFood}</h4>
                                <p>{food.price}</p>
                                <button onClick={() => dispatch({ type: 'buy', payload: food })} className="btn">Buy</button>
                            </dd>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Menu;