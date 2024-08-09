import React from "react";
import Hometext from "./homeText";

function Slider2(){
    return(
        <div id="sliderContent">
           { <Hometext 
            headline='Lessons and insights'
            span=' from 8 years'
            />}
            <div className="slider-img">
                <img src='https://nexacent-project-2023.netlify.app/assets/images/hero-right-image.png' alt="slider-img"></img>
            </div>
        </div>
    );
}

export default Slider2;
