import React from "react";
import Cards from "./Cards";
function Test(){
    return(
       <div className="container" id="test-section">
        <div>
            <h3>Caring is the new marketing</h3>
            <p>
                The Nexcent blog is the best place to read about the latest membership insights,
                <br></br>
               trends and more. See who's joining the community, read about how our community
               <br></br>
                are increasing their membership income and lot's more.
            ​</p>
        </div>
        <Cards />
       </div>
    );
}

export default Test;