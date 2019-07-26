var uri = new URL(location.href);
var nav_div = document.getElementById("nav-list");
var links = nav_div.getElementsByTagName("a");
var index = 0;
var url_path = uri.pathname;
if(url_path!==""){
    for (var i=links.length; i--;) {
        if(links[i].href.indexOf(url_path) !== -1&&url_path!=="/"){
            index = i;
            break;
        }
    }
}
links[index].className = 'nav-list-link active';
