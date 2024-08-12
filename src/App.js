// src/App.js
import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="App">
      <h1>Marvel Comics Characters</h1>
      <CharacterList onSelectCharacter={setSelectedCharacter} />
      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
    </div>
  );
}

export default App;
