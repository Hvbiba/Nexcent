import React from "react";

function Product(){
    return(
        <div  id="product">
            <div className="container">
                <img src="https://nexacent-project-2023.netlify.app/assets/images/customer-section-left.png"/>
                <div>
                    <p>     
                    Maecenas dignissim justo eget nulla rutrum molestie.
                    Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                    Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, 
                    gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                    Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
                    Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. 
                    Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. 
                    Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                    eget efficitur libero condimentum id. Curabitur id 
                    nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h6><span>Tim Smith</span></h6>
                    <p>British Dragon Boat Racing Association</p>
                    <button type="button" className="btn">Meet all customers</button>
                </div>
            </div>


        </div>
    );
}
export default Product;