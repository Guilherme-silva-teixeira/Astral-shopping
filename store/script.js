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
        outContainer.innerHTML +=
        `
           <div id="popup">
                  <div id="window">
                        <p>Insira o nome do produto</p>
                    <input type="text" id="productName" placeholder="Adicionar produto:">
                        <p>Insira o tipo do produto</p>
                    <input type="text" id="productType" placeholder="Adicionar produto:">
                        <p>Insira o preço do produto</p>
                    <input type="text" id="productPrice" placeholder="Adicionar produto:">
                    <p>Insira o link de compra</p>
                    <input type="text" id="productLink" placeholder="Adicionar produto:">
                    <button id="save">Adicionar</button>
                                <button id="close">cancelar</button>
                </div>
           </div>
           <style>
                #window
                {
                    height: 277px;
                    width: 277px;
                    background: #fff;
                    color: #000;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 3px;
                }
                #popup
                {
                   /* margin-left: 50%;*/
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;    
                }
                /*@media screen and (max-width: 601px)
                {
                    #popup
                    {
                        margin-left: 25%;
                    }
                }*/
               #window button#save
                {
                    height: 27px;
                    width: 150px;
                    background: #111;
                    color: #fff;
                    border: 0;
                    border-radius: 3px;
                    cursor: pointer;
               }
            #window input
            {
                height: 21px;
                margin-top: 3px;
                margin-bottom: 3px;
                border-radius: 3px;
                border: 1px solid #000;
            }
                button#close
                {
                    margin-top: 3px; 
                    height: 27px;
                    width: 150px;
                    background: #f00;
                    color: #fff;
                    border: 0;
                    border-radius: 3px;
                    cursor: pointer;
                }
           </style>
        `;

        let closeButton = document.getElementById("close").addEventListener("click",
            function()
            {
                let popUp = document.getElementById("popup");
                let Window = document.getElementById("window");

                popUp.style.position = "absolute";
                popUp.style.zIndex = -3;

                outContainer.innerHTML = "";

                outContainer.style.position = "absolute";
                outContainer.style.zIndex = -3;
                outContainer.style.background = "#0000";
                outContainer.style.height = "0px";
                outContainer.style.width = "0px";
                outContainer.style.color = "#0000";
            }
        );

        let save = document.getElementById("save").addEventListener("click",
            function()
            {        
                let productName = document.getElementById("productName").value;
                let productType = document.getElementById("productType").value;
                let productPrice = document.getElementById("productPrice").value;
                let productLink = document.getElementById("productLink").value;

                let firstL = document.getElementById("firstL").innerHTML +=
                `
                <div id="product">
                    <div id="imgProduct">
                        
                    </div>
                    <div id="bottomProduct">
                        <p id="tipo">${productType}</p>
                        <p>${productName}</p>
                        <div id="price">R\$ ${productPrice}</div>
                        <a href="${productLink}>"<button>Comprar</button></a>
                    </div>
                </div>`;

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
