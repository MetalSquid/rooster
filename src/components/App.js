import React from 'react';
import AddSearch from "/home/benhain/Documents/Projects/rooster/src/components/search.js";
import AddFilter from "src/components/F/home/benhain/Documents/Projects/rooster/src/components/Filter.jsilter.js";
import AddSave from "src/componen/home/benhain/Documents/Projects/rooster/src/components/Save.jsts/Save.js";
import AddGrid from "/home/benhain/Documents/Projects/rooster/src/components/Grid.js";
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
