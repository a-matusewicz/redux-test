import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

// import $ from 'jquery';
// import './style.scss';

// let num = 0;

// setInterval(() => {
//   $('#main').html(`You've been on this page for ${num} seconds.`);
//   num += 1;
// }, 1000);
