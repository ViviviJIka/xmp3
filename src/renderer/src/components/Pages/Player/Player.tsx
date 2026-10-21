import { useState } from 'react'
import { TrackInfo } from '@renderer/shared/types'

import FavButton from '@renderer/components/FavButton/FavButton'
import Timeline from './Timeline/Timeline'

import { formatDuration } from '@renderer/shared/formatDuration'
import './Player.css'

interface TrackProps {
    track: TrackInfo
}

function Player( {track}: TrackProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <div className="player-wrapper">
            {track.track_image !== '' ? (
                    <img src={track.track_image} alt="" className="track-image" width={280} height={280}/>
                ) : (
                    <div className="player-image-plug"></div>
                )
            }
            <div className="player-track-text">
                <h2 className="player-track-title">{track.track_name}</h2>
                <h3 className="player-track-artist">{track.track_artist}</h3>
            </div>

            <Timeline value={0} max={track.track_duration} className='track-timeline'/>
            <div className="player-track-time">
                <h4 className="player-current-time">{'0:00'}</h4>
                <h4 className="player-total-time">{formatDuration(track.track_duration)}</h4>
            </div>

            <div className="player-buttons">
                {/* <button className="player-repeat-btn player-button">↻</button> */}
                <button className="player-prev-btn player-button">⏮</button>
                <button
                    type="button"
                    className="player-play-btn player-button"   
                    onClick={() => setIsPlaying((prev) => !prev)}
                    aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
                    aria-pressed={isPlaying}
                    >
                    {isPlaying ? '❚❚' : '▶'}
                </button>
                <button className="player-next-btn player-button">⏭</button>
                {/* <button className="player-button">
                    <FavButton width={30} height={30} color='#d9e7e8'/>
                </button> */}
            </div>
        </div>
    )
}

export default Player;