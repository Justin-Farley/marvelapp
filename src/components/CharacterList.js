import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PUBLIC_KEY = 'your_public_key';
const HASH = 'your_hash';
const API_URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

const CharacterList = ({ onSelectCharacter }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(API_URL);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map(character => (
        <div
          key={character.id}
          className="character-card"
          onClick={() => onSelectCharacter(character)}
        >
          <img src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`} alt={character.name} />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
