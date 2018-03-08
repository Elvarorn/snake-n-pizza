import React from 'react';

const AboutUs = () => {
    return (
        <div className="About-Us">
            <h2 className="about-title">About Snake&Pizza</h2>
            <p className="textaboutus">
                Snake&Pizza is a small pizza making family based in the small nordic
                island of Iceland. <br /> we are proud descendents of the ancient viking and
                we try to incorporate that in our pizzas.
            </p>
            <div className="image-of-bois">
                <img src="https://image.ibb.co/fLnt3S/boiiss.png" alt="strakarnir" width="400" height="400"></img>
                <p className="text-image">Proud owners of Snake&Pizza: Elvar Örn Antonsson, Dagur Árnason, Jóhann Einar Ísaksson</p>
            </div>

        </div>
    );
};

export default AboutUs;
