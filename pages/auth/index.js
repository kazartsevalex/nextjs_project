import React from 'react';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = () => (
  <div>
    <h1>The Auth Page</h1>
    <User name="Adam" age="999" />
    <p>
      <button onClick={() => Router.push('/')}>Go to Main page</button>
    </p>
  </div>
);

export default authIndexPage;
