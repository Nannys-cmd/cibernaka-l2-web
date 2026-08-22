// src/components/Navigation.jsx

import '../styles/Navigation.css'

function Navigation() {
  return (
    <nav className="main-nav">

      <a
        href="https://cibernakastream.netlify.app/"
        className="nav-link nav-link-streams"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="nav-icon">🎮</span>

        <span className="nav-text">
          CiberNaka Stream
        </span>
      </a>

    </nav>
  )
}

export default Navigation