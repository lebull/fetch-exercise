import { useState } from 'react';
import './App.css';
import { Items } from './Items'
import { Header } from "./Layout/Header"

function App() {

  const [mock, setMock] = useState(true);

  return (
    <div className="App">
      <Header />
      { !mock ? <button onClick={() => setMock(!mock)}>Use Mock Data</button> : "" }
      <Items mock={mock} />
    </div>
  );
}

export default App;