let links1 = document.getElementById("link1").addEventListener("mouseenter",
    function()
    {
        let bottomline1 = document.getElementById("bottomline-1");
        bottomline1.style.width = "100%";
        bottomline1.style.transition = "0.7s ease-in-out";
        //bottomline1.style.border = "1px solid #111";
        bottomline1.style.height = "1px";
        bottomline1.style.background = "#fff";
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
        //bottomline2.style.border = "1px solid #111";
        bottomline2.style.height = "1px";
        bottomline2.style.background = "#fff";
        this.addEventListener("mouseleave",
            function()
            {
                bottomline2.style.width = "0%";
            }
        );
    }
);

let desInp = document.getElementById("des-btn").addEventListener("click",
    function()
    {
        let outContainer = document.getElementById("javascript-popup-container");
        outContainer.innerHTML =
        `
           <div id="popup">
           </div>
        `;
        outContainer.style.position = "absolute";
        outContainer.style.zIndex = 3;
        outContainer.style.background = "#3337"
        outContainer.style.height = "100vh";
        outContainer.style.width = "100%"; 
        outContainer.style.color = "#fff";
        outContainer.style.position = "fixed";
    }
);
