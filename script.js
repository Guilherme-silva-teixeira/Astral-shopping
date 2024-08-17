let activeHover = document.getElementById("out");

let service1 = document.getElementById("service1");
let service2 = document.getElementById("service2");
let service3 = document.getElementById("service3");

let onePerTen = 77;
let minusPerTen = 77;

let buttonLeft = document.getElementById("left").addEventListener("click",
    function()
    {
        onePerTen = (onePerTen + 77);
        minusPerTen = (minusPerTen - 77);

        service1.style.marginLeft = onePerTen + "px";
        service3.style.marginLeft = minusPerTen + "px";
        
        service1.style.transition = "0.5s ease-in-out";
        service2.style.transition = "0.5s ease-in-out";
        service3.style.transition = "0.5s ease-in-out";
    }
);

let buttonRight = document.getElementById("right").addEventListener("click",
    function()
    {
        onePerTen = (onePerTen + 77);
        minusPerTen = (minusPerTen - 77);

        service3.style.marginRight = onePerTen + "px";
        service1.style.marginRight = minusPerTen + "px";

        service1.style.transition = "0.5s ease-in-out";
        service2.style.transition = "0.5s ease-in-out";
        service3.style.transition = "0.5s ease-in-out";
    }
                                                                    
);
