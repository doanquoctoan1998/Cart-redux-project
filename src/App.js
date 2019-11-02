import React from 'react';
import NavBar from './components/NavBar'
import CarouselContainer from './containers/CarouselContainer'
import TrendingCarousel from './components/TrendingCarousel';
import Thumbnail_1 from './components/Thumbnail_1';
import Thumbnail_2 from './components/Thumbnail_2';
import Footer from './components/Footer'
class App extends React.Component {
  render() {
    return ( 
      <div className="container">
        <NavBar />
        <CarouselContainer/>
        <TrendingCarousel />
        <Thumbnail_1 />
        <Thumbnail_1 />
        <Thumbnail_2 />
        <Thumbnail_2 />
        <Footer />
      </div>
    );
  }

}

export default App;
