import React from 'react';

function ExampleComponent({ status }) {
  switch (status) {
    case 'loading':
      return <div>Loading...</div>;
    case 'success':
      return <h1>Success!</h1>;
    case 'error':
      return <div>Error occurred!</div>;
    default:
      return <div>Unknown status</div>;
  }
}

export default ExampleComponent;

