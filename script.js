$(document).ready(function () {
  $("#CenterDIV").css("display", "block");

  $("#yesBtn").click(function () {
    $("#CenterDIV").css("display", "none");
  });
  $(".noBtn").click(function () {
    window.location = "https://sos.fbi.gov/en/";
  });
});



$("#logo").on("click", function () {
    $("#currentPage").text("Home Page");
});

$("#searchBtn").on("click", function () {
  $("#artImage").attr("src", "");
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
  $("#artImage").attr("src", "");
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
  $("#video").css("display", "block");
  $("#artImage").attr("src", "");
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
    $("#description1").text("Description: " + response);
    $("#description2").text("Description: " + response);
    $("#description3").text("Description: " + response);
  });
});

$("#artBtn").on("click", function () {
  var objectID = Math.floor(Math.random(1) * 700000);
  $("#video").css("display", "none");
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

