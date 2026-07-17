import GlassCard from "./GlassCard";
import "../styles/Team.css";

const team = [
  { name: "Max Mustermann", role: "CEO & Founder",        initials: "MM" },
  { name: "Anna Beispiel",  role: "Head of Production",   initials: "AB" },
  { name: "Luca Demo",      role: "Audio Engineer",        initials: "LD" },
  { name: "Sara Filler",    role: "Content Strategist",    initials: "SF" },
];

export default function Team() {
  return (
    <section className="team">
      <div className="section-header">
        <span className="section-badge">Our Team</span>
        <h2 className="section-title">The People Behind<br />the Microphone</h2>
        <p className="section-desc">
          Passionate creators, strategists and engineers — all working to make your podcast unforgettable.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member) => (
          <GlassCard key={member.name}>
            <div className="team-card-inner">
              <div className="team-avatar">
                <span className="team-initials">{member.initials}</span>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}