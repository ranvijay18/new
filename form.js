var form = document.getElementById('form');
form.addEventListener('submit', store);

function store(e){
    e.preventDefault();
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('email', document.getElementById('email').value);
} 
