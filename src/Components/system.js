import React from "react";

function System(){
    const obj = [
        {
            id:1,
            img:'https://nexacent-project-2023.netlify.app/assets/images/community-icon-1.png',
            title:'Membership Organisations',
            text:'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            id:2,
            img:'https://nexacent-project-2023.netlify.app/assets/images/community-icon-2.png',
            title:'National Associations',
            text:'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            id:3,
            img:'https://nexacent-project-2023.netlify.app/assets/images/community-icon-3.png',
            title:'Clubs And Groups',
            text:'Our membership management software provides full automation of membership renewals and payments'
        }
    ]
     return(
        <div className="container" id="service-section">
            <div>
                <h3>Manage your entire community <br/>in a single system</h3>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className="obj-cards">
                { obj.map((card)=>(
                <div key={card.id} className="card">
                   <img src={card.img} alt={card.title} />
                   <h4>{card.title}</h4>
                   <p>{card.text}</p>
                 </div>
                ))
                }
            </div>
        </div>
     );
}
export default System;