$(document).ready(function() {
    var topics = ["Hamburger", "hotdog", "Tacos", "Pizza", "soup","noodles","cookie","ice cream"]
    GenerateButtons();
    //  create buttons in html from array of strings
    function GenerateButtons () {
        $(".gif-buttons").empty();
        // use loop to append buttons
        for (var i=0; i < topics.length; i++) {
            var button =$('<button>');
            button.addClass("btn btn-warning food");
            button.attr("data-name", topics[i]);
            button.text(topics[i]);
            $(".gif-buttons").append(button);
        }
    }   
        // add new buttons to list
        $(".submit").on("click", function(event) {
        event.preventDefault();
        var addFood = $("#user-input").val()
        $("#user-input").val(" ")
        topics.unshift(addFood);
        GenerateButtons();
        console.log("clicked")
        })


























})































