// To create a popup, add the data-role="popup" attribute to a div with
// the popup contents. Then create a link with the href set to the id of
// the popup div, and add the attribute data-rel="popup" to tell the framework
// to open the popup when the link is tapped.
// $(document).ready(function () {
//   $("#permissionPopup").popup("show");
// });

$("#logo").on("click", function () {
  $("#currentPage").text("Home Page");
});

$("#searchBtn").on("click", function () {
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

    $("media1").text(response);
    // $("media2").innerHtml();
    // $("media3").innerHtml();
    $("#title1").text("Title: " + response);
    $("#title2").text("Title: " + response);
    $("#title3").text("Title: " + response);
    $("#description1").text("Description: " + response);
    $("#description2").text("Description: " + response);
    $("#description3").text("Description: " + response);
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

    // $("#media1").innerHtml();
    // $("#media2").innerHtml();
    // $("#media3").innerHtml();
    $("#title1").text("Title: " + response);
    $("#title2").text("Title: " + response);
    $("#title3").text("Title: " + response);
    $("#description1").text("Description: " + response);
    $("#description2").text("Description: " + response);
    $("#description3").text("Description: " + response);
  });
});

$("#vidBtn").on("click", function () {
  var queryURL = "";
  $("#currentPage").text("Videos");
  var cors = "https://cors-anywhere.herokuapp.com/";
  $.ajax({
    queryURL: cors + "https://openwhyd.org/hot/classical?format=json/",
    method: "GET",
    format: "JSON",
  }).then(function (response) {
    console.log(response);
    $("#title1").text("Title: " + response);
    $("#title2").text("Title: " + response);
    $("#title3").text("Title: " + response);
    $("#description1").text("Description: " + response);
    $("#description2").text("Description: " + response);
    $("#description3").text("Description: " + response);
  });
});

$("#artBtn").on("click", function () {
  var objectID = Math.floor(Math.random(1) * 700000);

  console.log(objectID);
  var queryURL =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
    objectID;

  $("#currentPage").text("Art from the Museum");
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // console.log(response);
    if (response.primaryImageSmall !== null || response !== null) {
      $("#artImage").attr("src", response.primaryImageSmall);
      $("#title1").text("Title: '" + response.title + "'");
      $("#description1").text(
        "Artist: " +
          response.artistDisplayName +
          ", Year: " +
          response.objectDate
      );
      $("#description2").text(
        "Medium: " + response.medium + ", Culture: " + response.culture
      );
    }
  });
});
$("div:has(p)").addClass("test");
elementList = parentNode.querySelectorAll(selectors);

// var cors = "https://cors-anywhere.herokuapp.com/";
//   $.ajax({
//     url:"https://openwhyd.org/hot/classical?format=json/",
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//   });
