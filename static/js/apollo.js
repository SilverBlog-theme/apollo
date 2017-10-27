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

var uri = new URL(location.href);
var nav_div = document.getElementById("nav-list");
var links = nav_div.getElementsByTagName("a");
var index = 0;
var url_path = uri.pathname;
if(url_path!==""){
    for (var i=links.length; i--;) {
        if(links[i].href==url_path){
            index = i;
            break;
        }
    }
}
links[index].className = 'nav-list-link active';

var dateItem = document.getElementsByClassName("post-info");
for (var i in dateItem) {
    if (dateItem[i].innerHTML != "") {
        dateItem[i].innerHTML = timeSince(new Date(dateItem[i].innerHTML).getTime());
    }
}

hljs.initHighlightingOnLoad();
