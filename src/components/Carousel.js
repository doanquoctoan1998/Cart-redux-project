import React from 'react';
class Carousel extends React.Component {
    render() {
        console.log(this.props.children)
        return (
            <div id="myCarousel" className="owl-one carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {/* Wrapper for slides */}
                    <div className="item active">
                        <img src="https://freshdesignweb.com/demo/template/ustora/img/h4-slide.png" alt ="IPhone 7" />
                    </div>
                    {this.props.children}
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
