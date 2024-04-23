import React from 'react';

function ExampleComponent({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <button>Log in</button>;
  }
}

export default ExampleComponent;
