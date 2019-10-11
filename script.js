let searchMovie = function(event) {
    //   event.preventDefault();

    const movie = document.getElementById("movieTitle").value;
    const url = "http://www.omdbapi.com/?t=" + movie + "&apikey=ae3a1bc8";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            var results = "";
            if(json.Response == "False"){
                results += json.Error;
            }
            else{
            results += "<h3>" + json.Title + "</h3>"
            results += "<ul>";
            results += "<li><b>Released: </b>" + json.Released + "</li>";
            results += "<li><b>Actors: </b>" + json.Actors + "</li>";
            results += "<li><b>Plot: </b>" + json.Plot + "</li>";
            results += "<button type=\"button\" onclick=\"moreDetails\">More Details?</button><br>"
            results += "</ul>";
            results += "<img class=\"image-fluid\" src=\"" + json.Poster + " alt=\"Poster\">";
            }
            
            
            document.getElementById("result").innerHTML = results;
        })
}
