import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import ExploreIdeas from './components/ExploreIdeas'
import AskExperts from './components/AskExperts'
import FindProfessionals from './components/FindProfessionals'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore" element={<ExploreIdeas />} />
        <Route path="/find-professionals" element={<FindProfessionals />} />
        <Route path="/ask-experts" element={<AskExperts />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
