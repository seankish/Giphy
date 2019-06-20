$(document).ready(function() {
    var topics = ["Hamburger", "Hotdog", "Tacos", "Pizza", "Soup","Noodles","Cookie","Ice cream"]
    // GenerateButtons();
    //  create buttons in html from array of strings
    function GenerateButtons () {
        $(".gif-buttons").empty();
        // use loop to append buttons
        for (var i=0; i < topics.length; i++) {
            var button =$('<button type="button">');
            button.addClass("btn btn-warning food");
            button.attr("data-name", topics[i]);
            button.text(topics[i]);
            $(".gif-buttons").append(button);
        }
    }   
        // add new buttons to list
        $(".submit").on("click", function(event) {
        event.preventDefault();
        var food= $(".form-control").val()
        $("#user-input").text("hello")
        topics.unshift(food);
        GenerateButtons();
        console.log("clicked")
            console.log(food)
        })
 
              // Use API to search for selected topic and display images
        function displayGifs() {
            var food = $(this).attr("data-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food  + "&api_key=qF26EQ71WEAdIYhWDmXlY3fLjbTDBcFC"
            // queryURL.done(function(data) { console.log("success got data", data); });
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)
            $(".gif-view").empty();
            for (var i = 0; i<response.data.length/2; i++) { 
                var topicDiv = $('<div class="topic">'); 
                var image = response.data[i].images.fixed_height_still.url;
                var gif =response.data[i].images.fixed_height.url
                var rating = response.data[i].rating;
                topicDiv.attr("src",image)
                topicDiv.attr("data-gif", gif)
                topicDiv.attr("class","topic-div")
                topicDiv.attr("data-index",i)
                topicDiv.attr("data-img",image)
                topicDiv.append(
                    '<figure>' + 
                '<img class="gif" src="' + image + '">' +
                        '<figcaption>' + 'Rating: ' + rating + '</figcaption>' +
                    '</figure>' +"<br>"
                );
                // Display gifs on page
                $(".gif-view").append(topicDiv);
            }
        });
    }          
    $(document).on("click", ".food", displayGifs);
    GenerateButtons();
    // animate gif on click
       
        
   
        $("body").on("click",".gif", function() {
            var src = $(this).attr('src');
            if($(this).hasClass('playing')) {
                // stop
                $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
                $(this).removeClass('playing');
            }
            else {
                // play
                $(this).addClass('playing');
                $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
            }
        });
        
    //     var currentIn = $(this).attr("data-index");
    //     var tempUrl = $(this).attr("data-gif");
    //     var tempUrl2 = $(this).attr("data-img");
    //     console.log(currentIn);
    //     console.log(tempUrl);
    //     if ($(this).attr("src") == tempUrl2) {
    //         $(this).attr("src", tempUrl);
    //     }
    //     else if ($(this).attr("src") == tempUrl) {
    //         $(this).attr("src", tempUrl2);
    //     };
    // });


})

































