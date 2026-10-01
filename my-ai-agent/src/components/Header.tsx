interface HeaderProps {
  title: string;
  description?: string;
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>

      <div className="header-actions">
        <button className="btn btn-primary">New Project</button>
      </div>

        <div className="profile">
            <div className="profile-info">Chethan</div>
            <div>
                <strong>Creator</strong>
                <span>Villages360</span>
            </div>
        </div>
        </header>
  );

}
