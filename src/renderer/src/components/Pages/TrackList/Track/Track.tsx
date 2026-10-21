import { TrackInfo } from '../../../../shared/types'
import './Track.css'

interface TrackProps {
    track: TrackInfo
}

function Track( {track}: TrackProps) {
    return(
        <li>
            <div className="track-item">
                {track.track_image !== '' ? (
                        <img src={track.track_image} alt="" className="track-image" width={50} height={50}/>
                    ) : (
                        <div className="track-image-plug"></div>
                    )
                }
                <div className="track-item-text">
                    <h2 className="track-artist">{track.track_artist}</h2>
                    -
                    <h2 className="track-title">{track.track_name}</h2>
                </div>
                <svg viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f2f2f2">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke='#d9e7e8' stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
        </li>
    )
}



export default Track;