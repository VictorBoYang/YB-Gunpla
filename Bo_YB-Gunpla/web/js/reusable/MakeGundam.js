function MakeGundam(Name,Type,Year,theImg){
    var gundamObj = document.createElement("div");
    
    var gundamInfo = document.createElement("div");
    gundamInfo.classList.add("GunplaInfo");
    var gundamImg = document.createElement("img");
    gundamImg.src = theImg;
    gundamObj.appendChild(gundamImg);
    gundamObj.appendChild(gundamInfo);
    
    gundamObj.name = Name;
    gundamObj.type = Type;
    gundamObj.year = Year;
    
    function display(){
        gundamInfo.innerHTML = "Gundam Name: " + gundamObj.name + "<br/>Type:"
        + gundamObj.type + "<br/>Year:" + gundamObj.year;
    };
    
    gundamObj.setName = function(newName){
        gundamObj.name = newName;
        display();
    };
    
    gundamObj.setType = function(newType){
        gundamObj.type = newType;
        display();
    };
    
    gundamObj.setYear = function(newYear){
        gundamObj.year = newYear;
        display();
    };
    
    gundamObj.log = function(){
        console.log("Gundam with id " + gundamObj.id + " Name is " + gundamObj.name
                + " and type is " + gundamObj.type + "published in " + gundamObj.year);
    };
    
    display();
    return gundamObj;
}

