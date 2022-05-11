
import React, { useState } from 'react'
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import Errorboundary from '../errorBaundary/ErrorBoundary';
import RandomChar from '../randomChar/RandomChar';
import decoration from '../../resources/img/vision.png';

const MainPage = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id)
  }
  return (
    <>
      <Errorboundary>
        <RandomChar />
      </Errorboundary>
      <div className="char__content">
        <Errorboundary>
          <CharList onCharSelected={onCharSelected} />
        </Errorboundary>
        <Errorboundary>
          <CharInfo charId={selectedChar} />
        </Errorboundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}

export default MainPage