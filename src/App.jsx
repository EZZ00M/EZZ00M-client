import { Routes, Route } from "react-router-dom";
import ZoomAnalyzePage from "./pages/ZoomAnalyzePage";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <div>
        <GlobalStyles />
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
