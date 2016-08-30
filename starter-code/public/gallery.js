$(document).ready(function() {
  //$("form").submit(function(event) {
    /*$.ajax({
      method: "POST",
      url: "http://localhost:3000/api/artworks",
      data: $("#art-form").serialize(),
      success: handleArtCreateSuccess,
      error: handleArtCreateError
    })
  //});*/

});

function handleArtCreateSuccess(res) {
  console.log(res);
  console.log(res.title);
  console.log(res.artist);
  console.log(res.description);
}

function handleArtCreateError() {
  console.log("DAMN.");
}
