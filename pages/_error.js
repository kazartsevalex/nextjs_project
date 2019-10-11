import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

const authIndexPage = () => (
  <div>
    <h1>Oops, something went wrong.</h1>
    <div>
      <p>Try to go to <Link href="/auth"><a>Auth</a></Link> or</p>
      <button onClick={() => Router.push('/')}>Go to Main page</button>
    </div>
  </div>
);

export default authIndexPage;
