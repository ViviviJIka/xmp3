import './Navbar.css'

import { NavBarProps } from '@renderer/shared/types'

function Navbar({ config, onBack, onMenuToggle }: NavBarProps) {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-left">
        {config.showBack && (
          <button
            type="button"
            className="navbar-button"
            onClick={onBack}
            aria-label="Назад"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button>
        )}

        {config.showMenu && (
          <button
            type="button"
            className="navbar-button"
            onClick={onMenuToggle}
            aria-label="Меню"
            aria-haspopup="menu"
          >
            ≡
          </button>
        )}
      </div>

      <div className="navbar-center">
        {config.title && <span className="navbar-title">{config.title}</span>}
      </div>

      <div className="navbar-right" />
    </nav>
  )
}

export default Navbar