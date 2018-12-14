import React, { Component } from 'react'


import {
    Link
} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <nav id="main-nav" className="navbar-expand-xl fixed-top">
                    <div className="row">
                        <div className="container-fluid top-bar">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <ul className="contact-details float-left">
                                            <li>
                                                <Link className="btn btn-info btn-sm" to="/novoAnimal"><i className="fa fa-plus"></i> cadastre um animal para adoção :=)  </Link>
                                            </li>
                                        </ul>
                                        <ul className="social-list float-right list-inline">
                                            <li className="list-inline-item"><a title="Facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a title="Twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a title="Instagram" href="#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar container-fluid">
                            <div className="container ">
                                <a className="navbar-brand" href="index.html">
                                    <i className="flaticon-dog-20"></i><span>BichoS!</span>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggle-icon">
                                        <i className="fas fa-bars"></i>
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="  ">
                                            <Link className="btn btn-primary" to="/">Home  </Link>
                                        </li>
                                        <li className=" ">
                                            <Link className="btn btn-success" to="/adote">Nossa História  </Link>
                                        </li>
                                        <li className=" ">
                                            <Link className="btn btn-info" to="/adote">Adote  </Link>
                                        </li>

                                        <li className=" ">
                                            <Link className="btn btn-warning" to="/adote">Ajude :)  </Link>
                                        </li>
                                        <li className=" ">
                                            <Link className="btn btn-success" to="/adote">Contato  </Link>
                                        </li>
                                        <li className=" ">
                                            <Link className="btn btn-danger" to="/adote">Login</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                </nav>

            </div>
        )
    }
}

export default Header