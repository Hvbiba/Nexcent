import React from "react";

function Cards(){
    const cardsObj =[
        {
            id:1,
            img:'https://nexacent-project-2023.netlify.app/assets/images/marketing-card-1.png',
            text:'Creating Streamlined Safeguarding Processes with OneRen.'
        },
        {
            id:2,
            img:'https://nexacent-project-2023.netlify.app/assets/images/marketing-card-2.png',
            text:'What are your responsibilities and how can you manage them?'
        },
        {
            id:3,
            img:'https://nexacent-project-2023.netlify.app/assets/images/marketing-card-3.png',
            text:'Revamping the Membership Model with Triathlon Australia.'
        }
    ];
    return(
        <div className="container" id="grid-cards">
           { cardsObj.map((card)=>(
                <div key={card.id}>
                   <img src={card.img} alt={card.title} />
                    <h5>
                        {card.text} 
                        <br></br> <br></br> 
                        <span>Read More</span>
                    </h5>
                 </div>
                ))
            }
        </div>
    );
}

export default Cards