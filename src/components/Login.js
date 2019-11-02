import React from 'react';
import './layout/Login.css';

export default class Login extends React.Component {

    render() {
        return (
            <form className="Login">
                <div className="fom">
                    <br />
                    <input placeholder="Tên đăng nhập" type="text"></input><br />
                    <br />
                    <input placeholder="Mật khẩu" type="password"></input><br />
                    <button type="submit">Đăng nhập</button>
                </div>
            </form>
        );
    }
}