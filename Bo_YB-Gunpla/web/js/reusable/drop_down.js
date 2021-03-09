function drop (clickedEle, hideClass, showClass) {
    var nextEle = clickedEle.parentElement.getElementsByTagName("div")[1];

    if (nextEle.classList.contains(showClass)) {
        hide(nextEle);
    } else {
        show(nextEle);
    }

    function hide(ele) {
        ele.classList.remove(showClass);
        ele.classList.add(hideClass);
    }

    function show(ele) {
        ele.classList.remove(hideClass);
        ele.classList.add(showClass);
    }

}

