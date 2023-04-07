$(document).ready(function () {
  $("#Button1").click(function () {
    // http://www.omdbapi.com/?apikey=bc7a997c&type=movie&page=1
    // http://www.omdbapi.com/?t=interstellar&apikey=bc7a997c&
    $.get(
      "http://www.omdbapi.com/?apikey=bc7a997c&s=interstellar&type=movie&page=1",
      function (movies) {
        // $(".container").text(data.Title);
        console.log(movies);
        movies.Search.forEach(data => {
            $("body").append(`
            <div class="poster">
                <img src="${data.Poster}" alt="[Movie Title] Poster">
                <h2>${data.Title}</h2>
                <p>${data.Plot}</p>
                <p><span class="year">Year: </span>${data.Year}</p>
            </div>
            `);
        });
        // $("body").append(`
        //     <div class="poster">
        //         <img src="${data.Poster}" alt="[Movie Title] Poster">
        //         <h2>${data.Title}</h2>
        //         <p>${data.Plot}</p>
        //         <p><span class="year">Year: </span>${data.Year}</p>
        //     </div>
        //     `);
      }
    );
  });
});
