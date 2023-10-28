document.forms[0].onsubmit = (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.onload = () => {};

    xhr.open("POST", "process.php");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify( 

{
name: document.getElementById('name').value,
email: document.getElementById('email').value,
varos: document.getElementById('varos').value,
iranyitoszam: document.getElementById('iranyitoszam').value,
utcanev: document.getElementById('utcanev').value,
hazszam: document.getElementById('hazszam').value,
mitrendel: document.getElementById('mitrendel').value,
selekt: document.getElementById('selekt').value,
}
 ));
}; 



