$(document).ready(function() {
    var topics = ["Hamburger", "Hotdog", "Tacos", "Pizza", "Soup","Noodles","Cookie","Ice cream"]
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
        var addButton= $("#user-input").val()
        topics.unshift(addButton);
        GenerateButtons();

        })

              // Use API to search for selected topic and display images
            var food = $(this).attr("data-name");
            var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=qF26EQ71WEAdIYhWDmXlY3fLjbTDBcFC")
            queryURL.done(function(data) { console.log("success got data", data); });
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            $(".gif-view").empty();
            for (var i = 0; i<response.data.length; i++) { 
                var topicDiv = $('<div class="topic">'); 
                var image = response.data[i].images.fixed_height_still.url;
                var rating = response.data[i].rating;
                topicDiv.append(
                    '<figure class="floatLeft">' + 
                        '<img class="gif" src="' + image + '">' +
                        '<figcaption>' + 'Rating: ' + rating + '</figcaption>' +
                    '</figure>' 
                );

                // Display gifs on page
                $(".gif-view").append(topicDiv);
            }
             // Display gifs of when selected topic is clicked
    $(document).on("click", ".food", displayGifs);

    generateButtons();

        });

  

            
            

            
        



})































