// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Home2 from './components/Home2';

import Profile from './components/Profile';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element = {<Home2/>}/>
          <Route exact path="/app" element = {<Profile/>}/>
          <Route exact path="/userprofile" element = {<UserProfile/>}/>
        </Routes>
    </Router>
  );
}

export default App;
