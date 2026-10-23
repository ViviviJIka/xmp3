import './TrackList.css'

import Track from './Track/Track';
import type { Playlist } from '@renderer/shared/types';



function TrackList({id, title, tracks}: Playlist) {
    return(
        <div className="track-list-wrapper">
            {tracks.length === 0 ? (
                <h1 className="track-list-plug">Playlist empty :(</h1>
            ) : (
                <>
                    <h1 className="track-list-title">{title}</h1>
                    <ul className="track-list">
                        {tracks.map((track) => (
                            <Track key={track.track_id} track={track} />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default TrackList;