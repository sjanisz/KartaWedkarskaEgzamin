import './Navbar.css'

const tabs = [
  { id: 'galeria', label: 'Galeria Ryb' },
  { id: 'linki', label: 'Przydatne linki' },
]

export default function Navbar({ activeTab, onTabChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🎣 Egzamin Wędkarski</div>
      <ul className="navbar-tabs">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              className={`navbar-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
