import { useState } from 'react'
import Navbar from './components/Navbar'
import GaleriaRyb from './pages/GaleriaRyb'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('galeria')

  return (
    <div className="app">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="app-main">
        {activeTab === 'galeria' && <GaleriaRyb />}
      </main>
    </div>
  )
}
