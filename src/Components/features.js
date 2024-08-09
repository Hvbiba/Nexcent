import React from "react";

function Feature() {
    const gridObj = [
        {
            id: 1,
            img: 'https://nexacent-project-2023.netlify.app/assets/images/helping-icon-1.png',
            num: '2,245,341',
            text: 'Members'
        },
        {
            id: 2,
            img: 'https://nexacent-project-2023.netlify.app/assets/images/helping-icon-2.png',
            num: '46,328',
            text: 'Clubs'
        },
        {
            id: 3,
            img: 'https://nexacent-project-2023.netlify.app/assets/images/helping-icon-3.png',
            num: '828,867',
            text: 'Event Bookings'
        },
        {
            id: 4,
            img: 'https://nexacent-project-2023.netlify.app/assets/images/helping-icon-4.png',
            num: '1,926,436',
            text: 'Payments'
        }
    ];

    return (
        <div id="feature-section">
        <div className="container" id="container">
            <div id="text">
                <h3>Helping a local<br/>
                    <span>business reinvent itself</span><br />
                </h3>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="grid">
                {gridObj.map((card) => (
                    <div key={card.id} id="box">
                        <img src={card.img} alt={card.text} />
                        <div>
                            <h4>{card.num}</h4>
                            <p>{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Feature;
