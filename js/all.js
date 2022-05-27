function topClick() {
    $('html, body').animate({ scrollTop: 0 }, 200);
}

function feeClick(e) {
    let num = e.textContent;
    num = num.replace("位", "");
    let peoples = document.getElementsByClassName("jsPeople");
    for (let i = 0; i < peoples.length; i++) {
        peoples[i].textContent = num;
    }
    //alert(typeof(document.getElementsByClassName("jsPeople")));
    //alert(getComputedStyle(e,"background"));
    
    switch (e.textContent) {
        case "10000位":
            document.getElementById("jsDollarBase").textContent = 600;
            document.getElementById("jsDollarStd").textContent = 1600;
            break;
        case "15000位":
            document.getElementById("jsDollarBase").textContent = 700;
            document.getElementById("jsDollarStd").textContent = 1700;
            break;
        case "20000位":
            document.getElementById("jsDollarBase").textContent = 800;
            document.getElementById("jsDollarStd").textContent = 1800;
            break;
        case "25000位":
            document.getElementById("jsDollarBase").textContent = 900;
            document.getElementById("jsDollarStd").textContent = 1900;
            break;
        case ">25000位":
            document.getElementById("jsDollarBase").textContent = 99999;
            document.getElementById("jsDollarStd").textContent = 99999;
            break;
    }
}
