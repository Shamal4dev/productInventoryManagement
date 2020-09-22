import React, { Component } from 'react';
import '../../style/shared.css';
import { NavLink } from 'react-router-dom';
import {LoginIcon} from './LoginIcon';

export class Header extends Component {

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand titleName" href="/">
                    <p><i className="homeIcon fa fa-shopping-bag"></i>{' '}SHOP <i className="italicHead">CL<span className="letteri">i</span>Q</i></p>
                </a>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse form-inline" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active"> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/addProduct" className="nav-link" activeClassName="active"> Add Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/updateProduct" className="nav-link" activeClassName="active"> Edit Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/deleteProduct" className="nav-link" activeClassName="active"> Delete Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active"> About Us</NavLink>
                        </li>
                    </ul>

                </div>
                <div>
                    <LoginIcon />
                </div>
            </nav>
        )
    }
}
