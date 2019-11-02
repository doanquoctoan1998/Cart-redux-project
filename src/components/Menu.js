import React from 'react';
import { Route, Link } from 'react-router-dom'
const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Phone',
        to: '/phone',
        exact: false
    },
    {
        name: 'Laptop',
        to: '/laptop',
        exact: false
    },
    ,
    {
        name: 'Login',
        to: '/login',
        exact: false
    },
    {
        name: 'Register',
        to: '/register',
        exact: false
    },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : ''
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};
class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <ul className='nav navbar-nav' >
                            {this.showMenu(menus)}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            })
        }
        return result;
    }
}

export default Menu;
