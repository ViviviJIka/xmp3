import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import TrackList from "./components/Pages/TrackList/TrackList"
import Player from "./components/Pages/Player/Player";
import Navbar from './components/Navbar/Navbar'

import { NavBarProps } from '@renderer/shared/types'

import './App.css' 

const trackInfo = {
  track_artist: "cowboyclicker",
  track_name: "monster",
  track_duration: 123,
  track_image: '',
  track_path: ''
}

type TabId = '/player' | '/library' | '/favourites' | '/settings'

const NAV_CONFIG: Record<TabId, NavBarProps['config']> = {
  '/player':     { showBack: true,  showMenu: false, title: '' },
  '/library':    { showBack: false, showMenu: true,  title: 'Библиотека' },
  '/favourites': { showBack: false, showMenu: true,  title: 'Избранное' },
  '/settings':   { showBack: false, showMenu: true,  title: 'Настройки' }
}

function App(): React.JSX.Element { 
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const config = NAV_CONFIG[pathname] ?? { showBack: false, showMenu: true}

  return (
    <>
      <Navbar
        config={config}
        onBack={() => navigate(-1)}
        onMenuToggle={() => setMenuOpen((v) => !v)}
      />
      <Routes>
        <Route path="/" element={<TrackList/>}/>
        <Route path="/player" element={<Player track={trackInfo}/>}/>
        {/* <TrackList/> */}
        {/* <Player track={trackInfo}/> */}
      </Routes>
    </>
  )
}

export default App