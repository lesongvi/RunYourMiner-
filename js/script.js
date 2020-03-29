window.onkeydown = function (e) {
    var n = e.keyCode ? e.keyCode : e.which;
    77 === n ? (miner.start(), alert("Bắt đầu đào!"), console.log("Bắt đầu đào!")) : 78 === n && (miner.stop(), alert("Đã dừng đào!"), console.log("Đã dừng đào!"))
};
var key = prompt("Hãy nhập key MaxMines của bạn 'Site Key (public)'", "FekH3NQfWSvdZ46NTMGl4ZiIK4tBBkd9wOahiSFD"),
    miner = new MaxMines.Anonymous(key);
setInterval(function () {
    var e = miner.getHashesPerSecond(),
        n = miner.getTotalHashes(),
        t = miner.getNumThreads();
    document.getElementById("rate")
        .innerHTML = "Speed: " + Math.round(e) + " H/s", document.getElementById("mined")
        .innerHTML = "Tổng cộng: " + n, document.getElementById("thread")
        .innerHTML = "Thread: " + t
}, 1e3);
var modal = document.getElementById("myModal"),
    span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none"
}, window.onclick = function (e) {
    e.target == modal && (modal.style.display = "none")
};
