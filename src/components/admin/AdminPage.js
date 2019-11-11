import React from 'react';
import './../layout/admin.css'
class AdminPage extends React.Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-inverse visible-xs">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="#">Logo</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Dashboard</a></li>
                                <li><a href="#">Products </a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Sale</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row content">
                        <div className="col-sm-3 sidenav hidden-xs">
                            <h2>Logo</h2>
                            <ul className="nav nav-pills nav-stacked">
                                <li className="active"><a href="#section1">Dashboard</a></li>
                                <li><a href="#section2">Page</a></li>
                                <li><a href="#section3">Chart</a></li>
                                <li><a href="#section3">Log Out</a></li>
                            </ul><br />
                        </div>
                        <br />
                        <div className="col-sm-9">
                            <div className="well">
                                <h4>Dashboard</h4>
                                <p>Some text..</p>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="well">
                                        <h4>Product</h4>
                                        <p>1 Million</p>
                                        <a href="#">View Details:<span className="glyphicon">&#xe032;</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="well">
                                        <h4>Catagories</h4>
                                        <p>24 Thousand</p>
                                        <a href="#">View Details:<span className="glyphicon">&#xe032;</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="well">
                                        <h4>New Orders</h4>
                                        <p>12400 Orders</p>
                                        <a href="#">View Details:<span className="glyphicon">&#xe032;</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="well">
                                        <h4>Revenue</h4>
                                        <p>Up 30%<span className="glyphicon">&#xe093;</span></p>
                                        <a href="#">View Details:<span className="glyphicon">&#xe032;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-9 mb">
                                <h1>Luxury Phone</h1>

                                <p>Apple</p>
                                <div class="container">
                                    <div class="skills html">60%</div>
                                </div>

                                <p>SamSung</p>
                                <div class="container">
                                    <div class="skills css">30%</div>
                                </div>

                                <p>Huwei</p>
                                <div class="container">
                                    <div class="skills js">8%</div>
                                </div>

                                <p>Orther</p>
                                <div class="container">
                                    <div class="skills php">2%</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="well">
                                        <p>Text</p>
                                        <p>Text</p>
                                        <p>Text</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="well">
                                        <p>Text</p>
                                        <p>Text</p>
                                        <p>Text</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="well">
                                        <p>Text</p>
                                        <p>Text</p>
                                        <p>Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="well">
                                        <p>Text</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="well">
                                        <p>Text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default AdminPage;
