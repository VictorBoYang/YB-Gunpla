//var account = {};
//
//(function(){
//    account.logon = function ( ) {
////        var contentDOM = document.getElementById();
//        var content = `
//        <style>
//           
//        .logon {
//                text-align: center;
//                padding-top: 70px;
//            }
//        </style>
//        <div class='logon'>
//                <br/>
//                Email Address <input type="text" id="emailIn"/>
//                <br/>
//                Password <input type="password" id="passwordIn"/>
//                <br/>
//                <input type="button" value="Submit" onclick="login.logIn('emailIn', 'passwordIn', 'msgArea')"/>
//                <br/> <br/>
//                <div id="msgArea"></div> 
//        </div>
//        
//        <div class='msg_area'>
//        </div>
//        `;
//        var ele = document.createElement("div");
//        ele.innerHTML = content;
//        return ele;
//        
//        }
//    }
//    
////    function buildProfile (userObj) { 
////        var msg = "";
////        if (userObj.errorMsg.length > 0) {
////            msg += "<strong>Error: " + userObj.errorMsg + "</strong>";
////        } else {
////            msg += "<strong>Welcome Web User " + userObj.webUserId + "</strong>";
////            msg += "<br/> Birthday: " + userObj.birthday;
////            msg += "<br/> MembershipFee: " + userObj.membershipFee;
////            msg += "<br/> User Role: " + userObj.userRoleId + " " + userObj.userRoleType;
////            msg += "<p> <img src ='" + userObj.image + "'> </p>";
////        }
////        return msg;
////    };
////    
////    account.getProfile = function ( ) {
////        
////    }
////    
////    account.logoff = function ( ) {
////        
//// 
////    }
//());

var account = {};

(function () {
    
    account.logon = function () {
        var logonDiv = document.createElement("div");
        logonDiv.classList.add("logon");
        
        var emailSpan = document.createElement('span');
        emailSpan.innerHTML = "Email Address: ";
        logonDiv.appendChild(emailSpan);
        var emailInput = document.createElement("input");
        //emailInput.setAttribute("type", "password"); // so it shows dots not characters
        logonDiv.appendChild(emailInput);
        
        var passwordSpan = document.createElement('span');
        passwordSpan.innerHTML = "Password: "
        logonDiv.appendChild(passwordSpan);
        var passwordInput = document.createElement("input");
        passwordInput.setAttribute("type", "password");
        logonDiv.appendChild(passwordInput);
        
        var logonButton = document.createElement("button");
        logonButton.innerHTML = "Log In";
        logonDiv.appendChild(logonButton);
        
        var msgDiv = document.createElement("div");
        logonDiv.appendChild(msgDiv);
        
        logonButton.onclick = function () {

            // You have to encodeURI user input before putting into a URL for an AJAX call.
            // Otherwise, your URL may be refused (for security reasons) by the web server.
            var url = "webAPIs/LogonAPI.jsp?user_email=" + encodeURI(emailInput.value) + "&user_password=" + encodeURI(passwordInput.value);
          
            ajax(url, showLogUser, msgDiv);

            function showLogUser(obj) {
                msgDiv.innerHTML = buildProfile(obj);
            }
        };  // onclick function
        
        return logonDiv;
    };
    
    account.getProfile = function () {
        var getProfileDiv = document.createElement("div");
        getProfileDiv.classList.add("profile");

        var msgDiv = document.createElement("div");
        msgDiv.classList.add("msg");
        getProfileDiv.appendChild(msgDiv);

        var msgBr = document.createElement("br");
        getProfileDiv.appendChild(msgBr);

        var url = "webAPIs/getProfileAPI.jsp";
        ajax(url, showLogUser, msgDiv);

        function showLogUser(obj) {
            msgDiv.innerHTML = buildProfile(obj);
        }

        return getProfileDiv;
    };
    
    account.logOff = function () {
        var logoffDiv = document.createElement("div");
        logoffDiv.classList.add("account");

        var msgDiv = document.createElement("div");
        msgDiv.classList.add("msg");
        logoffDiv.appendChild(msgDiv);

        var msgBr = document.createElement("br");
        logoffDiv.appendChild(msgBr);

        var url = "webAPIs/LogoffAPI.jsp";
        ajax(url, showLogUser, msgDiv);

        function showLogUser(obj) {
            msgDiv.innerHTML = buildProfile(obj);
        }

        return logoffDiv;
    };
    
    function buildProfile (obj) {
        var msg = "";
        console.log("Successfully called the logon API. Next line shows the returned object.");
        console.log(obj);
        
        if (obj.errorMsg === "No User is logged in.") {
            msg += "Error: " + obj.errorMsg;
        } else if (obj.errorMsg === "Invalidating User session.") {
            msg += obj.errorMsg;
        } else if (obj.errorMsg.length > 0) {
            msg += "Error: " + obj.errorMsg;
        } else {
            msg += "<strong>Welcome Web User " + obj.webUserId + "</strong>";
            msg += "<br/></br> Birthday: " + obj.birthday;
            msg += "<br/><br/> Membership Fee: " + obj.membershipFee;
            msg += "<br/><br/> User Role: " + obj.userRoleId + " " + obj.userRoleType;
            msg += "<p> <img src ='" + obj.image + "'></p>";
        }
                
        console.log(msg);
        return msg;
    };

}());