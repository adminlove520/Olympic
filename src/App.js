import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={ <Home /> } path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
