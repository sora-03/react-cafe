import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";

function App() {
  return (
    <div className="App">
      {/* ルーター追加 */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
