import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from './Menu'
import routes from './../routes'

class MenuBar extends React.Component {
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }
    render() {
        return (
            <Router>
                <Menu />
                {this.showContentMenu(routes)}
            </Router>
        );
    }
}
export default MenuBar;
