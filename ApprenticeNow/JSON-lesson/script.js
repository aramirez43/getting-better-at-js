let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML = myObj.name;
    document.getElementById("bday").innerHTML = myObj.birthday;
    document.getElementById("bio").innerHTML = myObj.bio;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();
