function changeImg() {
    const imgaes = document.querySelectorAll("img");
    imgaes.forEach(function(img){
        img.src = "https://media.giphy.com/media/jaqvaWqpKfImQ/giphy.gif";
    });
}
function changeText() {
    const x = document.querySelectorAll("h1");
    x.forEach(function(x){
        var p = x.innerHTML;
        p = p.toUpperCase();
        x.innerHTML = p;
    });
}