import { forwardRef } from "react";
import "../styles/Products.css";

const features = [
  "Strategie-Call",
  "Konzeption & Produktionsplanung",
  "Pre-Production",
  "Produktion (Audio & Video)",
  "Postproduktion (Schnitt, Color Grading & Sounddesign)",
  "Publishing & Distribution (3 Kanäle)",
  "Reporting",
  "Content Repurposing (10 Reels + Trailer)",
  "1 Podcast-Folge bis 30 Minuten",
];

const Products = forwardRef((props, ref) => {
  return (
    <section className="products" ref={ref}>
      <div className="section-header">
        <span className="section-badge">Our Base</span>
        <h2 className="section-title">One Package.<br />Everything Included.</h2>
        <p className="section-desc">
          Everything you need to launch and grow your podcast — fully managed by MEVIA.
        </p>
      </div>

      <div className="products-card-wrap">
        <div>
          <div className="product-card-inner">

            <div className="product-top">
              <div className="product-icon">🎙</div>
              <div>
                <h3 className="product-name">Basispaket</h3>
                <p className="product-tagline">Full-Service Podcast Production</p>
              </div>
            </div>

            <ul className="feature-list">
              {features.map((f) => (
                <li key={f} className="feature-item">
                  <span className="feature-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-amount">CHF 6'290</span>
                <span className="price-period">/ Folge</span>
              </div>
              <button className="btn-primary">Get Started</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});

Products.displayName = "Products";
export default Products;