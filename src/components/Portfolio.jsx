import "../styles/Portfolio.css";
import sliderLeft from "../assets/Icons/MEVIA_SliderLeft.png"
import sliderRight from "../assets/Icons/MEVIA_SliderRight.png"
import project1 from "../assets/Images/RecentProjects/Projekt_1.png";
import project2 from "../assets/Images/RecentProjects/Projekt_2.png";
import project3 from "../assets/Images/RecentProjects/Projekt_3.png";
import { useState } from "react";


const projects = [
    { image: project1, title: "Projekt 1" },
    { image: project2, title: "Projekt 2" },
    { image: project3, title: "Projekt 3" },
];
export default function Portfolio(){
    const [current, setCurrent] = useState(0);

    const handleRight = () => {
      setCurrent(current === projects.length - 3 ? 0 : current + 1);
    };
    
    const handleLeft = () => {
        setCurrent(current === 0 ? projects.length - 3 : current - 1);
    }

    return (
        <section className="portfolio">
            <h1 className="portfolio-title">
                DISCOVER OUR <span className="portfolio-title-yellow">PROJECTS</span>
            </h1>
            <div className="carousel">
                <button className="carousel-btn" onClick={handleLeft}>
                    <img src={sliderLeft} alt="Previous"/>
                </button>
                <div className="carousel-track">
                    {projects.slice(current, current + 3).map((project) => (
                        <div key={project.title} className="carousel-item">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                    ))}
                </div>
                <button className="carousel-btn" onClick={handleRight}>
                    <img src={sliderRight} alt="Next"/>
                </button>
            </div>
        </section>
    );
}
