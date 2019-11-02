import React from 'react';
import Login from './Login'
import Register from './Register'
import Home from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class MenuBar extends React.Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link className="navbar-brand" to="/trang-chu">BuBuShop</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to='/dien-thoai'>Điện thoại</Link></li>
                            <li><Link to='/laptop'>Laptop</Link></li>
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
                            <li><Link to="/dang-nhap">Đăng nhập</Link></li>
                            <li><Link to="/dang-ky">Đăng ký</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path='/dang-nhap'>
                    <Login></Login>
                </Route>
                <Route path='/dang-ky'>
                    <Register></Register>
                </Route>
                <Route path='/trang-chu'>
                    <Home/>
                </Route>
                <Route path='/dien-thoai'>
                    
                </Route>
                <Route path='/laptop'>
                    
                </Route>
            </Switch>
            </Router>
            
            

        );
    }

}

export default MenuBar;
