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
        <button id="close">Fechar</button>
           <div id="popup">
                <div id="window">
                        <p>Insira o nome do produto</p>
                    <input type="text" id="productName" placeholder="Adicionar produto:">
                        <p>Insira o tipo do produto</p>
                    <input type="text" id="productType" placeholder="Adicionar produto:">
                        <p>Insira o preço do produto</p>
                    <input type="text" id="productPrice" placeholder="Adicionar produto:">
                    <button id="save">Adicionar</button>
                </div>
           </div>
           <style>
                #window
                {
                    height: 251px;
                    width: 251px;
                    background: #fff;
                    color: #000;
                    display: flex;
                    flex-direction: column;
                    justfy-content: center;
                    align-items: center;
                }
                
                #popup
                {
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    justfy-content: center;
                    align-items: center;
                }
           </style>
        `;

        let closeButton = document.getElementById("close").addEventListener("click",
            function()
            {
                outContainer.innerHTML = "";
        
                outContainer.style.position = "absolute";
                outContainer.style.zIndex = -3;
                outContainer.style.background = "#0000";
                outContainer.style.height = "0px";
                outContainer.style.width = "0px";
                outContainer.style.color = "#0000";
                outContainer.style.position = "absolute";
            }
        );

        //popup window

        outContainer.style.position = "absolute";
        outContainer.style.zIndex = 3;
        outContainer.style.background = "#3337"
        outContainer.style.height = "100vh";
        outContainer.style.width = "100%"; 
        outContainer.style.color = "#fff";
        outContainer.style.position = "fixed";
    }
);
