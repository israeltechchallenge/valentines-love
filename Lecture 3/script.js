let searched = document.getElementById("searched")
let searchBtn = document.getElementById("search_btn")


function clickSearchBtn () {
    let searchInput = document.getElementById("search_input").value;
    var para = document.createElement("p");
    var node = document.createTextNode(searchInput);
    para.appendChild(node);
    var element = document.getElementById("searched");
    element.appendChild(para);
    console.log(para, searchInput);
    document.getElementById("search_input").value = "";
}

searchBtn.addEventListener("click", clickSearchBtn);
