import React from 'react';
import './layout/TrendingCarousel.css'
class TrendingCarouselItem extends React.Component {
    render() {

        var rate = Math.floor(Math.random() * 5) + 1;
        var sale = Math.floor(Math.random() * 100);
        var { products, trendingcarousel } = this.props;
        var active = 'active'
        return (
            <div className="carousel-inner">
                {this.showTrendingItem(products, rate, trendingcarousel)}
            </div>
        );

    }
    showTrendingItem = (products, rate, trendingcarousel) => {
        var result = [];
        for (let i = 0; i < products.length; i += 4) {
            console.log(trendingcarousel)
            var active = '';
            if ((i) / 4 === trendingcarousel) {
                active = 'active'
                console.log(active)
            }
            result.push(this.showContent(products.slice(i, i + 4), rate, active));
        }
        return result;
    }
    showContent = (products, rate, active) => {
        console.log(products)
        return (
            <div className={`item carousel-item ${active}`}>
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div key={index} className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box">
                                        <img src={product.image} className="img-responsive img-fluid" alt={product.name} />
                                    </div>
                                    <div className="thumb-content">
                                        <h4>{product.name}</h4>
                                        <p className="item-price"><strike>${product.price}</strike> <span>$349.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    {this.showRating(rate)}
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    showRating = (rate) => {
        if (rate > 0) {
            var result = [];
            for (let i = 1; i <= rate; i++) {
                result.push(<i key={i} className="fa fa-star" />);
            }
            for (let i = 1; i <= 5 - rate; i++) {
                result.push(<i key={i + rate} className="fa fa-star-o" />);
            }
            return result;
        }
    }
}
export default TrendingCarouselItem;
