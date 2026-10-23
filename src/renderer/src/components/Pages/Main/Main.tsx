import { useNavigate } from 'react-router-dom'
import './Main.css'
import type { UserLibrary } from '@renderer/shared/types'

function Main({ personalPlaylists, personalTracks }: UserLibrary) {
  const navigate = useNavigate()

  return (
    <div className="main-wrapper">
      <div className="main-personal-playlists personal-item">
        <h2 className="personal-playlists-title personal-title">My playlists</h2>
        <ul className="personal-playlists-list">
          {personalPlaylists.map((playlist) => (
            <li
              key={playlist.id}
              className="personal-playlists-item"
              onClick={() => navigate(`/playlist/${playlist.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  navigate(`/playlist/${playlist.id}`)
                }
              }}
            >
              {playlist.image_path !== '' ? (
                <img src={playlist.image_path} alt="" width={100} height={100} />
              ) : (
                <div className="personal-playlist-image-plug"></div>
              )}
              <h3 className="personal-playlist-title">{playlist.title}</h3>
              <h3 className="personal-playlist-author">{playlist.author}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-personal-tracks personal-item">
        <h2 className="personal-tracks-title personal-title">My music</h2>
        <ul className="personal-tracks-list">
          {personalTracks.map((track) => (
            <li
              key={track.track_id}
              className="personal-tracks-item"
              onClick={() => navigate(`/player/${track.track_id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  navigate(`/player/${track.track_id}`)
                }
              }}
            >
              {track.track_image !== '' ? (
                <img src={track.track_image} alt="" width={50} height={50} />
              ) : (
                <div className="personal-track-image-plug"></div>
              )}
              <h3 className="personal-track-author">
                {track.track_artist} - <span className="track-name">{track.track_name}</span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Main