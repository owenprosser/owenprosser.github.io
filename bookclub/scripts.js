function reverseChildren() {
    var parent = document.getElementById("books-grid");
    for (var i = 1; i < parent.childNodes.length; i++){
        parent.insertBefore(parent.childNodes[i], parent.firstChild);
    }
    window.scrollTo(0, 0);
}

function itemClicked(){
    if(isInViewport(this) || spansViewport(this))
    {

    }
    else
    {
        this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

window.addEventListener('load', function() {
        var request = new XMLHttpRequest();
        request.open("GET","data.json", false);
        request.send(null);
        var jsonData = JSON.parse(request.responseText);

        reloadContent(jsonData, true);
    })

function reloadContent(jsonData, reverseOrder)
{
    var parentDiv = document.getElementById("books-grid");

    if(reverseOrder)
    {
        jsonData.books = jsonData.books.reverse();
    }

    for (var bookIndex = 0; bookIndex < jsonData.books.length; bookIndex++)
    {
        var image = this.document.createElement("img");
        image.addEventListener("click", itemClicked, false);
        image.className = "books-grid"
        image.src = jsonData.books[bookIndex].image_url;
        parentDiv.append(image);
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function spansViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right >= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function closeDetail(){
    var item = document.getElementById('detailPopup');
    item.style.display = "none";
}
