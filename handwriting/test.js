
var ul = document.getElementById("ul");
var fragment = document.createDocumentFragment();
for (var i = 0; i < 20; i++) {
    var li = document.createElement("li");
    li.innerHTML = "index: " + i;
    fragment.appendChild(li);
}
ul.appendChild(fragment);
