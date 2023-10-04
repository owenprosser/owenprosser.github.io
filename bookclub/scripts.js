function reverseChildren() {
    var parent = document.getElementById("parent");
    for (var i = 1; i < parent.childNodes.length; i++){
        parent.insertBefore(parent.childNodes[i], parent.firstChild);
    }
}

window.addEventListener('load', function() {
var parent = document.getElementById("parent");
for (var i = 1; i < parent.childNodes.length; i++){
        parent.childNodes[i].addEventListener("click", function() {this.scrollIntoView({ behavior: 'smooth', block: 'center' })}, false);
    }
})