import React from 'react';
import "./../App.css"
class Thumbnail_2 extends React.Component {
    render() {
        return (
            <div>
                <h3>Máy tính nổi bật nhất</h3>
                <div className="row">
                    <div className="col-md-5 col-lg-5">
                        <div className="featured-article ">
                            <a href="#">
                                <img src="http://placehold.it/482x330" alt="" className="thumb" />
                            </a>
                            <div className="block-title">
                                <h2>Lorem ipsum dolor asit amet</h2>
                            </div>
                        </div>
                        {/* /.featured-article */}
                    </div>
                    <div className="col-md-7 col-lg-7">
                        <ul className="media-list main-list ">
                            <li className="media col">
                                <a className="pull-left" href="#">
                                    <img className="media-object" src="http://placehold.it/150x100" alt="..." />
                                </a>
                                <div className="media-body ">
                                    <h4 className="media-heading">Lorem ipsum dolor asit amet</h4>
                                </div>
                            </li>
                            <li className="media col">
                                <a className="pull-left" href="#">
                                    <img className="media-object" src="http://placehold.it/150x100" alt="..." />
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Lorem ipsum dolor asit amet</h4>
                                </div>
                            </li>
                            <li className="media col">
                                <a className="pull-left" href="#">
                                    <img className="media-object" src="http://placehold.it/150x100" alt="..." />
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Lorem ipsum dolor asit amet</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div></div>
        );
    }

}

export default Thumbnail_2;
