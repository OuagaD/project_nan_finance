let btnIns = document.querySelector("#btn_insc")
btnIns.addEventListener("click", ()=>{
    let data = JSON.parse(localStorage.getItem("bduser")) || []
    let nomjs = document.querySelector("#nom").value
    let prenomjs = document.querySelector("#prenom").value
    let emailjs = document.querySelector("#email").value
    let mtpssjs = document.querySelector("#mtpss").value
    let cmtpssjs = document.querySelector("#cmtpss").value
    let user = {
        nom : nomjs,
        prenom : prenomjs,
        email : emailjs,
        mtpss : mtpssjs,
        cmtpss : cmtpssjs
    }
    data.push(user)
    localStorage.setItem("bduser", JSON.stringify(data))
}
)