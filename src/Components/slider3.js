import React from "react";
import Hometext from "./homeText";


function Slider3(){
    return(
        <div id="sliderContent">
           { <Hometext 
            headline='Create Your Website'
            span='Today!'
            />}
            <div className="slider-img">
                <img src='https://nexacent-project-2023.netlify.app/assets/images/hero-right-image-2.png' alt="slider-img"></img>
            </div>
        </div>
    );
}

export default Slider3;
