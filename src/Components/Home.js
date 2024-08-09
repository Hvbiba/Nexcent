import React from "react";
import Navbar from "./Navbar";
import Slider1 from "./slider1";
import Slider3 from "./slider3";
import Slider2 from "./slider2";

function Home(){
   return(
    <div className="contaianer" id="home-page">
        <Navbar />
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <Slider3/>
        </div>
        <div className="carousel-item">
        <Slider1/>
        </div>
        <div className="carousel-item">
        <Slider2/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
   );
}

export default Home;