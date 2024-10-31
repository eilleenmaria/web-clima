import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from  "./pages/Home";
import Header from "./components/Header";
import Footers from "./components/Footers";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footers/>
    </Router>
  );
}

export default App;
