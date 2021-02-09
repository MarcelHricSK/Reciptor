import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="landing">
            <div className="landingWrapper">
                <div className="landingBg">
                    <img src="/static/img/landing.jpg" alt=""/>
                </div>
                <div className="landingText">
                    <h1>Cooking<br/>for everyone</h1>
                    <p>CookBook made with love </p>
                    <button>Browse recipes<img src="/static/img/ico/browse.svg" alt=""/></button>
                </div>
            </div>
        </section>
    );
}

export default Hero;