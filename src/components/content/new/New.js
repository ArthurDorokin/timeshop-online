import React from "react";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

export const New = ({catalog, addCart}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }]
    }

    return (
        <Slider {...settings}>
            {catalog.filter((item) => item.filterIcon.val === 1).map((item) =>
                <div className="new-item internal-card-item" key={item.id}>
                    <div className="new-blocks _card-item">
                        <NavLink to={`/product/${item.id}`}>
                            <img src={item.img} alt={item.alt}/>
                            <span className="flag-new">{item.filterIcon.name}</span>
                            <p className="description">{item.description}</p>
                            <p className="price">{item.price} грн</p>
                        </NavLink>
                    </div>
                    <div className="btn-price" onClick={() => addCart(item.id)}>{item.buy}</div>
                </div>
            )}
        </Slider>
    )
}
