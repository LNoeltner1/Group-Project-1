// To create a popup, add the data-role="popup" attribute to a div with
// the popup contents. Then create a link with the href set to the id of
// the popup div, and add the attribute data-rel="popup" to tell the framework
// to open the popup when the link is tapped.
// $(document).ready(function () {
//   $("#permissionPopup").modal("show");
// });

$("#logo").on("click", function () {
  $("#currentPage").text("Home Page");
});

$("#searchBtn").on("click", function () {
  // var apiKey = "#";
  var searchInput = $("searchBox").val();
  var queryURL =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
    searchInput;
  $("#currentPage").text("Search:");
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // $("media1").innerHtml();
    // $("media2").innerHtml();
    // $("media3").innerHtml();
    $("title1").text("Title: " + response);
    $("title2").text("Title: " + response);
    $("title3").text("Title: " + response);
    $("description1").text("Description: " + response);
    $("description2").text("Description: " + response);
    $("description3").text("Description: " + response);
  });
});

$("#musicBtn").on("click", function () {
  var apiKey = "#";
  var searchInput = $("#searchInput").val();
  var queryURL =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
    searchInput;
  $("#currentPage").text("Music");
  cors = "https://cors-anywhere.herokuapp.com/";
  $.ajax({
    queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // $("media1").innerHtml();
    // $("media2").innerHtml();
    // $("media3").innerHtml();
    $("title1").text("Title: " + response);
    $("title2").text("Title: " + response);
    $("title3").text("Title: " + response);
    $("description1").text("Description: " + response);
    $("description2").text("Description: " + response);
    $("description3").text("Description: " + response);
  });
});

$("#vidBtn").on("click", function () {
  var apiKey = "#";
  var searchInput = $("#searchInput").val();
  var queryURL = "";
  $("#currentPage").text("Videos");
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // $("media1").innerHtml();
    // $("media2").innerHtml();
    // $("media3").innerHtml();
    $("title1").text("Title: " + response);
    $("title2").text("Title: " + response);
    $("title3").text("Title: " + response);
    $("description1").text("Description: " + response);
    $("description2").text("Description: " + response);
    $("description3").text("Description: " + response);
  });
});

$("#picBtn").on("click", function () {
  var apiKey = "#";
  var searchInput = $("#searchInput").val();
  var queryURL = "";
  $("#currentPage").text("Pictures");
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // $("media1").innerHtml();
    // $("media2").innerHtml();
    // $("media3").innerHtml();
    $("title1").text("Title: " + response);
    $("title2").text("Title: " + response);
    $("title3").text("Title: " + response);
    $("description1").text("Description: " + response);
    $("description2").text("Description: " + response);
    $("description3").text("Description: " + response);
  });
});

$("#artBtn").on("click", function () {
  var objectID = "297";
  var queryURL =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
    objectID;
  $("#currentPage").text("Ninja Turtle Art");
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    console.log(response.artistDisplayName);

    // $("media1").innerHtml();
    // $("media2").innerHtml();
    // $("media3").innerHtml();
    $("title1").text(response.title);
    $("title2").text("Title: " + response);
    $("title3").text("Title: " + response);
    $("description1").text("Description: " + response.artistDisplayName);
    $("description2").text("Description: " + response);
    $("description3").text("Description: " + response);
  });
});
