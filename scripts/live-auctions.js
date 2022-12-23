var modal = document.getElementById("liveAuctions");
var btn1 = document.getElementById("over-1");
var btn2 = document.getElementById("over-2");
var btn3 = document.getElementById("over-3");
var btn4 = document.getElementsByClassName("bid-btn")[0];
var span = document.getElementsByClassName("closeLiveAuctions")[0];

btn1.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal.style.display = "block";
};

btn3.onclick = function () {
  modal.style.display = "block";
};

btn4.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
