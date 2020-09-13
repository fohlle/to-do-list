
let btn = document.querySelector("#submit");
let clear = document.querySelector("#clear");
let uls = document.getElementById("list");
uls.removeChild(uls.childNodes[0]);

btn.addEventListener( "click" ,() => {
    let ul = document.getElementById("list");
    let inputText = document.getElementById("input").value;
    let li = document.createElement("li");
    let length = ul.childNodes.length;
    li.textContent = (length + 1) + ":" + inputText;
    ul.appendChild(li);
    document.getElementById("input").value = "";
});

clear.addEventListener("click", () => {
    let list = document.querySelector("ul");
    if(list.childNodes.length === 0)return;
    while(list.childNodes.length > 0){
        list.removeChild(list.childNodes[0]);
    }

})
