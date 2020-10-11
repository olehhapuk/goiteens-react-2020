import React from 'react';

import Statistics from './components/Statistics/Statistics';

import statistics from './data/statistical-data.json';

function App() {
  return (
    <div>
      <Statistics title="UPLOAD STATS" stats={statistics} />
    </div>
  );
}

export default App;
