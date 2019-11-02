import React from 'react';
import './layout/Login.css';
export default class Register extends React.Component{
    render(){
        return (
            <form className="Login">
                <div className="fom">
                <br/>
                <input placeholder="Email" type="email"></input><br/>
                <br/>
                <input placeholder="Mật khẩu" type="password"></input><br/>
                <br/>
                <input placeholder="Nhập lại mật khẩu" type="password"></input><br/>
                <button type="submit">Đăng ký</button>
                </div>
            </form>
            );
    }
}