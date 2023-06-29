import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export function Header() {
    return (
        <div>
            <nav
                style={{backgroundColor: "#149570", padding: 15}}
                className="navbar navbar-expand-lg "
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <img
                                style={{height: 56}}
                                src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                                alt=""
                            />
                            <li className="nav-item">
                                <a style={{color: "#fff"}} className="nav-link active" href="#">
                                    GIỚI THIỆU
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Customer
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/customer">
                                        Customer List
                                    </a>

                                    <a className="dropdown-item" href="/createCustomer">
                                        Create Customer
                                    </a>

                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"     aria-haspopup="true"      aria-expanded="false"
                                >
                                    Contract
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/contract">
                                        Contract List
                                    </a>
                                    <a className="dropdown-item" href="/createContract">
                                        Create Contract
                                    </a>

                                </div>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"     data-bs-toggle="dropdown"       href="#"           role="button"       aria-haspopup="true"    aria-expanded="false"    >
                                    Services
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/createAllService">
                                        Create Service
                                    </a>

                                </div>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input
                                style={{backgroundColor: "white"}}
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button
                                className="btn btn-secondary my-2 my-sm-0"
                                style={{backgroundColor: "black"}}
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            {/*<header*/}
            {/*    style={{ paddingLeft: 30, paddingRight: 30, height: 500, width: "100%" }}*/}
            {/*>*/}
            {/*        <div*/}
            {/*            id="carouselExampleCaptions"*/}
            {/*            className="carousel slide"*/}
            {/*            data-bs-ride="carousel"*/}
            {/*        >*/}
            {/*                <div className="carousel-indicators">*/}
            {/*                        <button*/}
            {/*                            type="button"*/}
            {/*                            data-bs-target="#carouselExampleCaptions"*/}
            {/*                            data-bs-slide-to={0}*/}
            {/*                            className="active"*/}
            {/*                            aria-current="true"*/}
            {/*                            aria-label="Slide 1"*/}
            {/*                        />*/}
            {/*                        <button*/}
            {/*                            type="button"*/}
            {/*                            data-bs-target="#carouselExampleCaptions"*/}
            {/*                            data-bs-slide-to={1}*/}
            {/*                            aria-label="Slide 2"*/}
            {/*                        />*/}
            {/*                        <button*/}
            {/*                            type="button"*/}
            {/*                            data-bs-target="#carouselExampleCaptions"*/}
            {/*                            data-bs-slide-to={2}*/}
            {/*                            aria-label="Slide 3"*/}
            {/*                        />*/}
            {/*                </div>*/}
            {/*                <div className="carousel-inner">*/}
            {/*                        <div*/}
            {/*                            className="carousel-item active"*/}
            {/*                            style={{*/}
            {/*                                    backgroundImage:*/}
            {/*                                        'url("https://dulichchat.com/wp-content/uploads/2019/04/khu-nghi-duong-naman-retreat-da-nang-dulichchat-3.png")'*/}
            {/*                            }}*/}
            {/*                        >*/}
            {/*                                <div className="carousel-caption">*/}
            {/*                                        <h5>Kỳ Nghĩ Tuyệt Vời</h5>*/}
            {/*                                        <p>*/}
            {/*                                                Bạn Hãy Thư Giãn Phút Giây Tuyệt Vời Bên Cạnh Người Mình Yêu*/}
            {/*                                                Thương{" "}*/}
            {/*                                        </p>*/}
            {/*                                </div>*/}
            {/*                        </div>*/}
            {/*                        <div*/}
            {/*                            className="carousel-item"*/}
            {/*                            style={{*/}
            {/*                                    backgroundImage:*/}
            {/*                                        'url("https://dulichchat.com/wp-content/uploads/2019/04/khu-nghi-duong-premier-village-da-nang-dulichchat-1.png")'*/}
            {/*                            }}*/}
            {/*                        >*/}
            {/*                                <div className="carousel-caption">*/}
            {/*                                        <h5>Second slide label</h5>*/}
            {/*                                        <p>Some representative placeholder content for the second slide.</p>*/}
            {/*                                </div>*/}
            {/*                        </div>*/}
            {/*                        <div*/}
            {/*                            className="carousel-item"*/}
            {/*                            style={{*/}
            {/*                                    backgroundImage: 'url("https://wallpapercave.com/wp/wp3782995.jpg")'*/}
            {/*                            }}*/}
            {/*                        >*/}
            {/*                                <div className="carousel-caption">*/}
            {/*                                        <h5>Third slide label</h5>*/}
            {/*                                        <p>Some representative placeholder content for the third slide.</p>*/}
            {/*                                </div>*/}
            {/*                        </div>*/}
            {/*                </div>*/}
            {/*                <button*/}
            {/*                    className="carousel-control-prev"*/}
            {/*                    type="button"*/}
            {/*                    data-bs-target="#carouselExampleCaptions"*/}
            {/*                    data-bs-slide="prev"*/}
            {/*                >*/}
            {/*                        <span className="carousel-control-prev-icon" aria-hidden="true" />*/}
            {/*                        <span className="visually-hidden">Previous</span>*/}
            {/*                </button>*/}
            {/*                <button*/}
            {/*                    className="carousel-control-next"*/}
            {/*                    type="button"*/}
            {/*                    data-bs-target="#carouselExampleCaptions"*/}
            {/*                    data-bs-slide="next"*/}
            {/*                >*/}
            {/*                        <span className="carousel-control-next-icon" aria-hidden="true" />*/}
            {/*                        <span className="visually-hidden">Next</span>*/}
            {/*                </button>*/}
            {/*        </div>*/}
            {/*</header>*/}
        </div>


    )
}