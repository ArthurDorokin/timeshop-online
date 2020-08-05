import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Content.css'

class Content extends Component {

    render() {
        const {catalog} = this.props
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }
        return (
            <div className="content">
                <div className="container">
                    <div className="wrap-hit">
                        <h2>Хиты продаж</h2>
                        <div className="blocks-hit">
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
                        </div>
                    </div>
                    <div className="wrap-men-or-she"></div>
                    <div className="wrap-she"></div>
                </div>
            </div>
        )
    }
}

export default Content