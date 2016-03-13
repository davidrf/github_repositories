import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li><Link activeClassName="active" to="/about">About</Link></li>
            <li><Link activeClassName="active" to="/repos">Repos</Link></li>
          </ul>
        </menu>
        {children}
      </div>
    );
  }
}

export default App;

