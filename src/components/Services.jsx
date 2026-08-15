import { useState } from "react";
import "../styles/Services.css";
import sliderLeft from "../assets/Icons/MEVIA_SliderLeft.png"
import sliderRight from "../assets/Icons/MEVIA_SliderRight.png"

const offers = [
    {
        title: "STRATEGIE & KONZEPTION",
        description: "EIN ERFOLGREICHER PODCAST BEGINNT MIT EINER KLAREN STRATEGIE.",
    },
    {
        title: "PLANUNG & ORGANISATION",
        description: "MEVIA ÜBERNIMMT DIE ORGANISATORISCHEN AUFGABEN RUND UM DIE PRODUKTION.",
    },
    {
        title: "AUDIO- & VIDEOPRODUKTION",
        description: "PROFESSIONELLE AUFNAHMEN BILDEN DIE GRUNDLAGE EINES HOCHWERTIGEN PODCASTS.",
    },
];

export default function Services() {
    const [current, setCurrent] = useState(0);
    
    const handleRight = () => {
        setCurrent(current === offers.length - 3 ? 0 : current + 1);
    };
        
    const handleLeft = () => {
        setCurrent(current === 0 ? offers.length - 3 : current - 1);
    }

    return (
        <section className="services">
            <h2 className="services-title">
                SERVICES WE <span className="services-title-yellow">OFFER</span>
            </h2>
            <div className="services-offers-carousel">
                <div className="services-offers-carousel-track">
                    {offers.slice(current, current + 3).map((offers) => (
                        <div key={offers.title} className="services-offers-carousel-item">
                            <h3 className="services-offers-title">{offers.title}</h3>
                            <p className="services-offers-description">{offers.description}</p>
                            <button className="services-offers-btn">MEHR ERFAHREN</button>
                        </div>
                    ))}
                </div>

                <div className="services-offers-carousel-controls">
                    <button className="services-offers-carousel-btn" onClick={handleLeft}>
                        <img src={sliderLeft} alt="Previous"/>
                    </button>
                    <button className="services-offers-carousel-btn" onClick={handleRight}>
                        <img src={sliderRight} alt="Next"/>
                    </button>
                </div>
            </div>
        </section>
    )
}