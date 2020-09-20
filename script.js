$(document).ready(function () {

});

var queryURL =


    $("#searchBtn").on("click", function () {
        var apiKey = "#";
        var searchInput = $("searchBox").val();
        var queryURL = "#";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            // console.log(response);
            $("#currentPage").text("Search:");
            $("media1").innerHtml();
            $("media2").innerHtml();
            $("media3").innerHtml();
            $("title1").text("Title: " + response);
            $("title2").text("Title: " + response);
            $("title3").text("Title: " + response);
            $("description1").text("Description: " + response);
            $("description2").text("Description: " + response);
            $("description3").text("Description: " + response);

        })
    });

$("#musicBtn").on("click", function () {
    var apiKey = "#";
    var searchInput = $("#searchInput").val();
    var queryURL =

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            // console.log(response);
            $("#currentPage").text("Music")
            $("media1").innerHtml();
            $("media2").innerHtml();
            $("media3").innerHtml();
            $("title1").text("Title: " + response);
            $("title2").text("Title: " + response);
            $("title3").text("Title: " + response);
            $("description1").text("Description: " + response);
            $("description2").text("Description: " + response);
            $("description3").text("Description: " + response);

        })
});

$("#vidBtn").on("click", function () {
    var apiKey = "#";
    var searchInput = $("#searchInput").val();
    var queryURL = ;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        // console.log(response);
        $("#currentPage").text("Videos")
        $("media1").innerHtml();
        $("media2").innerHtml();
        $("media3").innerHtml();
        $("title1").text("Title: " + response);
        $("title2").text("Title: " + response);
        $("title3").text("Title: " + response);
        $("description1").text("Description: " + response);
        $("description2").text("Description: " + response);
        $("description3").text("Description: " + response);
    })
})

$("#picBtn").on("click", function () {
    var apiKey = "#";
    var searchInput = $("#searchInput").val();
    var queryURL = ;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        // console.log(response);
        $("#currentPage").text("Jokes")
        $("media1").innerHtml();
        $("media2").innerHtml();
        $("media3").innerHtml();
        $("title1").text("Title: " + response);
        $("title2").text("Title: " + response);
        $("title3").text("Title: " + response);
        $("description1").text("Description: " + response);
        $("description2").text("Description: " + response);
        $("description3").text("Description: " + response);
    })
})
