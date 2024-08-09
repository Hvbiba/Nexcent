import React from "react";

function Hometext(props){
    return(
        <div className="text-container">
            <h1>
            {props.headline}<br/>
            <span>{props.span}</span>
            </h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <button className="btn" type="button">Register</button>
        </div>
    );
}

export default Hometext;