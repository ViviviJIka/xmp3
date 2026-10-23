export interface TrackInfo {
  track_id: string,
  track_artist: string,
  track_name: string,
  track_duration: number,
  track_image: string,
  track_path: string
}

export interface NavBarProps {
  config: {
    showBack: boolean
    showMenu: boolean
    title?: string
  }
  onBack: () => void
  onMenuToggle: () => void
}

export interface Playlist {
  id: string,
  title: string,
  author: string,
  image_path: string,
  tracks: TrackInfo[]
}

export interface UserLibrary {
  personalPlaylists: Playlist[],
  personalTracks: TrackInfo[]
}