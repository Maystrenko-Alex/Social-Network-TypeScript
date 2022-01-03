import React from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';

function App() {
  return (
    < div className='app-wrapper'>
      <Header />
      <div className='app-content'>
        <Navbar />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
