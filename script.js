var array = [];
function validate(){
    var ol = document.getElementById("list");
    console.log(ol)
    array.push(document.getElementById("todo-type").value);
    var lie = document.createElement("li");
    lie.value = [(array.length)-1];
    lie.innerText = array[array.length-1]
    lie.id = [(array.length)-1];
    ol.appendChild(lie)
}
