// App.tsx
import React from 'react';
import ChipComponent from './Component/Chip';
import "./App.css"
const App: React.FC = () => {
  const allItems: string[] = ["AlmaBetter","Rohit Sharma","Virat Kohli","Sanju Samson","Ms Dhoni", "Rohit Sharma", "John Doe", "Jane Smith", "Bob Johnson", "Nick Giannopoulos"];

  return (
    <div className="App">
      <ChipComponent allItems={allItems} />
    </div>
  );
}

export default App;
