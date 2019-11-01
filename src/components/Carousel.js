import React from 'react';
class Carousel extends React.Component {
    render() {
        return (
            <div id="myCarousel" className="owl-one carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="https://freshdesignweb.com/demo/template/ustora/img/h4-slide.png"  />
                    </div>
                    <div className="item">
                        <img src="https://freshdesignweb.com/demo/template/ustora/img/h4-slide3.png" />
                    </div>
                    <div className="item">
                        <img src="https://freshdesignweb.com/demo/template/ustora/img/h4-slide4.png" />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }

}

export default Carousel;
