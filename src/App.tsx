import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.scss';
import { Router } from './Router';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
