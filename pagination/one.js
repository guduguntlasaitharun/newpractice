var current_page = 1;
var records_per_page =2;


var objJson = [
    { adName: "sai"},
    { adName: "Tharun"},
    { adName: "Aryan"},
    { adName: "Syed"},
    { adName: "Janu"},
    { adName: "tharun"},
    { adName: "Harsha"},
    { adName: "Rabbani"},
    { adName: "Prostack"},
    { adName: "Academy"}
]; // Can be obtained from another source, such as your objJson variable
//reference https://stackoverflow.com/questions/25434813/simple-pagination-in-javascript

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += objJson[i].adName + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
   
};
