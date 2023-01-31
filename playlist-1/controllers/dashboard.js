import { playlistCollection } from "../../playlist-2/models/playlist-store";
export const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Playlist Dashboard",
      playlists: playlistCollection,
    };
    console.log("about to render" + playlistCollection);
    response.render("dashboard", viewData);
  },
};
