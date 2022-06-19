import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Portfolio from './components/Portfolio';
import About from './components/About';
// import Contact from './components/Contact';

function App() {

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <main>
        <About></About>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}



export default App;
