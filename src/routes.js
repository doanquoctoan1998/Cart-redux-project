import React from 'react'
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import PhonePage from './components/PhonePage';
import LaptopPage from './components/LaptopPage';
import NotFoundPage from './components/NotFoundPage';
import CartPage from './components/CartPage';

const routes = [
    {
        path : '/',
        exact : true,
        main :()=><HomePage/>
    },
    {
        path : '/phone',
        exact : false,
        main :()=><PhonePage/>
    },
    ,
    {
        path : '/laptop',
        exact : false,
        main :()=><LaptopPage/>
    },
    {
        path : '/login',
        exact : false,
        main :()=><Login/>
    }
    ,
    {
        path : '/register',
        exact : false,
        main :()=><Register/>
    },
    {
        path : '/cart',
        exact : false,
        main :()=><CartPage/>
    },
    {
        path : '',
        exact : false,
        main :()=><NotFoundPage/>
    },
    

];
export default routes;