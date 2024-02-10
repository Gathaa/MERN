import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
/*  <Router>
      <Routes>
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
      </Routes>
    </Router>*/ 
function App() {
  return (
  <div>
      <Register />

  </div>

  );
}

export default App;
