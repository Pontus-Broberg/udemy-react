import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Call me if you get lost", duration: "52:50" },
    { title: "Sir Baudelaire", duration: "1:28" },
    { title: "Wusyaname", duration: "2:01" },
    { title: "Corso", duration: "2:26" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
