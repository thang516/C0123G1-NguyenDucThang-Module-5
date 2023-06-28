import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export function HeaderVideo() {
    return (
            <header>
                <div id="indicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <video autoPlay loop muted playsInline="playsinline" preload="metadata">
                                <source
                                    src="https://www.danang.intercontinental.com/wp-content/uploads/2023/04/IHG21_AMBIENT-HEADER_Apr21_FINAL.mp4"
                                    type="video/mp4"
                                />
                            </video>
                            <div className="carousel-caption d-none d-md-block" >
                                <h3
                                    className="display-4"
                                    style={{
                                        color: "white",
                                        margin: "0 auto",
                                        fontSize: "larger",
                                        fontFamily: "cursive",
                                        width: "100%",
                                        borderRadius: "0"
                                    }}>
                                    Relax In Special Moment
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}