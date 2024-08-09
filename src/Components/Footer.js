import React from "react";
import Logo from "./logo";

function Footer(){
    return(
        <footer>
            <div className="container">
                <Logo /> 
                <br/>
                <p>Copyright © 2020 Nexcent ltd.<br/>All rights reserved</p>
            </div>
            <div className="container">
                <h6>Company</h6>
                <a href="#">About us</a>
                <a href="#">Blog</a>
                <a href="#">Contact us</a>
                <a href="#">Pricing</a>
                <a href="#">Testimonials</a>
            </div>
            <div className="container">
                <h6>Support</h6>
                <a href="#">Help center</a>
                <a href="#">Terms of service</a>
                <a href="#">Legal</a>
                <a href="#">Privacy policy</a>
                <a href="#">Status</a>
            </div>
            <div className="container">
                <h5>Stay up to date</h5><br/>
                <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email@" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                </div>
            </div>
        </footer>
    );
}
export default Footer;











