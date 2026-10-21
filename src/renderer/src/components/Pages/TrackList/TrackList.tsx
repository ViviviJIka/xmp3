import './TrackList.css'

import Track from './Track/Track';
import type { Playlist } from '@renderer/shared/types';

const playlist: Playlist = {
    id: 'playlist-1',
    title: 'Random',
    tracks: [
        {
            track_artist: "cowboyclicker",
            track_name: "monster",
            track_duration: 1,
            track_image: '',
            track_path: ''
        }, 
        {
            track_artist: "Skrillex",
            track_name: "First of the Year",
            track_duration: 1,
            track_image: '',
            track_path: ''
        }
    ]
}

function TrackList() {
    return(
        <div className="track-list-wrapper">
            {playlist.tracks.length === 0 ? (
                <h1 className="track-list-plug">Playlist empty :(</h1>
            ) : (
                <>
                    <h1 className="track-list-title">{playlist.title}</h1>
                    <ul className="track-list">
                        {playlist.tracks.map((track) => (
                            <Track key={track.id} track={track} />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default TrackList;