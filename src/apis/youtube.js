import axios from "axios";
const KEY = "AIzaSyCmZ35pjO3VJ9L_PfglqMDz6x_QrpqJSq0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    Client_ID: KEY
  }
});
