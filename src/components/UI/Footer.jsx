import React from 'react';

import './Footer.css';

export default function footer() {
  return (
    <footer className="footer">
      Coded by{' '}
      <a href="https://kluik.netlify.app/" target="_blank" rel="noreferrer">
        Kar
      </a>{' '}
      and is
      <a
        href="https://github.com/kar-codes/weatherAppDraft/blob/main/src/weatherStyle.css"
        target="_blank"
        rel="noreferrer">
        {' '}
        open-source{' '}
      </a>
      on Github.
    </footer>
  );
}
