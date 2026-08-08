import GlassCard from "./GlassCard";
import "../styles/Team.css";

const team = [
  { name: "Chantal Carpio", role: "CEO & Founder",        initials: "CC" },
  { name: "Yanina de Sapio",  role: "Head of Production",   initials: "YS" },
  { name: "Alyssa Grande",      role: "Marketing",        initials: "AG" },
  { name: "Ryan Gorden",    role: "Audio Engineer",    initials: "RG" },
  { name: "Julian Roth",    role: "Human Resource",    initials: "JR" },
  { name: "Yasmina Laskrouif",    role: "Content Planner",    initials: "YL" },
  { name: "Ekon Giezendanner",    role: "Content Filmer",    initials: "EG" },
  { name: "Phoebe Iun",    role: "Head Art",    initials: "PI" },
  { name: "Noah Eberhardt",    role: "Head IT",    initials: "NE" },
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