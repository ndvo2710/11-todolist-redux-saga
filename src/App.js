import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header/Header";

function App() {
  return <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
  </div>;
}

export default App;
