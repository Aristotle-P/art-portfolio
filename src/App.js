import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/mobile/Navbar';
// import SideNav from './components/layout/desktop/SideNav';
import Art from './components/static_pages/Art';
import Home from './components/static_pages/Home';
import About from './components/static_pages/About';
import Contact from './components/static_pages/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <SideNav /> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/art/:gallery" component={Art} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
