import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/photos/",
  headers: {
    Authorization: "Client-ID pvD_-3eZQ_bOmVcWzbHVNCi5whX-8wVeEU1rnz4BwP0",
  },
});
