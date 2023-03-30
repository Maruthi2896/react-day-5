import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

function App() {
  const [like,setLike]=useState(0);
  return (
    <div className="App">
      <button onClick={()=>{setLike(like+1)}}>Increment{like}</button>
    </div>
  );
}

export default App;
