import { useState, useEffect, useRef } from 'react'
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
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarDocked, setSidebarDocked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [revealAll, setRevealAll] = useState(false)
  const activeItemRef = useRef(null)
  const NAVBAR_HEIGHT = 60

  const [sidebarTop, setSidebarTop] = useState(NAVBAR_HEIGHT)

  useEffect(() => {
    function handleScroll() {
      setSidebarTop(Math.max(0, NAVBAR_HEIGHT - window.scrollY))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showAnswers = revealAll || revealed

  const fish = list[currentIndex]

  function goTo(index) {
    setCurrentIndex(index)
    if (!revealAll) setRevealed(false)
    setImageLoaded(false)
  }

  function goPrev() {
    goTo((currentIndex - 1 + list.length) % list.length)
  }

  function goNext() {
    goTo((currentIndex + 1) % list.length)
  }

  function goToById(id) {
    const idx = list.findIndex(f => f.id === id)
    if (idx !== -1) goTo(idx)
  }

  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [currentIndex])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentIndex, list])

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
    <div className={`galeria-page${sidebarDocked && sidebarOpen ? ' docked' : ''}`}>

      {/* Side panel */}
      <div
        className={`galeria-sidebar${sidebarOpen ? ' open' : ''}${sidebarDocked ? ' docked' : ''}`}
        style={sidebarDocked ? {} : { top: sidebarTop, height: `calc(100vh - ${sidebarTop}px)` }}
      >
        <div className="sidebar-inner">
          <div className="sidebar-header">
            <span className="sidebar-title">Wszystkie ryby ({sortedAlpha.length})</span>
            <label className="sidebar-dock-label">
              <input
                type="checkbox"
                checked={sidebarDocked}
                onChange={(e) => setSidebarDocked(e.target.checked)}
              />
              Przypnij
            </label>
            <button className="sidebar-close" onClick={() => { setSidebarOpen(false); setSidebarDocked(false) }} aria-label="Zamknij panel">✕</button>
          </div>
          <ul className="sidebar-list">
            {sortedAlpha.map((f) => {
              const idxInList = list.findIndex(item => item.id === f.id)
              const isActive = list[currentIndex]?.id === f.id
              return (
                <li
                  key={f.id}
                  ref={isActive ? activeItemRef : null}
                  className={`sidebar-item${isActive ? ' active' : ''}`}
                  onClick={() => goToById(f.id)}
                >
                  <span className="sidebar-fish-name">{f.name}</span>
                  <span className="sidebar-fish-latin">{f.nazwaLacinska}</span>
                  <div className="sidebar-fish-meta">
                    <span><span className="sidebar-meta-label">📏 Wymiar:</span> {f.wymiarOchronny}</span>
                    <span><span className="sidebar-meta-label">🗓 Okres ochronny:</span> {f.okresOchronny || 'Brak okresu ochronnego'}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Sidebar toggle tab */}
      <button
        className={`sidebar-toggle-tab${sidebarOpen ? ' open' : ''}${sidebarDocked && sidebarOpen ? ' docked' : ''}`}
        style={sidebarDocked ? {} : { top: `calc(50vh - ${(60 - sidebarTop) / 2}px)` }}
        onClick={() => { if (sidebarOpen) { setSidebarOpen(false); setSidebarDocked(false) } else { setSidebarOpen(true) } }}
        title={sidebarOpen ? 'Zamknij listę ryb' : 'Otwórz listę ryb'}
      >
        <span className="sidebar-tab-arrow">{sidebarOpen ? '▶' : '◀'}</span>
        <span className="sidebar-tab-text">Lista wszystkich ryb</span>
      </button>

      <div className={`galeria-container${sidebarDocked && sidebarOpen ? ' docked' : ''}`}>
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
        <label className="reveal-all-label">
          <input
            type="checkbox"
            checked={revealAll}
            onChange={(e) => {
              setRevealAll(e.target.checked)
              if (!e.target.checked) setRevealed(false)
            }}
          />
          Wszystkie odpowiedzi odkryte
        </label>
      </div>
      <p className="galeria-subtitle">
        Kliknij na zdjęcie, aby odkryć odpowiedzi.
      </p>

      <div className="galeria-card">
        {/* Fish image / placeholder */}
        <div
          className={`fish-image-wrapper${showAnswers ? ' revealed' : ''}`}
          onClick={() => !revealAll && setRevealed((r) => !r)}
          title={revealAll ? '' : showAnswers ? 'Kliknij, aby ukryć' : 'Kliknij, aby odkryć odpowiedzi'}
        >
          {fish.image ? (
            <>
              {!imageLoaded && (
                <div className="fish-loading">
                  <div className="fish-spinner" />
                  <span>Wczytywanie...</span>
                </div>
              )}
              <img
                key={fish.image}
                src={fish.image}
                alt={fish.name}
                className="fish-image"
                style={{ display: imageLoaded ? 'block' : 'none' }}
                onLoad={() => setImageLoaded(true)}
              />
            </>
          ) : (
            <div className="fish-placeholder">
              🐟
              <span>Zdjęcie wkrótce</span>
            </div>
          )}
          <div className="fish-image-hint">
            {revealAll ? null : showAnswers ? '🔼 Ukryj odpowiedzi' : '🔽 Odkryj odpowiedzi'}
          </div>
        </div>

        {/* Questions always visible */}
        <div className="fish-questions">
          <div className="question-row">
            <span className="question-label">Jak nazywa się ta ryba?</span>
            {showAnswers && (
              <div className="answer-block">
                <span className="answer">{fish.name}</span>
                <span className="answer-latin">{fish.nazwaLacinska}</span>
              </div>
            )}
          </div>
          <div className="question-row">
            <span className="question-label">Jaki jest okres ochronny tej ryby?</span>
            {showAnswers && <span className="answer">{fish.okresOchronny}</span>}
          </div>
          <div className="question-row">
            <span className="question-label">Poniżej jakiego rozmiaru rybę należy wypuścić?</span>
            {showAnswers && <span className="answer">{fish.wymiarOchronny}</span>}
          </div>

          {showAnswers && fish.informacjeDodatkowe && (
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
      <p className="keyboard-hint">Możesz też nawigować strzałkami &#8592; &#8594; na klawiaturze</p>

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

    </div>
  )
}
