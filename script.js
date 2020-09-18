// add event listeners

var queryURL=


$("#searchBtn").on("click", function () {
    var apiKey = "#";
    var searchInput = $("searchBox").val();
    var queryURL = "#";
  
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // console.log(response);
      $("#currentPage").text(
        response.name
      )});
})

$("#musicBtn").on("click", function () {
    var apiKey = "b0346eaaabff07a925bd456a2c1cf5a6";
    var cityInput = $("#searchInput").val();
    var queryURL = ;
  
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // console.log(response);
      $("#currentPage").text(
        response.name 
      )})
})

$("#vidBtn").on("click", function () {
    var apiKey = "b0346eaaabff07a925bd456a2c1cf5a6";
    var cityInput = $("#searchInput").val();
    var queryURL = ;
  
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // console.log(response);
      $("#currentPage").text(
        response.name 
      )})
})
$("#picBtn").on("click", function () {
    var apiKey = "b0346eaaabff07a925bd456a2c1cf5a6";
    var cityInput = $("#searchInput").val();
    var queryURL = ;
  
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // console.log(response);
      $("#currentPage").text(
        response.name 
      )})
})
