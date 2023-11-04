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
        console.log(clickedSynopsis.textContent);
        synopsis.textContent = clickedSynopsis.textContent;
    }
    else
    {
        this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

window.addEventListener('load', function() {
    var parent = document.getElementById("parent");
    for (var i = 1; i < parent.childNodes.length; i++){
            parent.childNodes[i].addEventListener("click", itemClicked, false);
        }
})

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
