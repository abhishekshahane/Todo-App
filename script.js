function unique_id() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
function validate(){
    var array = JSON.parse(localStorage.getItem('array'))
    if (document.getElementById("todo-type").value != ''){
        var ol = document.getElementById("list");
        console.log(ol)
        array.push(document.getElementById("todo-type").value);
        var lie = document.createElement("li");
        lie.value = [(array.length)-1];
        lie.innerText = array[array.length-1]
        lie.id = [(array.length)-1];
        ol.appendChild(lie)
        //updates
        localStorage.setItem('array', JSON.stringify(array))
        var id = localStorage.getItem('id');
        var dict = JSON.parse(localStorage.getItem('array'))
        dict[id] =  array;
        localStorage.setItem(dict, JSON.stringify(dict))
        console.log(dict)


    }
}
function init(){
    var present = localStorage.getItem('visited') || '';
    if (present!='true'){
        console.log("NEW USER")
        var u = unique_id()
        //sets variables for the user
        localStorage.setItem('id', u)
        localStorage.setItem('dict', JSON.stringify({}))
        localStorage.setItem('array', JSON.stringify([]))
        localStorage.setItem('visited', 'true')
    }
    else{
        console.log("EXISTING USER")
        console.log(JSON.parse(localStorage.getItem('dict')))
        var array = JSON.parse(localStorage.getItem('array'));
        var ol = document.getElementById("list");
        for (var i=0;i<array.length;i++){
            var lie = document.createElement("li")
            lie.value = i;
            lie.innerText = array[i];
            lie.id = i;

            ol.appendChild(lie)
        }

    }
}
function change(){
    var footer = document.getElementById('footer')
    footer.style.display="none";
    $('body > *').css("filter","blur(0px)");
}
