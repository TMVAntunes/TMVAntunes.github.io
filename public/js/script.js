function Post(host, controllerName, value) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.onreadystatechange == 4 && this.status == 200) {
      alert("Added");
    }
  };

  request.open("POST", host + "/api/" + controllerName);
  request.setRequestHeader("Content-type", "text/json");
  request.send(JSON.stringify(value));
}

var btn = document.getElementById("btn");
var inputname = document.getElementById("name-input");
var nameSpan = document.getElementById("name-error-span");

btn.addEventListener("click", () => {
  var nameValue = inputname.value;
  if (nameValue == "") {
    alert("fail");
    nameSpan.style.setProperty("display", "block");
  } else {
    var value = { name: nameValue };
    nameSpan.style.setProperty("display", "none");
    Post("https://localhost:44350/", "dietaryrestriction");
  }
});
