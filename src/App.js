import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Otp from './components/Otp';
import Success from './components/Success';

function App() {

  return (
    
    <Router>
      <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path = '/' element = {<Login/>}/>
      <Route path = '/otp' element = {<Otp/>}/>
      <Route path = '/success' element = {<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;
