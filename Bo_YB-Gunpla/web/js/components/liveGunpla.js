function liveGunpla() {

// ` this is a "back tick". Use it to define multi-line strings in JavaScript.
var content = `  
    <style>
           
    h1 {
                text-align: center;
                padding-top: 70px;
            }
    
    .clickSort {  /* The reusable code "claims" this one className 
        The HTML coder can use these styles (to get default styling)
        or change if they want to. */
        text-align:center;
        }
    
    .clickSort table {
    margin:auto;     /* auto makes left and right margins the same, means centered */
    }

    .clickSort td {  /* applies to any <td> tag in any element classed "clickSort" */
        padding: 0.25rem;
        background-color: #DDEEEE;
        font-size:1rem;
    }

    .clickSort th {  /* applies to any <th> tag in any element classed "clickSort" */
        padding:0.25rem;
        padding-top:0.5rem;
        background-color: #AABBCC;
        font-weight: bold;
        font-size:1.1rem;
        white-space: nowrap; /* do not want multi word column headings (or sort icon) to wrap */
    }
    </style>
      <p>
        <h1>
            ---Find Gunpla---
        </h1>
      
        <div id="listHere" class="clickSort"></div>
      
      </p>
    `;
        "use strict"; // turn off the "auto variable declaration" feature of the browser.

        // invoke ajax function to read cars.json and if the call was successful, 
        // run function processJSON, otherwise, put an error message in the DOM element 
        // that has id "listHere".
        ajax("webAPIs/listOtherAPI.jsp", processData, document.getElementById("listHere"));
        function processData(obj) {

        // print out JS object/array that was converted from JSON data by ajax function
        console.log(obj);
                // build new list as we want the fields to appear in the HTML table
                // we can decide the order we want the fields to appear (first property defined is shown first)
                // we can combine, decide to exclude etc...
                if (obj.dbError.length > 0) {
        document.getElementById("listHere").innerHTML = obj.dbError;
                return;
        }
        list = obj.GunplaPostList;
        var gunplaList = [];
                // modify properties (image and price) of the array of objects so it will look 
                // better on the page.
        for (var i = 0; i < list.length; i++) {

            gunplaList[i] = {};
                // Don't show the id (no meaningful data)
            gunplaList[i].gunplaPostId = list[i].gunplaPostId;
            gunplaList[i].title = list[i].title;
            gunplaList[i].image = "<img  src='" + list[i].gunplaImage + "' style='width:10rem'>";
            gunplaList[i].description = list[i].description; // show this first
    
            gunplaList[i].publishDate = list[i].publishDate;
            gunplaList[i].tag = list[i].tag;
            gunplaList[i].webUserId = list[i].webUserId;
            gunplaList[i].webUserEmail = list[i].webUserEmail;
        }

        function inject(ele, where) {
        document.getElementById(where).innerHTML = ""; // blank out content area before appending
                document.getElementById(where).appendChild(ele);
        }

        console.log("USER LIST");
                console.log(gunplaList);
                inject(MakeSortableTable(gunplaList, "make", "icons/sortUpDown16.png"), "listHere");
//        document.getElementById("listHere").appendChild(MakeTable(userList));

        }

var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }
