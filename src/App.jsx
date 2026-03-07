import { useState } from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer';
import Counter from './components/Counter';
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      <Counter />
      <Footer />
  </div>
  )
}
