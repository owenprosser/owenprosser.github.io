function reverseChildren() {
    var parent = document.getElementById("parent");
    for (var i = 1; i < parent.childNodes.length; i++){
        parent.insertBefore(parent.childNodes[i], parent.firstChild);
    }
    window.scrollTo(0, 0);
}

function itemClicked(){
    if(isInViewport(this) || spansViewport(this))
    {
        var item = document.getElementById('detailPopup');
        item.style.display = "block";

        lockListView(true);

        var image = document.getElementById('detailImage');
        var clickedImage = this.getElementsByTagName('img')[0];
        image.src = clickedImage.src;

        var title = document.getElementById('title');
        var clickedTitle = this.getElementsByTagName('h1')[0];
        title.textContent = clickedTitle.textContent;

        var author = document.getElementById('author');
        var clickedAuthor = this.getElementsByTagName('h2')[0];
        author.textContent = clickedAuthor.textContent;

        var synopsis = document.getElementById('synopsis');
        var clickedSynopsis = this.getElementsByTagName('p')[0];
        synopsis.textContent = clickedSynopsis.textContent;

        var selector = document.getElementById('selector');
        var clickedSeleector = this.getElementsByTagName('p')[1];
        selector.textContent = clickedSeleector.textContent;

        var date = document.getElementById('date');
        var clickedDate = this.getElementsByTagName('p')[2];
        date.textContent = clickedDate.textContent;
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

        reloadContent(jsonData, false);
    })

function reloadContent(jsonData, reverseOrder)
{
    var parentDiv = document.getElementById("parent");

    if(reverseOrder)
    {
        jsonData.books = jsonData.books.reverse();
    }

    for (var bookIndex = 0; bookIndex < jsonData.books.length; bookIndex++)
    {
        var ul = this.document.createElement("ul");
        ul.addEventListener("click", itemClicked, false);
        ul.className = "grid-item";

        var image = this.document.createElement("img");
        image.src = jsonData.books[bookIndex].image_url;

        var h1 = this.document.createElement("h1");
        h1.className = "info";
        h1.textContent = jsonData.books[bookIndex].author;

        var h2 = this.document.createElement("h2");
        h2.className = "info";
        h2.textContent = jsonData.books[bookIndex].title;

        var p = this.document.createElement("p");
        p.className = "info";
        p.textContent = jsonData.books[bookIndex].synopsis;

        var p2 = this.document.createElement("p");
        p2.className = "info";
        p2.textContent = jsonData.books[bookIndex].selector;

        var p3 = this.document.createElement("p");
        p3.className = "info";
        p3.textContent = jsonData.books[bookIndex].date;

        ul.append(image);
        ul.append(h1);
        ul.append(h2);
        ul.append(p);
        ul.append(p2);
        ul.append(p3);

        parentDiv.append(ul);
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

    lockListView(false);
}

function lockListView(lock){
    var grid = document.getElementById('parent');
    if(lock){
        grid.style.opacity = 0.5;
    }
    else{
        grid.style.opacity = 1;
    }
}
