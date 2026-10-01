interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: string;
}

export default function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <div className="stat-card">
      {icon && <i className={icon}></i>}
      <div className="stat-card-content">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
        {description && <p className="stat-description">{description}</p>}
      </div>
    </div>
  );
}