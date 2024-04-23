import React from 'react';

function ExampleComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <button>Log in</button>
      )}
    </div>
  );
}

export default ExampleComponent;
