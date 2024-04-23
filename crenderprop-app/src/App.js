import React, { useState } from 'react';
import Greeting from './Components./Greeting';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
}

export default App;

