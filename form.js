// var form = document.getElementById('form');
// form.addEventListener('submit', store);

// function store(e){
//     e.preventDefault();
//     localStorage.setItem('name', document.getElementById('name').value);
//     localStorage.setItem('email', document.getElementById('email').value);
// } 

var form = document.getElementById('form');
form.addEventListener('submit', store);

function store(e){
    e.preventDefault();
    var myobj = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value
    }
    
    var myobj_serialized = JSON.stringify(myobj);

    localStorage.setItem("myobj",myobj_serialized);

}
