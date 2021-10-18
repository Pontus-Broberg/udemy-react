import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID vOkveJnDg3ch19E60SdKSCMKwTpMUNmpXsF8ealanRM",
  },
});
