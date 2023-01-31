export const about = {
  index(request, response) {
    logger.info("about rendering");
    const viewData = {
      title: "About Playlist 1",
    };
    console.log("about" + viewData);
    response.render("about", viewData);
  },
};
