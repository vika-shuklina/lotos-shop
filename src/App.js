import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import News from './pages/News';
import Contacts from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;