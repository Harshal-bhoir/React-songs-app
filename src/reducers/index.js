import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Take on me", duration: "3:31" },
    { title: "One", duration: "6:12" },
    { title: "Holy Wars", duration: "5:53" },
    { title: "Master of Puppets", duration: "4:13" },
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
