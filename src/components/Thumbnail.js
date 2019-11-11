import React from 'react';
import "./layout/margin.css"
import "./layout/Thumbnail.css"
import './ThumbnailItem'
import ThumbnailItem from './ThumbnailItem';
class Thumbnail extends React.Component {
    render() {
        var { thumb } = this.props
        return (
            <>
                {/* {this.showThumnail(thumb)} */}
            </>

        );
    }
    showThumnail = (thumb) => {
        return (
            thumb.map((thu, index) => {
                console.log(thu.product[0].image)
                return (
                    <div key={index}>
                        <h3 className="mb-10" >{thu.label}</h3>
                        <span><a>See more >>></a> </span>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature">
                                    <a>
                                        <img src={thu.product[0].image} alt={thu.product[0].name} style={{ width: '100%' }} />
                                    </a>
                                    <h3>{thu.product.slice(0, 1).name} </h3>
                                </div>
                                <div className="caption">
                                    <div className="price">
                                        <strong>{thu.product[0].price} </strong>
                                    </div>
                                </div>
                            </div>
                            <ThumbnailItem products={thu.product.slice(1, 5)} />
                        </div>
                    </div>
                );
            })
        );

    }

}

export default Thumbnail;
