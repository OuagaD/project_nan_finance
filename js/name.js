let namaff = document.querySelector(".nameuser")
let db = JSON.parse(localStorage.getItem("newuser"))
namaff.innerText = db.nom + " " + db.prenom