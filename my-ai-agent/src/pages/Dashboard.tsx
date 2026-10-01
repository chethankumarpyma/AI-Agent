import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ProjectCard from "../components/ProjectCard";
import type { VillageProject } from "../types";

const projects: VillageProject[] = [
  {
      id: "1",
      name: "Bidaraguppe",
      district: "Bengaluru",
      state: "Karnataka",
      status: "Shooting",
      droneClips: 32,
      mobileClips: 0,
      publishedVideos: 0,
      progress: 45,
      createdAt: "2026-10-01",
      updatedAt: "",
      description: undefined
  },
];

export default function Dashboard() {
  return (
    <div>
      <Header
        title="Good morning 👋"
        description="Let's build the next Village360 story."
      />

      <main className="page-content">

        <section className="stats-grid">
          <StatCard
            title="Villages"
            value="1"
            description="Active projects"
            icon="🏡"
          />

          <StatCard
            title="Videos"
            value="0"
            description="Published videos"
            icon="▶"
          />

          <StatCard
            title="Shorts"
            value="0"
            description="Ready to publish"
            icon="⚡"
          />

          <StatCard
            title="Media"
            value="32"
            description="Drone clips"
            icon="🎥"
          />
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <h2>Active Projects</h2>
              <p>Your villages currently in production.</p>
            </div>

            <button className="primary-button">
              + New Village
            </button>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="ai-banner">
            <div className="ai-banner-icon">✦</div>

            <div>
              <h2>Village360 AI Agent</h2>

              <p>
                Generate scripts, captions, YouTube
                descriptions and Shorts ideas from
                your village information.
              </p>
            </div>

            <button className="primary-button">
              Open AI Studio →
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}