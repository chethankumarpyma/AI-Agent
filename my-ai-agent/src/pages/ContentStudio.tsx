import { useState } from "react";
import Header from "../components/Header";
import { api } from "../services/api";

type Tool =
  | "script"
  | "caption"
  | "youtube"
  | "shorts";

export default function ContentStudio() {
  const [tool, setTool] = useState<Tool>("script");

  const [village, setVillage] =
    useState("Bidaraguppe");

  const [language, setLanguage] =
    useState("Kannada");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  const generateContent = async () => {
    setLoading(true);
    setResult("");

    try {
      let response: any;

      if (tool === "script") {
        response = await api.generateScript({
          village,
          language,
          duration: 10,
        });
      }

      if (tool === "caption") {
        response = await api.generateCaption({
          village,
          language,
          platform: "Instagram",
        });
      }

      if (tool === "youtube") {
        response = await api.generateYoutubeDescription({
          village,
          language,
        });
      }

      setResult(
        response?.content ||
        response?.response ||
        "Content generated successfully."
      );
    } catch {
      setResult(
        "Backend is not connected yet. Start your Node.js AI server and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header
        title="AI Content Studio"
        description="Turn village information into ready-to-publish content."
      />

      <main className="page-content">

        <div className="studio-layout">

          <aside className="studio-sidebar">

            <h3>AI Tools</h3>

            <button
              className={
                tool === "script"
                  ? "tool-button active"
                  : "tool-button"
              }
              onClick={() => setTool("script")}
            >
              🎬
              <span>
                <strong>Video Script</strong>
                <small>Generate village story</small>
              </span>
            </button>

            <button
              className={
                tool === "caption"
                  ? "tool-button active"
                  : "tool-button"
              }
              onClick={() => setTool("caption")}
            >
              ✍️
              <span>
                <strong>Caption</strong>
                <small>Instagram & Facebook</small>
              </span>
            </button>

            <button
              className={
                tool === "youtube"
                  ? "tool-button active"
                  : "tool-button"
              }
              onClick={() => setTool("youtube")}
            >
              ▶️
              <span>
                <strong>YouTube Content</strong>
                <small>Title & description</small>
              </span>
            </button>

            <button
              className={
                tool === "shorts"
                  ? "tool-button active"
                  : "tool-button"
              }
              onClick={() => setTool("shorts")}
            >
              ⚡
              <span>
                <strong>Shorts Ideas</strong>
                <small>Create short videos</small>
              </span>
            </button>

          </aside>

          <section className="studio-main">

            <div className="studio-form">

              <div className="form-group">
                <label>Village</label>

                <input
                  value={village}
                  onChange={(e) =>
                    setVillage(e.target.value)
                  }
                  placeholder="Enter village name"
                />
              </div>

              <div className="form-group">
                <label>Language</label>

                <select
                  value={language}
                  onChange={(e) =>
                    setLanguage(e.target.value)
                  }
                >
                  <option>Kannada</option>
                  <option>English</option>
                  <option>Both</option>
                </select>
              </div>

              <button
                className="primary-button generate-button"
                onClick={generateContent}
                disabled={loading}
              >
                {loading
                  ? "Generating..."
                  : "✦ Generate Content"}
              </button>

            </div>

            <div className="result-panel">

              <div className="result-header">
                <h3>AI Output</h3>

                {result && (
                  <button
                    className="secondary-button"
                    onClick={() =>
                      navigator.clipboard.writeText(result)
                    }
                  >
                    Copy
                  </button>
                )}
              </div>

              {result ? (
                <div className="ai-result">
                  {result}
                </div>
              ) : (
                <div className="empty-state">
                  <div>✦</div>

                  <h3>
                    Your AI content will appear here
                  </h3>

                  <p>
                    Select an AI tool and generate
                    content for your village.
                  </p>
                </div>
              )}

            </div>

          </section>

        </div>

      </main>
    </div>
  );
}