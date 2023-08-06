
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

// page imports
import Homepage from './pages/Homepage';
import CommitteePage from './pages/Committee';
import Trips from './pages/Trips';
import Training from './pages/Training';
import Gear from './pages/Gear';
import History from './pages/History';
import Header from './components/Header/Header';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/trips" element={<Trips/>} />
        <Route path="/training" element={<Training/>} />
        <Route path="/gear" element={<Gear/>} />
        <Route path="/history" element={<History/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
