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
            results += "<li>Released: " + json.Released + "</li>";
            results += "<li>Actors: " + json.Actors + "</li>";
            results += "<li>Plot: " + json.Plot + "</li>";
            results += "</ul>";
            results += "<img class=\"image-fluid\" src=\"" + json.Poster + " alt=\"Poster\" height=\"450\" width=\"300\">";
            }
            
            
            document.getElementById("result").innerHTML = results;
        })
}
