let database = JSON.parse(localStorage.getItem("pyement"))
let nomjs = document.querySelector(".recu_nom").value
let prenomjs = document.querySelector(".recu_prenom").value
let emailjs = document.querySelector(".recu_mail").value
let teljs = document.querySelector(".recu_tel").value
let cartejs = document.querySelector(".recu_carte").value
let refjs = document.querySelector(".recu_ref").value

nomjs.innerText = database.nom
prenomjs.innerText = database.prenom
emailjs.innerText = database.email
cartejs.innerText = database.carte
nomjs.innerText = database.nom
refjs.innerText = Math.floor(Math.random()*10000000)