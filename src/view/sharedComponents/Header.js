import React, { Component } from 'react';
import '../../style/shared.css';

export class Header extends Component {

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand titleName" href="#">
                    <p><i className="homeIcon fa fa-shopping-bag"></i>{' '}SHOP <i className="italicHead">CL<span className="letteri">i</span>Q</i></p>
                </a>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse form-inline" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/addProduct">Add Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/updateProduct">Edit Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/deleteProduct">Delete Product</a>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}
