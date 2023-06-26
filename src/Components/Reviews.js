import { useState } from "react";
import { Rvs } from "../data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './Reviews.css';

const Reviews = () => {
    const [i, setI] = useState(0)

    const handleNext = () => {
        i >= Rvs.length - 1 ? setI(0) : setI(i => i + 1)
    }

    const handlePrev = () => {
        i <= 0 ? setI(Rvs.length - 1) : setI(i => i - 1)
    }

    return (
        <section className="reviews">
            <h1>REVIEWS</h1>
            <div className="reviews__box container">
                <FaAngleLeft onClick={handlePrev} className="icon" />
                <div className="review">
                    <h4>{`@${Rvs[i].name}`}</h4>
                    <p>{Rvs[i].review}</p>
                </div>
                <FaAngleRight onClick={handleNext} className="icon" />
            </div>
        </section>
    );
}

export default Reviews;