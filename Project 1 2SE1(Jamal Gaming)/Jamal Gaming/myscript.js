var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

//vp1
function clkvp() {
    let bg = document.getElementById("vpx").style.backgroundColor;
    let bg2 = document.getElementById("vps").style.backgroundColor;
    let bg3 = document.getElementById("vpy").style.backgroundColor;
    let bg4 = document.getElementById("vpz").style.backgroundColor;
    console.log(bg);
    console.log(bg2);
    console.log(bg3);
    console.log(bg4);

    let bg5 = document.getElementById("vpx").style.backgroundColor;
    let bg6 = document.getElementById("vps").style.backgroundColor;
    let bg7 = document.getElementById("vpy").style.backgroundColor;
    let bg8 = document.getElementById("vpz").style.backgroundColor;
    console.log(bg5);
    console.log(bg6);
    console.log(bg7);
    console.log(bg8);

    document.getElementById("vpz").style.backgroundColor = "#008080";
    document.getElementById("vpy").style.backgroundColor = "#008080";
    document.getElementById("vps").style.backgroundColor = "#008080";
    document.getElementById("vpx").style.backgroundColor = "rgb(139, 192, 253)";

    document.getElementById("vpz1").style.backgroundColor = "#008080";
    document.getElementById("vpy1").style.backgroundColor = "#008080";
    document.getElementById("vps1").style.backgroundColor = "#008080";
    document.getElementById("vpx1").style.backgroundColor = "#008080";

    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("vpx").style.backgroundColor = "#008080";

    }
}

//vp2
function clkvp1() {
    let bg = document.getElementById("vps").style.backgroundColor;
    let bg2 = document.getElementById("vpx").style.backgroundColor;
    let bg3 = document.getElementById("vpy").style.backgroundColor;
    let bg4 = document.getElementById("vpz").style.backgroundColor;
    console.log(bg);
    console.log(bg2);
    console.log(bg3);
    console.log(bg4);

    let bg5 = document.getElementById("vps1").style.backgroundColor;
    let bg6 = document.getElementById("vpx1").style.backgroundColor;
    let bg7 = document.getElementById("vpy1").style.backgroundColor;
    let bg8 = document.getElementById("vpz1").style.backgroundColor;
    console.log(bg5);
    console.log(bg6);
    console.log(bg7);
    console.log(bg8);

    document.getElementById("vpz").style.backgroundColor = "#008080";
    document.getElementById("vpy").style.backgroundColor = "#008080";
    document.getElementById("vpx").style.backgroundColor = "#008080";
    document.getElementById("vps").style.backgroundColor = "rgb(139, 192, 253)";

    document.getElementById("vpz1").style.backgroundColor = "#008080";
    document.getElementById("vpy1").style.backgroundColor = "#008080";
    document.getElementById("vpx1").style.backgroundColor = "#008080";
    document.getElementById("vps1").style.backgroundColor = "#008080";

    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("vps").style.backgroundColor = "#008080";

    }

}

//vp3
function clkvp2() {
    let bg = document.getElementById("vpy").style.backgroundColor;
    let bg2 = document.getElementById("vps").style.backgroundColor;
    let bg3 = document.getElementById("vpx").style.backgroundColor;
    let bg4 = document.getElementById("vpz").style.backgroundColor;
    console.log(bg);
    console.log(bg2);
    console.log(bg3);
    console.log(bg4);

    let bg5 = document.getElementById("vpy1").style.backgroundColor;
    let bg6 = document.getElementById("vps1").style.backgroundColor;
    let bg7 = document.getElementById("vpx1").style.backgroundColor;
    let bg8 = document.getElementById("vpz1").style.backgroundColor;
    console.log(bg5);
    console.log(bg6);
    console.log(bg7);
    console.log(bg8);

    document.getElementById("vpz").style.backgroundColor = "#008080";
    document.getElementById("vpx").style.backgroundColor = "#008080";
    document.getElementById("vps").style.backgroundColor = "#008080";
    document.getElementById("vpy").style.backgroundColor = "rgb(139, 192, 253)";

    document.getElementById("vpz1").style.backgroundColor = "#008080";
    document.getElementById("vpx1").style.backgroundColor = "#008080";
    document.getElementById("vps1").style.backgroundColor = "#008080";
    document.getElementById("vpy1").style.backgroundColor = "#008080";

    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("vpy").style.backgroundColor = "#008080";

    }
}

//vp4
function clkvp3() {
    let bg = document.getElementById("vpz").style.backgroundColor;
    let bg2 = document.getElementById("vps").style.backgroundColor;
    let bg3 = document.getElementById("vpx").style.backgroundColor;
    let bg4 = document.getElementById("vpy").style.backgroundColor;
    console.log(bg);
    console.log(bg2);
    console.log(bg3);
    console.log(bg4);

    let bg5 = document.getElementById("vpz1").style.backgroundColor;
    let bg6 = document.getElementById("vps1").style.backgroundColor;
    let bg7 = document.getElementById("vpx1").style.backgroundColor;
    let bg8 = document.getElementById("vpy1").style.backgroundColor;
    console.log(bg5);
    console.log(bg6);
    console.log(bg7);
    console.log(bg8);

    document.getElementById("vpy").style.backgroundColor = "#008080";
    document.getElementById("vpx").style.backgroundColor = "#008080";
    document.getElementById("vps").style.backgroundColor = "#008080";
    document.getElementById("vpz").style.backgroundColor = "rgb(139, 192, 253)";

    document.getElementById("vpy1").style.backgroundColor = "#008080";
    document.getElementById("vpx1").style.backgroundColor = "#008080";
    document.getElementById("vps1").style.backgroundColor = "#008080";
    document.getElementById("vpz1").style.backgroundColor = "#008080";

    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("vpz").style.backgroundColor = "#008080";
    }
}

//vp5
function clkvp4() {
    let bg = document.getElementById("vpx1").style.backgroundColor;
    let bg2 = document.getElementById("vps").style.backgroundColor;
    let bg3 = document.getElementById("vpz").style.backgroundColor;
    let bg4 = document.getElementById("vpy").style.backgroundColor;
    console.log(bg);
    console.log(bg2);
    console.log(bg3);
    console.log(bg4);

    let bg5 = document.getElementById("vpz1").style.backgroundColor;
    let bg6 = document.getElementById("vps1").style.backgroundColor;
    let bg7 = document.getElementById("vpx").style.backgroundColor;
    let bg8 = document.getElementById("vpy1").style.backgroundColor;
    console.log(bg5);
    console.log(bg6);
    console.log(bg7);
    console.log(bg8);

    document.getElementById("vpy").style.backgroundColor = "#008080";
    document.getElementById("vpx").style.backgroundColor = "#008080";
    document.getElementById("vps").style.backgroundColor = "#008080";
    document.getElementById("vpx1").style.backgroundColor = "rgb(139, 192, 253)";

    document.getElementById("vpy1").style.backgroundColor = "#008080";
    document.getElementById("vpz").style.backgroundColor = "#008080";
    document.getElementById("vps1").style.backgroundColor = "#008080";
    document.getElementById("vpz1").style.backgroundColor = "#008080";

    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("vpx1").style.backgroundColor = "#008080";
    }
}

//vp6
function clkvp5() {
    let bg = document.getElementById("vps1").style.backgroundColor;
    let bg2 = document.getElementById("vpz").style.backgroundColor;
    let bg3 = document.getElementById("vpx").style.backgroundColor;
    let bg4 = document.getElementById("vpy").style.backgroundColor;
    console.log(bg);
    console.log(bg2);
    console.log(bg3);
    console.log(bg4);

    let bg5 = document.getElementById("vpz1").style.backgroundColor;
    let bg6 = document.getElementById("vps").style.backgroundColor;
    let bg7 = document.getElementById("vpx1").style.backgroundColor;
    let bg8 = document.getElementById("vpy1").style.backgroundColor;
    console.log(bg5);
    console.log(bg6);
    console.log(bg7);
    console.log(bg8);

    document.getElementById("vpy").style.backgroundColor = "#008080";
    document.getElementById("vpx").style.backgroundColor = "#008080";
    document.getElementById("vpz").style.backgroundColor = "#008080";
    document.getElementById("vps1").style.backgroundColor = "rgb(139, 192, 253)";

    document.getElementById("vpy1").style.backgroundColor = "#008080";
    document.getElementById("vpx1").style.backgroundColor = "#008080";
    document.getElementById("vps").style.backgroundColor = "#008080";
    document.getElementById("vpz1").style.backgroundColor = "#008080";

    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("vps1").style.backgroundColor = "#008080";
    }
}

//vp7
function clkvp6() {
    let bg = document.getElementById("vpy1").style.backgroundColor;
    let bg2 = document.getElementById("vps").style.backgroundColor;
    let bg3 = document.getElementById("vpx").style.backgroundColor;
    let bg4 = document.getElementById("vpy").style.backgroundColor;
    console.log(bg);
    console.log(bg2);
    console.log(bg3);
    console.log(bg4);

    let bg5 = document.getElementById("vpz1").style.backgroundColor;
    let bg6 = document.getElementById("vps1").style.backgroundColor;
    let bg7 = document.getElementById("vpx1").style.backgroundColor;
    let bg8 = document.getElementById("vpz").style.backgroundColor;
    console.log(bg5);
    console.log(bg6);
    console.log(bg7);
    console.log(bg8);

    document.getElementById("vpy").style.backgroundColor = "#008080";
    document.getElementById("vpx").style.backgroundColor = "#008080";
    document.getElementById("vps").style.backgroundColor = "#008080";
    document.getElementById("vpy1").style.backgroundColor = "rgb(139, 192, 253)";

    document.getElementById("vpz").style.backgroundColor = "#008080";
    document.getElementById("vpx1").style.backgroundColor = "#008080";
    document.getElementById("vps1").style.backgroundColor = "#008080";
    document.getElementById("vpz1").style.backgroundColor = "#008080";

    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("vpy1").style.backgroundColor = "#008080";
    }
}

//vp8
function clkvp7() {
    let bg = document.getElementById("vpz1").style.backgroundColor;
    let bg2 = document.getElementById("vps").style.backgroundColor;
    let bg3 = document.getElementById("vpx").style.backgroundColor;
    let bg4 = document.getElementById("vpy").style.backgroundColor;
    console.log(bg);
    console.log(bg2);
    console.log(bg3);
    console.log(bg4);

    let bg5 = document.getElementById("vpz").style.backgroundColor;
    let bg6 = document.getElementById("vps1").style.backgroundColor;
    let bg7 = document.getElementById("vpx1").style.backgroundColor;
    let bg8 = document.getElementById("vpy1").style.backgroundColor;
    console.log(bg5);
    console.log(bg6);
    console.log(bg7);
    console.log(bg8);

    document.getElementById("vpy").style.backgroundColor = "#008080";
    document.getElementById("vpx").style.backgroundColor = "#008080";
    document.getElementById("vps").style.backgroundColor = "#008080";
    document.getElementById("vpz1").style.backgroundColor = "rgb(139, 192, 253)";

    document.getElementById("vpy1").style.backgroundColor = "#008080";
    document.getElementById("vpx1").style.backgroundColor = "#008080";
    document.getElementById("vps1").style.backgroundColor = "#008080";
    document.getElementById("vpz").style.backgroundColor = "#008080";

    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("vpz1").style.backgroundColor = "#008080";
    }
}

//payment bca
function bca() {
    let bg = document.getElementById("bcaa").style.backgroundColor;
    let bg2 = document.getElementById("gopayy").style.backgroundColor;
    console.log(bg)
    console.log(bg2)

    document.getElementById("bcaa").style.backgroundColor = "rgb(139, 192, 253)";
    document.getElementById("gopayy").style.backgroundColor = "aliceblue"
    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("bcaa").style.backgroundColor = "aliceblue";
    }
}

//payment gopay
function gopay() {
    let bg = document.getElementById("gopayy").style.backgroundColor;
    let bg2 = document.getElementById("bcaa").style.backgroundColor;
    console.log(bg)
    console.log(bg2)

    document.getElementById("gopayy").style.backgroundColor = "rgb(139, 192, 253)";
    document.getElementById("bcaa").style.backgroundColor = "aliceblue";
    if (bg == "rgb(139, 192, 253)") {
        document.getElementById("gopayy").style.backgroundColor = "aliceblue";
    }
}

function sbmt() {
    let uname = document.getElementById("nama").value;
    console.log(uname.length);

    let userid = document.getElementById("uid").value;
    console.log(userid.length);

    let tet = document.getElementsByClassName("border-pilihan");
    console.log(tet)
    try {
        if (uname.length >= 2 && userid.length >= 6 && userid > 0) {
            choose();
        } else {
            alert("Please Insert Your Data Correctly");
        }

    } catch (error) {
        console.error(error);
    }
}

function choose() {
    var pilihan = document.getElementsByClassName("border-pilihan")
    for (i = 0; i < pilihan.length; i++) {
        if (pilihan[i].style.backgroundColor == "rgb(139, 192, 253)") {
            Payment();
        }
    }
    alert("Choose Your Item");
}

function Payment() {
    var pilihan2 = document.getElementsByClassName("wkwk");
    for (x = 0; x < pilihan2.length; x++) {
        if (pilihan2[x].style.backgroundColor == "rgb(139, 192, 253)") {
            location.assign("success.html");
            console.log(pilihan[x]);
        }
    }
    alert("Choose Your Payment")
}