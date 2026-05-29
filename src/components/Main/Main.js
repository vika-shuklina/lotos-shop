import React from 'react';
import './Main.css';

function Main(props) {
  return (
    <main className="main-content">
      {props.children}
    </main>
  );
}

export default Main;