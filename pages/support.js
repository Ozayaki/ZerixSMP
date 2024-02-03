var input = document.getElementById('input');
var button = document.getElementById('getwarn');

button.onclick = function () {
    if (input.value == "") {
        console.warn("жалобы нет")
    }else if (input.value == "free"){
        open("https://youtu.be/dQw4w9WgXcQ?si=7mQgOwF7EA_Q8jLV")
    } else {
        input.value = "Не жалуйся!"
    }
}