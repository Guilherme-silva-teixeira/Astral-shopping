let configButton = document.getElementById("configButton").addEventListener("click",
    function()
    {
        let popupArea = document.getElementById("popupArea");
        popupArea.innerHTML = `<div id="popup1">
            <label id="title">Configurações</label><br><br>
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
    }
);

function changeColor()
{
    let body = document.getElementById("body");
    body.style.color = "#fff";
    body.style.backgroundColor = "#000";
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
