import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate, matchPath } from 'react-router-dom'

import Main from './components/Pages/Main/Main'
import TrackList from './components/Pages/TrackList/TrackList'
import Player from './components/Pages/Player/Player'
import Navbar from './components/Navbar/Navbar'

import { NavBarProps } from '@renderer/shared/types'
import type { Playlist, TrackInfo, UserLibrary } from '@renderer/shared/types'

import './App.css'

const tracksData: TrackInfo[] = [
  { track_id: 'track-1', track_artist: 'cowboyclicker', track_name: 'monster', track_duration: 1, track_image: '', track_path: '' },
  { track_id: 'track-2', track_artist: 'Skrillex', track_name: 'First of the Year', track_duration: 1, track_image: '', track_path: '' }
]

const playlistsData: Playlist[] = [
  { id: 'playlist-1', title: 'Random', author: 'Me', image_path: '', tracks: tracksData },
  { id: 'playlist-2', title: 'Aboba)', author: 'sample_author', image_path: '', tracks: tracksData }
]

const userLib: UserLibrary = {
  personalPlaylists: playlistsData,
  personalTracks: tracksData
}

type TabId =
  | '/'
  | '/player/:id'
  | '/favourites'
  | '/settings'
  | '/playlist/:id'

const NAV_CONFIG: Record<TabId, NavBarProps['config']> = {
  '/':             { showBack: false, showMenu: true},
  '/player/:id':   { showBack: true,  showMenu: false},
  '/favourites':   { showBack: false, showMenu: true},
  '/settings':     { showBack: false, showMenu: true},
  '/playlist/:id': { showBack: true,  showMenu: false}
}

function App(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const playlistMatch = matchPath('/playlist/:id', pathname)
  const playerMatch = matchPath('/player/:id', pathname)

  const matchedKey: TabId | undefined = playlistMatch
    ? '/playlist/:id'
    : playerMatch
      ? '/player/:id'
      : (pathname as TabId)

  const baseConfig: NavBarProps['config'] =
    NAV_CONFIG[matchedKey] ?? { showBack: false, showMenu: true }

  const currentPlaylist = playlistMatch
    ? playlistsData.find((p) => p.id === playlistMatch.params.id)
    : undefined

  const allTracks = playlistsData.flatMap((p) => p.tracks)
  const currentTrack = playerMatch
    ? allTracks.find((t) => t.track_id === playerMatch.params.id)
    : undefined

  return (
    <>
      <Navbar
        config={baseConfig}
        onBack={() => navigate(-1)}
        onMenuToggle={() => setMenuOpen((v) => !v)}
      />
      <Routes>
        <Route path="/" element={<Main {...userLib} />} />
        <Route
          path="/playlist/:id"
          element={
            currentPlaylist
              ? <TrackList {...currentPlaylist} />
              : <p>Плейлист не найден</p>
          }
        />
        <Route
          path="/player/:id"
          element={
            currentTrack
              ? <Player track={currentTrack} />
              : <p>Трек не найден</p>
          }
        />
      </Routes>
    </>
  )
}

export default App