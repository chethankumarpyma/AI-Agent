import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    label: "Projects",
    path: "/projects",
    icon: "fa-solid fa-folder",
  },
  {
    label: "Content Studio",
    path: "/content-studio",
    icon: "fa-solid fa-edit",
  },
  {
    label: "Media Library",
    path: "/media-library",
    icon: "fa-solid fa-photo-film",
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: "fa-solid fa-calendar",
  },
  {
    label: "Settings",
    path: "/settings",
    icon: "fa-solid fa-cog",
  },
];

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">VillagesAI</div>
        <div>
          <h2>Villages360</h2>
          <span>AI Agent</span>
        </div>
      </div>

      <nav className="navigation">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="ai-status">
          <div className="status-indicator"></div>
          <div>
            <strong>AI Agent Online</strong>
            <small>Ready to create content</small>
          </div>
        </div>
      </div>
    </aside>
  );
}
