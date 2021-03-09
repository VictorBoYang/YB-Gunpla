function gundam_obj() {
    var GunplaDom = document.createElement("div"); // create div that will hold two cars
    // create first car div and related buttons/text boxes - add them to twoCarDOM.

    var make_gunpla_div = function (Gunpla_name, Gunpla_type, Gunpla_year,Gunpla_img) {
        var gunpla_obj = MakeGundam(Gunpla_name, Gunpla_type, Gunpla_year,Gunpla_img);
        gunpla_obj.classList.add("GunplaStyle");
        GunplaDom.appendChild(gunpla_obj);
        var GunplaChangeNameButton = document.createElement('button');
        GunplaChangeNameButton.innerHTML = 'Gunpla Name change to: ';
        GunplaDom.appendChild(GunplaChangeNameButton);
        var GunplaNameInput = document.createElement("input");
        GunplaNameInput.setAttribute("type", "text");
        GunplaDom.appendChild(GunplaNameInput);
        GunplaChangeNameButton.onclick = function () {
            console.log("changing Gunpla Name to " + GunplaNameInput.value);
            gunpla_obj.setName(GunplaNameInput.value);
        };
        var GunplaChangeTypeButton = document.createElement('button');
        GunplaChangeTypeButton.innerHTML = 'Gunpla Type to: ';
        GunplaDom.appendChild(GunplaChangeTypeButton);
        var GunplaTypeInput = document.createElement("input");
        GunplaTypeInput.setAttribute("type", "text");
        GunplaDom.appendChild(GunplaTypeInput);
        GunplaChangeTypeButton.onclick = function () {
            console.log("changing Gunpla Type to " + GunplaTypeInput.value);
            gunpla_obj.setType(GunplaTypeInput.value);
        };
        var GunplaChangeYearButton = document.createElement('button');
        GunplaChangeYearButton.innerHTML = 'Gunpla Published Year change to: ';
        GunplaDom.appendChild(GunplaChangeYearButton);
        var GunplaYearInput = document.createElement("input");
        GunplaYearInput.setAttribute("type", "text");
        GunplaDom.appendChild(GunplaYearInput);
        GunplaChangeYearButton.onclick = function () {
            console.log("changing Gunpla published year to " + GunplaYearInput.value);
            gunpla_obj.setYear(GunplaYearInput.value);
        };

    };
//    var mg_freedom_2 = MakeGundam("MG Freedom Gundam 2.0", "Master Grade", 2016,"pics/mg_freedom_2.0.png");
//    mg_freedom_2.classList.add("GunplaStyle");
//    GunplaDom.appendChild(mg_freedom_2);
//    var GunplaChangeNameButton = document.createElement('button');
//    GunplaChangeNameButton.innerHTML = 'Gunpla Name change to: ';
//    GunplaDom.appendChild(GunplaChangeNameButton);
//    var GunplaNameInput = document.createElement("input");
//    GunplaNameInput.setAttribute("type", "text");
//    GunplaDom.appendChild(GunplaNameInput);
//    GunplaChangeNameButton.onclick = function () {
//        console.log("changing Gunpla Name to " + GunplaNameInput.value);
//        mg_freedom_2.setName(GunplaNameInput.value);
//    };
//    var GunplaChangeTypeButton = document.createElement('button');
//    GunplaChangeTypeButton.innerHTML = 'Gunpla Type to: ';
//    GunplaDom.appendChild(GunplaChangeTypeButton);
//    var GunplaTypeInput = document.createElement("input");
//    GunplaTypeInput.setAttribute("type", "text");
//    GunplaDom.appendChild(GunplaTypeInput);
//    GunplaChangeTypeButton.onclick = function () {
//        console.log("changing Gunpla Type to " + GunplaTypeInput.value);
//        mg_freedom_2.setType(GunplaTypeInput.value);
//    };
//    var GunplaChangeYearButton = document.createElement('button');
//    GunplaChangeYearButton.innerHTML = 'Gunpla Published Year change to: ';
//    GunplaDom.appendChild(GunplaChangeYearButton);
//    var GunplaYearInput = document.createElement("input");
//    GunplaYearInput.setAttribute("type", "text");
//    GunplaDom.appendChild(GunplaYearInput);
//    GunplaChangeYearButton.onclick = function () {
//        console.log("changing Gunpla published year to " + GunplaYearInput.value);
//        mg_freedom_2.setYear(GunplaYearInput.value);
//    };
//    
//    
    make_gunpla_div("MG Freedom Gundam 2.0", "Master Grade", 2016,"pics/mg_freedom_2.0.png");
    // add an empty paragraph to separate the two areas on the page.
    var emptyPara = document.createElement('p');
    GunplaDom.appendChild(emptyPara);

    make_gunpla_div("MG Rouge Strike Gundam", "Master Grade", 2017,"pics/mg_rouge_strike_gundam.png");

    return GunplaDom;
}




