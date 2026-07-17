import "../styles/GlassCard.css";

export default function GlassCard({ icon, title, description, price, tag, children }) {
  return (
    <div className="glass-card">

      {tag && (
        <span className="glass-card-tag">{tag}</span>)}

      {icon && (
        <div className="glass-card-icon">{icon}</div>)}

      {title && (
        <h3 className="glass-card-title">{title}</h3>)}      

      {description && (
        <p className="glass-card-desc">{description}</p>)}

      {price && (
        <div className="glass-card-price">
          <span className="price-amount">{price}</span>
          <span className="price-period">/month</span>
        </div>
      )}

      {children}

    </div>
  );
}