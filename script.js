var len;
var results = '';
var count = 1;

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: "https://api.bing.microsoft.com/v7.0/search?" + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "1fe7928c6cb3473585f02c7c9bbe0fee");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });

    
}

function searchFunction() {
    results = "";
    document.getElementById("searchResults").style.visibility = "visible";
    apiSearch()
};

function changeBackground() {
    if (count % 2 == 0) {
        document.body.style.background = 'url(https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1221&q=80)'
    } else {
        document.body.style.background = 'url(https://images.unsplash.com/photo-1663603846233-c00ceff09aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)'
    }

    count++;
};

function tellTime() {
    document.getElementById("time").style.visibility = "visible";
    var now = new Date();
    var currTime = now.getHours() + ":" + now.getMinutes();
    document.getElementById("time").innerHTML = currTime;
    
};