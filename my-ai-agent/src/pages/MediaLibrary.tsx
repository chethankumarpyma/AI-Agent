import Header from "../components/Header";

const media = [
  {
    id: 1,
    name: "Bidaraguppe_Aerial_01",
    type: "Drone",
    duration: "00:18",
  },
  {
    id: 2,
    name: "Bidaraguppe_Aerial_02",
    type: "Drone",
    duration: "00:22",
  },
  {
    id: 3,
    name: "Village_Road",
    type: "Mobile",
    duration: "00:08",
  },
];

export default function MediaLibrary() {
  return (
    <div>
      <Header
        title="Media Library"
        description="Organize your drone and mobile footage."
      />

      <main className="page-content">

        <div className="upload-box">

          <div className="upload-icon">
            ⬆
          </div>

          <h3>Upload Village Footage</h3>

          <p>
            Upload drone or mobile videos.
          </p>

          <button className="primary-button">
            Select Files
          </button>

        </div>

        <div className="media-grid">

          {media.map((item) => (
            <div className="media-card" key={item.id}>

              <div className="media-thumbnail">
                🎥
              </div>

              <div className="media-info">
                <strong>{item.name}</strong>

                <span>
                  {item.type} · {item.duration}
                </span>
              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}