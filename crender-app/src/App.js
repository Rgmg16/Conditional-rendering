import React, { useState } from 'react';


function MessageComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <h1>Please log in to continue.</h1>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
}

export default MessageComponent;

