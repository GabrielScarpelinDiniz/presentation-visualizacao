import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import DataVisualizationSlides from "./slides/DataVisualizationSlides";
import "./App.css";
import SupervisedLearning from "./slides/SupervisedLearning";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <main className="main-content">
                <Home />
              </main>
              <footer className="footer">
                <p>
                  © 2025 Inteli Academy - Impulsionando o futuro com
                  Inteligência Artificial
                </p>
              </footer>
            </>
          }
        />
        <Route
          path="/data-visualization"
          element={<DataVisualizationSlides />}
        />
        <Route path="/supervised-learning" element={<SupervisedLearning />} />
      </Routes>
    </div>
  );
}

export default App;
