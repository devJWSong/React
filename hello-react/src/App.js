import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = "Are you awesome?";
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }

    return (
      <div className = 'my-div'>
        {/* Comment 1 */}
        <h1>Hi, React!</h1>
        <h2>{text}</h2>
        {condition && "Show me"}
        <div 
          style={style}
          // only working in self-closed tag
          // /> must be in the next line
          /* also availiable */
        />
        // This will be rendered as it is.
        /* A comment cannot be written here. */
      </div>
    );
  }
}

export default App;
