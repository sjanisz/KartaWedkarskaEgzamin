import { useState } from 'react'
import fishes from '../data/fishes'
import './GaleriaRyb.css'

function shuffleArray(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const sortedAlpha = [...fishes].sort((a, b) => a.name.localeCompare(b.name, 'pl'))

export default function GaleriaRyb() {
  const [list, setList] = useState(sortedAlpha)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [shuffled, setShuffled] = useState(false)

  const fish = list[currentIndex]

  function goTo(index) {
    setCurrentIndex(index)
    setRevealed(false)
  }

  function goPrev() {
    goTo((currentIndex - 1 + list.length) % list.length)
  }

  function goNext() {
    goTo((currentIndex + 1) % list.length)
  }

  function toggleShuffle() {
    if (shuffled) {
      setList(sortedAlpha)
    } else {
      setList(shuffleArray(fishes))
    }
    setShuffled((s) => !s)
    setCurrentIndex(0)
    setRevealed(false)
  }

  return (
    <div className="galeria-container">
      <div className="galeria-header">
        <h1 className="galeria-title">Galeria Ryb</h1>
        <button
          className="shuffle-btn"
          onClick={toggleShuffle}
          title={shuffled ? 'Sortuj alfabetycznie' : 'Losuj kolejność ryb'}
        >
          🔀 {shuffled ? 'Alfabetycznie' : 'Losowa kolejność'}
        </button>
      </div>
      <div className="tryb-indicator">
        <span className="tryb-label">Tryb:</span>
        <span className={`tryb-value${shuffled ? ' tryb-losowy' : ' tryb-alfa'}`}>
          {shuffled ? '🔀 Losowa kolejność' : '🔤 Alfabetycznie'}
        </span>
      </div>
      <p className="galeria-subtitle">
        Kliknij na zdjęcie, aby odkryć odpowiedzi.
      </p>

      <div className="galeria-card">
        {/* Fish image / placeholder */}
        <div
          className={`fish-image-wrapper${revealed ? ' revealed' : ''}`}
          onClick={() => setRevealed((r) => !r)}
          title={revealed ? 'Kliknij, aby ukryć' : 'Kliknij, aby odkryć odpowiedzi'}
        >
          {fish.image ? (
            <img src={fish.image} alt={fish.name} className="fish-image" />
          ) : (
            <div className="fish-placeholder">
              🐟
              <span>Zdjęcie wkrótce</span>
            </div>
          )}
          <div className="fish-image-hint">
            {revealed ? '🔼 Ukryj odpowiedzi' : '🔽 Odkryj odpowiedzi'}
          </div>
        </div>

        {/* Questions always visible */}
        <div className="fish-questions">
          <div className="question-row">
            <span className="question-label">Jak nazywa się ta ryba?</span>
            {revealed && (
              <div className="answer-block">
                <span className="answer">{fish.name}</span>
                <span className="answer-latin">{fish.nazwaLacinska}</span>
              </div>
            )}
          </div>
          <div className="question-row">
            <span className="question-label">Jaki jest okres ochronny tej ryby?</span>
            {revealed && <span className="answer">{fish.okresOchronny}</span>}
          </div>
          <div className="question-row">
            <span className="question-label">Poniżej jakiego rozmiaru rybę należy wypuścić?</span>
            {revealed && <span className="answer">{fish.wymiarOchronny}</span>}
          </div>

          {revealed && fish.informacjeDodatkowe && (
            <div className="informacje-dodatkowe">
              <span className="informacje-label">Informacje dodatkowe</span>
              <p className="informacje-text">{fish.informacjeDodatkowe}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="galeria-nav">
        <button className="nav-btn" onClick={goPrev} aria-label="Poprzednia ryba">
          &#8592; Poprzednia
        </button>
        <span className="nav-counter">
          {currentIndex + 1} / {list.length}
        </span>
        <button className="nav-btn" onClick={goNext} aria-label="Następna ryba">
          Następna &#8594;
        </button>
      </div>

      {/* Dot indicators */}
      <div className="galeria-dots">
        {list.map((_, i) => (
          <button
            key={i}
            className={`dot${i === currentIndex ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ryba ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
