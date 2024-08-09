import React from "react";
import Hometext from "./homeText";

function Slider1(){
    return(
        <div id="sliderContent">
           { <Hometext 
            headline='You Are Looking'
            span='For Designer ?'
            />}
            <div className="slider-img">
                <img src='https://nexacent-project-2023.netlify.app/assets/images/hero-right-image-3.png' alt="slider-img"></img>
            </div>
        </div>
    );
}

export default Slider1;