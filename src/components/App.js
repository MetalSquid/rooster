import React from 'react';
import AddSearch from "./search.js";
import AddFilter from "./Filter.js";
import AddSave from "./Save.js";
import AddGrid from "./Grid.js";
import './App.css';

function App() {
  return (
    <div>
      <div className='Header'>
        <AddSearch />
        <AddFilter />
        <AddSave />
      </div>
      <div>
        <AddGrid />
      </div>
    </div>
  );
}

export default App;
