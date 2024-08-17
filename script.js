let imageContaineer = document.getElementById("imges");
imageContaineer.style.transition = "0.1s ease";

let swipePos = 177;
let atualPos = 0;

let left = document.getElementById("left").addEventListener("click",
    function()
    {
        atualPos -= swipePos;
        imageContaineer.style.marginLeft = atualPos + "px";
        console.log(atualPos);
        if(atualPos == -2331)
        {
            swipePos = 0;
        }
        else
        {
            swipePos = 177;
        }
    }
);

let right = document.getElementById("right").addEventListener("click",
    function()
    {
        atualPos += swipePos;
        imageContaineer.style.marginLeft = atualPos + "px";
    }
);
