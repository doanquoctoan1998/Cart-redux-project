import React from 'react';
import './layout/TrendingCarousel.css'
import TrendingCarouselItemContainer from './../containers/TrendingCarouselItemContainer';
class TrendingCarousel extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Trending <b>Products</b></h2>
                        <div  className="carousel slide" >
                            <TrendingCarouselItemContainer/>
                            {/* Carousel controls */}
                            <button className="carousel-control left carousel-control-prev" onClick={this.controlPre}  >
                                <i className="fa fa-angle-left" />
                            </button>
                            <button className="carousel-control right carousel-control-next" onClick={this.controlNext}  >
                                <i className="fa fa-angle-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
    controlPre = () => {
        this.props.reduction();
    }
    controlNext = () => {
        this.props.increase();
    }
}
export default TrendingCarousel;
