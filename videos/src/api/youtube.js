import axios from "axios";

const KEY = "AIzaSyC6bBDgi7V0Xd-y480TeDFFR6Wb4Cn159I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
