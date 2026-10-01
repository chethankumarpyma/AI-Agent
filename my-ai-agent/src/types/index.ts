export type Language = "English" | "Kannada" | "Both";

export type ProjectStatus =
  | "Planning"
  | "Shooting"
  | "Editing"
  | "Ready"
  | "Published";

export interface VillageProject {
  updatedAt: string | number | Date;
  description: ReactNode;
  id: string;
  name: string;
  district: string;
  state: string;
  status: ProjectStatus;
  droneClips: number;
  mobileClips: number;
  publishedVideos: number;
  progress: number;
  createdAt: string;
}

export interface ContentItem {
  id: string;
  title: string;
  type: "YouTube" | "Short" | "Instagram" | "Facebook";
  status: "Draft" | "Ready" | "Published";
  scheduledDate?: string;
}
export interface MediaFile {
  id: string;
  name: string;
  type: "Drone" | "Mobile";
  duration: string;
  thumbnail: string;
}
