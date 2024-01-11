// version = 1

// function fullScreen() {
//     var el = document.documentElement;
//     var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

//     //typeof rfs != "undefined" && rfs
//     if (rfs) {
//         rfs.call(el);
//     }
//     else if (typeof window.ActiveXObject !== "undefined") {
//         //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
//         var wscript = new ActiveXObject("WScript.Shell");
//         if (wscript != null) {
//             wscript.SendKeys("{F11}");
//         }
//     }
// }

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds) {
        console.log(new Date().getTime());
    }//暂停一段时间 10000=1S。
}

function get163(id, elem, play = true, br = 192000) {
    // var d;
    $.get("https://api.imjad.cn/cloudmusic/?type=song&id=" + id + "&br=" + br + "&t=" + Math.random(), function (data, status) {
        var d = data["data"][0]["url"];
        elem.src = d;
        if (play) elem.play();
    })
    // console.log(d)
    // return d;
}

function getear0(id, elem, play = true) {
    $.get("https://cdn2.ear0.com:5443/index/preview.php?soundid=" + id + "&type=mp3&t=" + Math.random(), function (data, status) {
        var d = data["data"];
        console.log(d);
        elem.src = d;
        if (play) elem.play();
    })
}

function show(elem) {
    if (elem.style.display == "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}

var bgm_on = true;
function bgm_io() {
    var bgm = document.getElementById("bgm");
    // var fwk = document.getElementById('fwk');
    var bgm_io = document.getElementById("bgm-io");
    // var bgm_io_b = window.getComputedStyle(bgm_io, ":before");
    if (bgm_on) {
        bgm.pause();
        // fwk.pause();
        bgm_on = false;
        bgm_io.classList.remove("on");
    } else {
        bgm.play();
        // fwk.play();
        bgm_on = true;
        // bgm_io_b.display = "none";
        bgm_io.classList.add("on");
    }
}

var fw_on = false;
function fw_io() {
    // var bgm = document.getElementById('bgm');
    var fwk = document.getElementById("fwk");
    var fwk_io = document.getElementById("fw-io")
    // var bgm_io = document.getElementById("bgm-io");
    if (fw_on) {
        // bgm.pause();
        fwk.pause();
        fw_on = false;
        fwk_io.classList.remove("on");
    } else {
        // bgm.play();
        fwk.play();
        fw_on = true;
        fwk_io.classList.add("on");
    }
}

function change_bgm_0(obj) {
    var n = obj.children[0].innerHTML.split("<")[0];
    var p = obj.children[2].innerHTML.split("<")[0];
    console.log(n + "-" + p);
    document.getElementById("bgm").src = "bgm/" + n + "-" + p + ".mp3";
    document.getElementById("bgm").play();
}

function change_bgm_1(obj) {
    var n = obj.children[0].innerHTML.split("<")[0];
    var i = obj.children[2].innerHTML.split("<")[0];
    var p = obj.children[3].innerHTML.split("<")[0];
    console.log(n + "-" + i + "-" + p);
    document.getElementById("bgm").src = "bgm/" + n + "-" + i + "-" + p + ".mp3";
    document.getElementById("bgm").play();
}
