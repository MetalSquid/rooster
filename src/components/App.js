import React from 'react';
import { Counter } from '../features/counter/Counter';
import { SearchRec } from '../components/search.js';
import './App.css';

function App() {
  return (
    <div>
        <Counter />
        <SearchRec />

    </div>
  );
}

export default App;
