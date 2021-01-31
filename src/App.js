import React from 'react'; 
import GMEPage from './Display';
import './App.css';
import logo from './lol.png';

function App() {
  return (
      <div className = 'container'>
        <div className = 'header'>
          <ul>
            <li className = 'logo'> <img src= {logo} alt = 'GME TO THE MOON'/></li>
            <li> <a href="https://www.reddit.com/r/wallstreetbets/">Subreddit</a> </li>
            <li><a href="https://discord.com/oauth2/authorize?client_id=604873945044484111&permissions=3148800&scope=bot">Add to Discord</a></li>
          </ul>
          <div className = 'linebreak'></div>
          <GMEPage className = 'graphs'></GMEPage>
        </div>
      </div>
  );
}

export default App;
