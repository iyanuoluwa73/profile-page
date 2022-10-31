
import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Links from './components/Links';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App container">
				
        <Profile />
        <Links />
				<Contact />
				<hr />
				<Footer />
      </div>
    );
  }
}

export default App;