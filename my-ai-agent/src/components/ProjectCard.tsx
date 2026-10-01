import type { VillageProject } from "../types";

interface ProjectCardProps {
  project: VillageProject;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="project-card" onClick={onClick}>
        <div className="project-image">
            <span className={`status-badge ${project.status.toLowerCase()}`}>{project.status}</span>
        </div>
        <div className="project-details">
            <h3>{project.name}</h3>
            <p>{project.droneClips} drone clips</p>
            <p>{project.mobileClips} mobile clips</p>
            <p>{project.publishedVideos} published videos</p>
            <p>Progress: {project.progress}%</p>
            <p>{project.description}</p>
            <p>Location: {project.district}, {project.state}</p>
            <div className="project-meta">
                <span>Created on: {new Date(project.createdAt).toLocaleDateString()}</span>
                <span>Last updated: {new Date(project.updatedAt).toLocaleDateString()}</span>
            </div>
        </div>
    </div>
  );
}
