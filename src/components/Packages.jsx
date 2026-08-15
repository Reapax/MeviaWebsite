import "../styles/Packages.css";
import sliderRight from "../assets/Icons/MEVIA_SliderRight.png"

const basePackage = {
    features: [
        "Kick-Off",
        "Strategie-Call",
        "Konzeption",
        "Produktionsplanung",
        "Pre-Production",
        "Produktion (Audio & Video, Sounddesign Basic)",
        "Postproduktion (Schnitt, Color Grading)",
        "Publishing & Distribution (3 Kanäle)",
        "Reporting",
        "Content Repurposing (10 Reels + Trailer)",
        "1 Podcast-Folge bis 30 Minuten",
    ],
    note: "Aus jeder Podcast-Folge erstellen wir zusätzlichen Content für Social Media und weitere Kanäle.",
    contentRepurposing: ["Reels", "Shorts", "Highlight-Clips", "Zitat-Clips", "Trailer"],
    price: "CHF 4'340.–",
    oneTimeFee: "Einmalig CHF 2000.–",
    onboardingNote: "Hinweis: Einmalige Onboarding-Leistungen. Die folgenden Leistungen fallen ausschliesslich zu Beginn einer Zusammenarbeit an und werden bei wiederkehrenden Podcastproduktionen nicht erneut verrechnet: Kick-Off, Strategie-Call, Konzeption, Produktionsplanung, Pre-Production. Einmaliger Onboarding-Anteil: CHF 2000.",
}

const addOns = {
    note: "Diese Leistungen können flexibel zum Basispaket hinzugebucht werden:",
    categories: [
        {
            title: "Produktion",
            items: [
            "Podcast-Folge über 30 Minuten",
            "Zusätzliche Reels (über die enthaltenen 10 hinaus)",
            ],
        },
        {
            title: "Betreuung",
            items: [
            "Mehr als 1 Podcast-Folge pro Monat (Preisvorteil bei mehreren Folgen)",
            "Gästekoordination",
            ],
        },
        {
            title: "Premium Content",
            items: [
            "Individuelle 3D-Animationen",
            "Motion Graphics / animierte Sequenzen",
            "Sounddesign Premium (individuelle Audio Branding)",
            ],
        },
        {
            title: "Distribution",
            items: [
            "Erweiterte Distribution auf zusätzlichen Plattformen",
            "Individuelle Veröffentlichungspläne",
            ],
        },
    ],
    closingNote: "Sollte das Basispaket nicht Ihren Anforderungen entsprechen, passen wir den Leistungsumfang auf Anfrage gerne individuell an Ihre Bedürfnisse an.",
}

export default function Packages() {
    const handleRight = () => {
        return
    };

    return (
        <section className="packages">
            <div className="packages-column">
                <h2 className="packages-base-title">
                    OUR <span className="packages-base-title-yellow">BASE</span>
                </h2>
                <div className="packages-base-wrapper">
                    <div className="packages-base">
                        <div className="packages-base-left">
                            <ul className="packages-base-features-list">
                                {basePackage.features.map((f) => (
                                    <li key={f} className="packages-base-features-item">
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <p className="packages-base-note">{basePackage.note}</p>
                            <ul className="packages-base-repurposing-list">
                                {basePackage.contentRepurposing.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="packages-base-right">
                            <p className="packages-base-onboardingnote">{basePackage.onboardingNote}</p>
                            <p className="packages-base-price">{basePackage.price}</p>
                            <p className="packages-base-onetimefee">{basePackage.oneTimeFee}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="packages-column">
                <h2 className="packages-addons-title">
                    ADD-<span className="packages-addons-title-yellow">ONS</span>
                </h2>
                <div className="packages-addons-wrapper">
                    <div className="packages-addons">
                        <p className="packages-addons-note">{addOns.note}</p>
                        <ul className="packages-addons-list">
                            {addOns.categories.map((category) => (
                                <li key={category.title} className="packages-addons-item">
                                    <strong>{category.title}</strong>
                                    <ul>
                                        {category.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <p className="packages-addons-closingNote">{addOns.closingNote}</p>
                    </div>
                </div>
                <div className="packages-btn-container">
                    <button className="packages-btn" onClick={handleRight}>
                        CHOOSE <span className="packages-btn-yellow">YOUR OWN</span>
                        <img src={sliderRight} alt="CHOOSE YOUR OWN"/>
                    </button>
                </div>
            </div>
        </section>
    )
}