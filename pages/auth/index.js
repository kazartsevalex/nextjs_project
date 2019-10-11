import React from 'react';
import Router from 'next/router';

const authIndexPage = () => (
  <div>
    <h1>The Auth Page</h1>
    <p>
      <button onClick={() => Router.push('/')}>Go to Main page</button>
    </p>
  </div>
);

export default authIndexPage;
