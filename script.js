let bookmarks = [];

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("bookmark-form");

  form.addEventListener("submit", addBookmark);
});

function addBookmark() {
  event.preventDefault();

  let urlInput = document.getElementById("url-input");
  let url = urlInput.value;

  console.log("Url Ingevoerd:", url);

  if (url.trim() === ""){
    console.log("Url is leeg")
    return;
  }
}
