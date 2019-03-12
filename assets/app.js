$(document).ready(function () {

    var query = "volcano";
    var beginYear = 2000;
    var endYear = 2010;

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&facet_fields=source&facet=true&begin_date=" + beginYear + "0101&end_date=" + endYear + "1231&api-key=gaaUPqq5CREre6dJLXXyMb4vIiMlSK4n";


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

            $(".articles").append(a);
            $(".articles").append('<br>');


        }





    })












});