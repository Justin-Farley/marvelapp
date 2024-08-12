import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterDetail = ({ character }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (character) {
      const fetchDetails = async () => {
        try {
          const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${character.id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`);
          setDetails(response.data.data.results[0]);
        } catch (error) {
          console.error('Error fetching character details:', error);
        }
      };

      fetchDetails();
    }
  }, [character]);

  if (!details) return <div>Select a character to see details</div>;

  return (
    <div className="character-detail">
      <h2>{details.name}</h2>
      <p>{details.description || 'No description available'}</p>
      <h3>Comics:</h3>
      <ul>
        {details.comics.items.map((comic, index) => (
          <li key={index}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
