let imageContaineer = document.getElementById("imges");
imageContaineer.style.transition = "0.1s ease";

let swipePos = 177;
let atualPos = 0;

let left = document.getElementById("left").addEventListener("click",
    function()
    {
        atualPos -= swipePos;
        imageContaineer.style.marginLeft = atualPos + "px";
        console.log(imageContaineer.style.marginLeft);
    }
);

let right = document.getElementById("right").addEventListener("click",
    function()
    {
        atualPos += swipePos;
        imageContaineer.style.marginLeft = atualPos + "px";
    }
);
