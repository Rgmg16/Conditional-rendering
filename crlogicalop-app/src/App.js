import React from 'react';

function ExampleComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
    </div>
  );
}

export default ExampleComponent;
