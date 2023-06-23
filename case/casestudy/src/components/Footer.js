import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

 export function Footer() {

    return(
        <>
            <div className="container-fluid mt-5">
                <div className="card bg-white mx-5">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"/>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Services</h5>
                            <ul>
                                <li>IT Consulting</li>
                                <li>Development</li>
                                <li>Cloud</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Industries</h5>
                            <ul className="card-text">
                                <li>Finance</li>
                                <li>Public Sector</li>
                                <li>Smart Office</li>
                                <li>Retail</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Company</h5>
                            <ul className="card-text">
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <li>Join Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4"/>
                    <div className="row" style={{fontSize:"10px"}}>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="pull-left">
                                <p><i className="fa fa-copyright"/> 2023 Đức Thắng </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="pull-right mr-4 d-flex policy">
                                <div>Terms of Use</div>
                                <div>Privacy Policy</div>
                                <div>Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}