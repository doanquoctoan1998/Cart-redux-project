import React from 'react';
class MenuBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Phone</a></li>
                            <li><a href="#">Tablet</a></li>
                            <li><a href="#">Phụ kiện</a></li>
                            <li><a href="#">Đồng hồ </a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider" />
                                    <li className="dropdown-header">Nav header</li>
                                    <li><a href="#">Separated link</a></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <button type="submit" className=" fa fa-search btn btn-defaul"></button>
                            </form>
                            <li><a href="../navbar-fixed-top/">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            

        );
    }

}

export default MenuBar;
