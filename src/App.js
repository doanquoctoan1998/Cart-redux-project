import React from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
class App extends React.Component {
  render() {
    return ( 
      <div className="container">
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }

}

export default App;
