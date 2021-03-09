"use strict";

function routeFw (params) {

    var fw = {}; // creating and adorning this object to be passed back to the HTML page.

    var contentId = params.contentId || "view";

    var startLink = params.startLink || "#/home";

    if (!params.routeArray || params.routeArray[0]) {
        alert("parameter object must specify array 'routeArray' with at least one element");
        return;
    }

    // Declare a (private) array to store the routes.
    var routes = params.routeArray;

    function inject(what) {
        document.getElementById(contentId).innerHTML = "";
        document.getElementById(contentId).appendChild(what);
    }

    // private function that will be called whenever a link is clicked (or href changed)
    function router() { // private function

        var path = location.hash;
        console.log('path is ' + path);
        if (!routes[path]) {
            var ele = document.createElement("div");
            ele.innerHTML = "<p>Error: unknown link '" + path + "' never added to the routing table.</p>";
            inject(ele);
        } else {
            var ele = routes[path](); // returns DOM element from the function stored in the routes associative array
            inject (ele);   
        }
    }

    fw.printRoutes = function () {
        console.log("routes will be printed on the next line ");

        console.log(routes);
    };

    window.addEventListener('hashchange', router);

    location.hash = "xxx";

    location.hash = startLink;
    console.log("initial location.hash is " + location.hash);

    return fw;
}