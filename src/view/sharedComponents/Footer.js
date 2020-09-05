
import React, { Component } from 'react';
import '../../style/shared.css';

export class Footer extends Component {
    render() {
        return (
            <footer className="pageFooter">
                
                <nav  className="navbar text-center">
                    <div className="col-sm">
                        <p className="rights">All Rights Reserved Designed by Shop <i>CL<span className="letteri">i</span>Q</i> <br />Designed by BootstrapMade </p>
                    </div>
                    <div className="col-sm">
                       <span>  Download App  <i className="fa fa-android"> </i>{"   "}<i className="fa fa-apple"></i></span>
                    </div>
                    <div className="col-sm">
                        <span className="fa fa-facebook float "> &nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <span className="fa fa-twitter float ">&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <span className="fa fa-linkedin float ">&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <span className="fa fa-pinterest-p float ">&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <span className="fa fa-google-plus float "></span>
                    </div>
                </nav>
            </footer>
        )
    }
}