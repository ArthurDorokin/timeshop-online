import React from "react";
import Slider from "react-slick";

export const Hit = ({catalog}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
            {catalog.filter((item) => item.filterIcon.val === 0).map((item) =>
                <div className="hit-item" key={item.id}>
                    <div className="hit-blocks">
                        <img src={item.img} alt={item.alt}/>
                        <span className="flag-hit">{item.filterIcon.name}</span>
                        <p className="description">{item.description}</p>
                        <p className="price">{item.price} грн</p>
                    </div>
                    <div className="btn-price">{item.buy}</div>
                </div>
            )}
        </Slider>
    )
}
