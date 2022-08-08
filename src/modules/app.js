import React from 'react';
import styles from '../index.css';

function App() {
  return (
    <div className={styles.app}>
      <h1>Webpack boilerplate--react</h1>
      <ul>
        <li>fonts support: woff, woff2, ttf, otf, eot</li>
        <li>media support: png, jpeg, jpg, gif, svg</li>
        <li>postcss support: in dev and prod</li>
         <li>postcss support: Eslint with airbnb</li>
      </ul>
    </div>
  );
}

export default App;
