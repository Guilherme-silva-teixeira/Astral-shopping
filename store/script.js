let configButton = document.getElementById("configButton").addEventListener("click",
    function()
    {
        //falta colocar mais elementos para o tema escuro como: header, colocar imagens png, etc.
        let popupArea = document.getElementById("popupArea");
        popupArea.innerHTML = `<div id="popup1">
            <label id="title"><div id="separator">Configurações <button id="closePopup">X</button></div></label><br><br>
            <label>Tema:</label>&emsp;<button id="changeColorTheme" onclick="changeColor()">Alternar</button><br>
        </div>`;

        let popTitle = document.getElementById("title");
        let popup1 = document.getElementById("popup1");
        popup1.style.height = '301px';
        popup1.style.width = '301px';
        popup1.style.background = '#fff';

        popTitle.style.width = '100%';
        popTitle.style.display = "flex";
        popTitle.style.justifyContent = "center";
        popTitle.style.textAlign = 'center';

        popupArea.style.height = "100vh";
        popupArea.style.width = "100%";
        popupArea.style.background = "#1113";
        popupArea.style.display = "flex";
        popupArea.style.justifyContent = "center";
        popupArea.style.alignItems = "center";

        let separatorDiv = document.getElementById("separator");
        separatorDiv.style.display = "flex";
        separatorDiv.style.flexDirection = "row";
        separatorDiv.style.alignItems = "space-between";

        let buttonClosePopup = document.getElementById("closePopup").addEventListener("click",
            function()
            {
                let popTitle = document.getElementById("title");
                let popup01 = document.getElementById("popup1");
                let popupArea1 = document.getElementById("popupArea");
                popupArea1.innerHTML = ``;
                popTitle.style.height = 0;
                popTitle.style.width = 0;
                popupArea1.style.height = 0;
                popupArea1.style.width = 0;
                popupArea1.style.zIndex = -1;
                popupArea1.style.background = "#0000";
            }
        );
    }
);

function changeColor()
{
    let body = document.getElementById("body");
    body.style.color = "#fff";
    body.style.backgroundColor = "#000";
    let prodTitle = document.getElementById("lin1");
    let prodPrice = document.querySelectorAll("#lin2");
    let paymentType = document.querySelectorAll("#lin3");
    prodPrice.style.color = "#fff";
    let header01 = document.getElementById("header01");
    header01.style.color = "#fff";
    header01.style.background = "#000";
}

let product = document.getElementById("product").addEventListener("mouseenter",
    function()
    {
        this.style.cursor = "pointer";
        let mouseenterArea = document.getElementById("mouseEnterArea");
        mouseenterArea.innerHTML = `<button id="addToCart">Adicionar ao carrinho</button>`;
    }
);

let productOnmouseour = document.getElementById("product").addEventListener("mouseleave",
    function()
    {
        let mouseEnterArea = document.getElementById("mouseEnterArea").innerHTML = "";
    }
);

let product01 = document.getElementsByClassName("product01").addEventListener("mouseenter",
    function()
    {
        this.style.cursor = "pointer";
    }
);
