import { useEffect, useState } from "react";
import "../styles/Portfolio.css";
import sliderLeft from "../assets/Icons/MEVIA_SliderLeft.png"
import sliderRight from "../assets/Icons/MEVIA_SliderRight.png"
import playButton from "../assets/Icons/MEVIA_PlayButton.png"
import project1 from "../assets/Images/RecentProjects/Projekt_1.png";
import project2 from "../assets/Images/RecentProjects/Projekt_2.png";
import project3 from "../assets/Images/RecentProjects/Projekt_3.png";


const projects = [
    { image: project1, title: "Projekt 1" },
    { image: project2, title: "Projekt 2" },
    { image: project3, title: "Projekt 3" },
];

export default function Portfolio() {
    const [current, setCurrent] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setItemsToShow(1);
            } else if (window.innerWidth <= 768) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleRight = () => {
        setCurrent(current === projects.length - itemsToShow ? 0 : current + 1);
    };
    
    const handleLeft = () => {
        setCurrent(current === 0 ? projects.length - itemsToShow : current - 1);
    }

    return (
        <section className="portfolio" id="portfolio">
            <h2 className="portfolio-title">
                DISCOVER OUR <span className="portfolio-title-yellow">PROJECTS</span>
            </h2>
            <div className="portfolio-carousel">
                <button className="portfolio-carousel-btn" onClick={handleLeft}>
                    <img src={sliderLeft} alt="Previous"/>
                </button>
                <div className="portfolio-carousel-track">
                    {projects.slice(current, current + itemsToShow).map((project) => (
                        <div key={project.title} className="portfolio-carousel-item">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <button className="portfolio-carousel-sound-btn">
                                <img src={playButton} alt="Play Button" />
                                SOUND <span className="portfolio-carousel-sound-btn-yellow">SAMPLE</span>
                            </button>
                        </div>
                    ))}
                </div>
                <button className="portfolio-carousel-btn" onClick={handleRight}>
                    <img src={sliderRight} alt="Next"/>
                </button>
            </div>
        </section>
    );
}
