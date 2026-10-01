import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/SideBar";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ContentStudio from "./pages/ContentStudio";
import MediaLibrary from "./pages/MediaLibrary";
import ContentCalendar from "./pages/ContentCalendar";

export default function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <div className="main">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

            <Route
              path="/studio"
              element={<ContentStudio />}
            />

            <Route
              path="/media"
              element={<MediaLibrary />}
            />

            <Route
              path="/calendar"
              element={<ContentCalendar />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}