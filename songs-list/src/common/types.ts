export interface ISong {
  id: string;
  artist: string;
  title: string;
  duration: string;
}

export enum ESongActions {
  'selectSong'
}

export interface IState {
  selectedSong: ISong | null;
  songs: ISong[];
}