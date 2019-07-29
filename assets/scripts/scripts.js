function search () {

    var limits = 10 ; 
    var key = "UVnpxFRB95u8V3IKchmytigRr3zrn3zZ" ; 
    var search = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ search + "&api_key=" + key + "&limit=" + limits;

    $(".giph").empty(); 