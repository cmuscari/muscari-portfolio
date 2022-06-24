import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {

  // setting state to the current page
  const [currentPage, setCurrentPage] = useState('About');

  // function to render whichever page is the current page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div>
        <Header></Header>
      </div>
      <main>
        {renderPage()}
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}


export default App;
