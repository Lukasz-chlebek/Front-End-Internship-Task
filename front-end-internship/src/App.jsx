import "./App.css";
import EditIntern from "./Components/EditIntern/EditIntern";
import InternList from "./Components/InternList/InternList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/interns/:id" exact element={<EditIntern />} />
        <Route path="/" element={<InternList />} />
      </Routes>
    </div>
  );
}

export default App;
