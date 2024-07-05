alert("歡迎來到我的網頁");

var myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/myself.png") {
    myImage.setAttribute("src", "images/certification.png");
  } else {
    myImage.setAttribute("src", "images/myself.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = storedName+"的自傳" ;
  }
  myButton.onclick = function () {
    setUserName();
  };
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = myName+'的自傳';
    }
  }