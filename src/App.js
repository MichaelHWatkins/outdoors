import React from 'react';
import './App.css';
import banner from './banner.png'

function App() {
  return (
    <div className="App">
    <img src={banner} alt="Banner" />
      <div className="topbar">
        <ul>
          <li>SPEAKERS</li>
          <li>SCHEDULE</li>
          <li>WORKSHOPS</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="upperhalf">

      </div>
      <div className="bottomleft">
      </div>
      <div className="bottomcenter">
      </div>
      <div className="bottomright">
      </div>
    </div>
  );
}

export default App;
