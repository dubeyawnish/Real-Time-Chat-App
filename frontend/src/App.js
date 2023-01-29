
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Join from "./Component/Joins/join";
//import Chatt from "./Component/Chats/Chatt";
import Chatt from "./Component/Chats/Chatt";
import './App.css';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route exact path="/cchat" element={<Chatt />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
