import React, { useState, Fragment } from 'react'
import './App.css'
import NetflixSeries from './components/NetflixSeries'
// import './components/Netflix.css'
import './components/Netflix.module.css'
import { EventHandling } from './components/EventHandling';

function App() {
  return (
    <section className='container'>
      {/* <h1 className='card-heading'>List of Best Netflix series</h1>
      <NetflixSeries /> */}
      <EventHandling />
    </section>
  );
};
export default App
