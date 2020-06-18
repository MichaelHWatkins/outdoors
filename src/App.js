import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const textArray = ['Huge and powerful statement',
	'Still a powerful statement',
	'Very interesting and profound headline']

  const [seconds, setSeconds] = useState(0);
  const [phrase, setPhrase] = useState("Test")


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
      setPhrase(textArray[seconds % textArray.length]);
    }, 3000);
  }, []);

  const backpackingPhrase = event => {
    event.preventDefault();
    setPhrase("The right place for Backpacking lovers")
  }

  const campingPhrase = event => {
    event.preventDefault();
    setPhrase("The right place for Camping lovers")
  }

  const hikingPhrase = event => {
    event.preventDefault();
    setPhrase("The right place for Camping lovers")
  }

  return (
    <div className="App">
      <div className="topbar">
        <ul>
          <li>SPEAKERS</li>
          <li>SCHEDULE</li>
          <li>WORKSHOPS</li>
          <li>CONTACT</li>
        </ul>
        <h1>{phrase}</h1>
      </div>
      <div className="bottomleft">
        <h2><button onClick={backpackingPhrase}>Backpacking</button></h2>
      </div>
      <div className="bottomcenter">
        <h2><button onClick={campingPhrase}>Camping</button></h2>
      </div>
      <div className="bottomright">
        <h2><button onClick={hikingPhrase}>Hiking</button></h2>
      </div>
    </div>
  );
}

export default App;
