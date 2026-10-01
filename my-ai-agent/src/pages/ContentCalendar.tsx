import Header from "../components/Header";

const content = [
  {
    date: "Oct 03",
    title: "Bidaraguppe Drone View",
    platform: "YouTube Short",
  },
  {
    date: "Oct 05",
    title: "The Story of Bidaraguppe",
    platform: "YouTube",
  },
  {
    date: "Oct 07",
    title: "Bidaraguppe Lake",
    platform: "Instagram Reel",
  },
];

export default function ContentCalendar() {
  return (
    <div>
      <Header
        title="Content Calendar"
        description="Plan and schedule your Village360 content."
      />

      <main className="page-content">

        <div className="calendar-list">

          {content.map((item) => (
            <div className="calendar-item" key={item.title}>

              <div className="calendar-date">
                {item.date}
              </div>

              <div>
                <strong>{item.title}</strong>
                <span>{item.platform}</span>
              </div>

              <span className="status-badge ready">
                Ready
              </span>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}