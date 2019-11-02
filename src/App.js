import React from 'react';
import MenuBar from './components/MenuBar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <MenuBar />
        <HomePage />
        <Footer />
      </div>
    );
  }
}
export default App;
