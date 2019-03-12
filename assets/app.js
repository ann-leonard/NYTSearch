$(document).ready(function () {





    $("#submit").on("click", function (event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();

        var query = $("#search-input").val();
        var startYear = $("#start-year").val();
        var endYear = $("#end-year").val();
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&facet_fields=source&facet=true&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&api-key=gaaUPqq5CREre6dJLXXyMb4vIiMlSK4n";






        console.log(query);
        console.log(startYear);
        console.log(endYear);

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.response.docs);

            var numRecords;
            numRecords = 5;

            for (var i = 0; i <= numRecords; i++) {
                var articleUrls = response.response.docs[i].web_url;
                console.log(articleUrls);
                var snippet = response.response.docs[i].snippet;

                var a = $("<a>");
                a.text(snippet);
                a.attr("href", articleUrls);

                $("#articles").append(a);
                $("#articles").append('<br>');



            }



        });

    })












});