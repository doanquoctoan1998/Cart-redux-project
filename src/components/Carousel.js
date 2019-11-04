import React from 'react';
import { increaseIndex } from '../actions';
class Carousel extends React.Component {
    render() {
        return (
            <div className="owl-one carousel slide" >
                <div className="carousel-inner">
                    {this.props.children}
                </div>
                {/* Left and right controls */}
                <a className="left carousel-control" >
                    <span className="glyphicon glyphicon-chevron-left" onClick = {this.controlPre} />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control">
                    <span className="glyphicon glyphicon-chevron-right" onClick = {this.controlNext} />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
    controlPre = ()=>{
        this.props.reduction();
    }
    controlNext = ()=>{
        this.props.increase();
    }

}

export default Carousel;
