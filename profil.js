const infos = document.getElementById("infos");
const contact = document.getElementById("contact");
const additionalInfos = document.getElementById("additional_infos");
const additionalInfosTexte = document.getElementById("additional_infos_texte")

additionalInfosTexte.style.display = "none";

// Event au click 

contact.addEventListener("click", () => {
    additionalInfosTexte.style.display = "none"
    infos.style.display = "block"
})

additionalInfos.addEventListener("click", () => {
    infos.style.display = "none"
    additionalInfosTexte.style.display = "block"
})

console.log(infos);