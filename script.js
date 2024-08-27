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

imageContainer.innerHTML = `<h1>Montamos Seu pc</h1>
                            <p>A sua máquina é montada pelos melhores profissionais do Pais.</p>`;

/*    <!--<iv id="service1">
                            <h1>Montamos Seu pc</h1>
                            <p>A sua máquina é montada pelos melhores profissionais do Pais.</p>
                        </div>
                        <div id="service2">
                            <h1>Garantia de 2 anos</h1>
                            <p>Nossos produtos possuem uma garantia de 2 anos com total suporte para defeitos.</p>
                        </div>
                        <div id="service3">
                            <h1>Suporte 24 horas</h1>
                            <p>Nosso atendimento especialixado em manutenção com suporte 24 horas por dia 7 dias por semana.</p>
                        </div>--> */

function updateBackground() {
    imageContainer.style.color = "#fff";
    if (clicks == 1) {
        imageContainer.style.background = "url('img/as1.png')";
        imageContainer.innerHTML = `<h1>Montamos Seu pc</h1>
                            <p>A sua máquina é montada pelos melhores profissionais do Pais.</p>`;
    } else if (clicks == 2) {
        imageContainer.style.background = "url('img/as2.png')";
        imageContainer.innerHTML = `<h1>Garantia de 2 anos</h1>
                            <p>Nossos produtos possuem uma garantia de 2 anos com total suporte para defeitos.</p>
                        `;
    } else if (clicks == 3) {
        imageContainer.style.background = "url('img/as3.png')";
        imageContainer.innerHTML= `
                            <h1>Suporte 24 horas</h1>
                            <p>Nosso atendimento especialixado em manutenção com suporte 24 horas por dia 7 dias por semana.</p>`;
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
