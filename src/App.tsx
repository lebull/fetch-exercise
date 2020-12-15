import { useState } from 'react';
import './App.css';
import { Items } from './Items'

function App() {

  const [mock, setMock] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        Fetch Rewards coding exercise
      </header>
      { !mock ? <button onClick={() => setMock(!mock)}>Use Mock Data</button> : "" }
      <div>
        <Items mock={mock} />
      </div>
    </div>
  );
}

export default App;