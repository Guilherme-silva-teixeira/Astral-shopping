let imageContainer = document.getElementById("imges");
let clicks = 1;
imageContainer.style.background = "url('img/as1.png')";

let left = document.getElementById("left").addEventListener("click", function() {
    clicks--;
    updateBackground();
});

let right = document.getElementById("right").addEventListener("click", function() {
    clicks++;
    updateBackground();
});

function updateBackground() {
    if (clicks == 1) {
        imageContainer.style.background = "url('img/as1.png')";
    } else if (clicks == 2) {
        imageContainer.style.background = "url('img/as2.png')";
    } else if (clicks == 3) {
        imageContainer.style.background = "url('img/as3.png')";
    }
}


let links1 = document.getElementById("link1").addEventListener("mouseenter",
    function()
    {
        let bottomline1 = document.getElementById("bottomline-1");
        bottomline1.style.width = "100%";
        bottomline1.style.transition = "0.7s ease-in-out";
        this.addEventListener("mouseleave",
            function()
            {
                bottomline1.style.width = "0%";
            }
        );
    }
);
let links2 = document.getElementById("link2").addEventListener("mouseenter",
    function()
    {
        let bottomline2 = document.getElementById("bottomline-2");
        bottomline2.style.width = "100%";
        bottomline2.style.transition = "0.7s ease-in-out";
        this.addEventListener("mouseleave",
            function()
            {
                bottomline2.style.width = "0%";
            }
        );
    }
);
