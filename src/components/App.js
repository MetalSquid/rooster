import React from 'react';
import Search from "src/components/Search.js";
import Filter from "src/components/Filter.js";
import Save from "src/components/Save.js";
import Grid from "src/components/Grid.js";
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Search />
        <Filter />
        <Save />
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
}

export default App;
