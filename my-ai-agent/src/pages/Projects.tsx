import Header from "../components/Header";
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

export default function Projects() {
  return (
    <div>
      <Header
        title="Village Projects"
        description="Manage all villages covered by Village360."
      />

      <main className="page-content">

        <div className="section-heading">
          <div>
            <h2>All Villages</h2>
            <p>
              Track shooting, editing and publishing.
            </p>
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

      </main>
    </div>
  );
}