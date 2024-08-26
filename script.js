let imageContaineer = document.getElementById("imges");

let left = document.getElementById("left").addEventListener(
    function()
    {
        let img1 = document.getElementById("service1");
        let img2 = document.getElementById("service2");
        let img3 = document.getElementById("service3");
        let imges = {img1, img2, img3};
        imageContaineer.style.background = img1;
    }
);

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
