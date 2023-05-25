let isClicked = true;

let showOrHide = function(){
    if (isClicked === true) {
        document.getElementById('snow-magic').style.display = 'flex';
        isClicked = false;
    } else {
        document.getElementById('snow-magic').style.display = 'none';
        isClicked = true;
    }
}
