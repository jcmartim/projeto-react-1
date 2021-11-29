import React from 'react';
import './App.css';
import StateClass from './views/state-class'
import MapArray from './views/map';

function App() {

  const [path, setPath] = React.useState('0')

  function randlePath() {
    switch(path) {
      case '0' : 
      return <StateClass />
      case '1' : 
      return <MapArray />
      default : 
      return <StateClass />
    }
  }

    return (
      <div className="App">
        <div className="App-header">
          <header>
            <nav className="menu">
              <button onClick={() => setPath('0')}>State Class</button> 
              <button onClick={() => setPath('1')}>Map</button> 
            </nav>
          </header>
          <main>
            { randlePath() }
          </main>
        </div>
      </div>
    )
}

export default App;
