
let btn = document.querySelector("#submit");

btn.addEventListener( "click" ,() => {
    let inputText = document.getElementById("input").value;
    let li = document.createElement("li");
    let ul = document.getElementById("list");
    li.textContent = inputText;
    ul.appendChild(li);
    console.log(inputText);
});

