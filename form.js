var form = document.getElementById('form');
form.addEventListener('submit', store);

// function store(e){
//     e.preventDefault();
//     localStorage.setItem(document.getElementById('email').value, document.getElementById('name').value);
//     localStorage.setItem(document.getElementById('email').value, document.getElementById('email').value);
// } 


function store(e){
    e.preventDefault();
    var myobj = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value
    }
    
    var myobj_serialized = JSON.stringify(myobj);

    localStorage.setItem(document.getElementById('email').value,myobj_serialized);
    
    
    var li = document.createElement('li');
    var detail = document.getElementById('name').value + ", " + document.getElementById('email').value;
    li.appendChild(document.createTextNode(detail));
    document.getElementById("text").appendChild(li);
