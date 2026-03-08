import { useState } from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer';
import Counter from './components/Counter';
import './App.css'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header />

      <div className="flex-grow">
        <Counter />
      </div>

      <Footer />
  </div>
  )
}
