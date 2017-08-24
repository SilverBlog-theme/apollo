var gapType = [
    {max: 60, suffix: " seconds ago"},
    {max: 3600, suffix: " minutes ago"},
    {max: 86400, suffix: " hours ago"},
    {max: 604800, suffix: " days ago"},
    {max: 2592000, suffix: " weeks ago"},
    {max: 31536000, suffix: " months ago"}
];

timeSince = function (date) {
    var gap = (new Date().getTime() - date) / 1000;
    var i = 0;
    while (true) {
        if (gap >= ((i <= 0) ? 0 : gapType[i - 1].max) && gap < gapType[i].max) {
            return Math.floor(gap / ((i <= 0) ? 1 : gapType[i - 1].max)) + gapType[i].suffix;
        } else if (gap > gapType[gapType.length - 1].max || gap < 0 || i >= gapType.length) {
            var ds = new Date(date).toDateString().split(" ");
            return ds[1] + " " + ds[2] + ", " + ds[3];
        } else {
            i += 1;
        }
    }
};

(function(){
          var re1='.*?';	// Non-greedy match on filler
      var re2='\\/';	// Uninteresting: c
      var re3='.*?';	// Non-greedy match on filler
      var re4='\\/';	// Uninteresting: c
      var re5='.*?';	// Non-greedy match on filler
      var re6='(\\/)';	// Any Single Character 1
      var re7='((?:[a-z][a-z]+))';	// Word 1

    var re = new RegExp(re1+re2+re3+re4+re5+re6+re7,["i"]);
    var re_return = location.href.match(re);
    var nav_div = document.getElementById("nav-list");
    var links = nav_div.getElementsByTagName("a");
    var index = 0;
    if(re_return!==null){
        var url = re_return[1];
        for (var i=links.length; i--;) {
            if(links[i].href.indexOf(url) !== -1){
                index = i;
                break;
            }
        }
    }
    links[index].className = 'nav-list-link active';
})();

var dateItem = document.getElementsByClassName("post-info");
for (var i in dateItem) {
    if (dateItem[i].innerHTML != "") {
        dateItem[i].innerHTML = timeSince(new Date(dateItem[i].innerHTML).getTime());
    }
}

hljs.initHighlightingOnLoad();
