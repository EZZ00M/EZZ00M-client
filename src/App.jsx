import { Routes, Route } from "react-router-dom";
import ZoomAnalyzePage from "./pages/ZoomAnalyzePage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path='/'
            element={<ZoomAnalyzePage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
