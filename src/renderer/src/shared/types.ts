export interface TrackInfo {
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
  tracks: TrackInfo[]
}