var form = document.getElementById('form');
var itemList = document.getElementById('text');
form.addEventListener('submit', store);

// function store(e){
//     e.preventDefault();
//     localStorage.setItem(document.getElementById('email').value, document.getElementById('name').value);
//     localStorage.setItem(document.getElementById('email').value, document.getElementById('email').value);
// } 


function store(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let myobj = {
        name,
        email 
    }

    localStorage.setItem(myobj.email,JSON.stringify(myobj));
    
    var li = document.createElement('li');
    var detail = myobj.name + ", " + myobj.email;
    li.appendChild(document.createTextNode(detail));
    document.getElementById("text").appendChild(li);

    var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  li.appendChild(deleteBtn);

  deleteBtn.onclick = () =>{
    localStorage.removeItem(myobj.email);
    itemList.removeChild(li);
  }


  var edit = document.createElement('button');
  edit.className = 'btn btn-success btn-sm edit';
  edit.appendChild(document.createTextNode('Edit'));
  li.append(edit);

  edit.onclick = () =>{
    localStorage.removeItem(myobj.email);
    itemList.removeChild(li);
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
  }

}
