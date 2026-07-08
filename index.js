//Chercher, transformer et accéder aux données du fichier JSON
let mesExtensions = []; //variable pour stocker les extensions

fetch('./data.json')
    .then((reponse) => reponse.json())
    .then((donnees) => {
        mesExtensions = donnees;
        afficherExtensions(mesExtensions);
    });

//Afficher les cases
function afficherExtensions(listeExtensions){
    const grille = document.getElementById("grille");
    grille.innerHTML = "";

    listeExtensions.forEach((extension, position) => {
        grille.innerHTML += `
        <div class="carte">
            <div class="carte-haut">
                <img src="${extension.logo}" alt="${extension.name}" class="carte-icone">
            </div>
            <div>
                <h3 class="carte-titre">${extension.name}</h3>
                <p class="carte-description">${extension.description}</p>    
            </div>    

            <div class="carte-bas">
                <button 
                    class="button-remove"
                    onclick="supprimerExtension(${position})">
                    Remove
                </button>
                <button  
                    class="toggle ${extension.isActive ? "on" : ""}"
                    onclick="toggleExtension(${position})">
                </button>
            </div>
        </div>
        `;
    });
}

// Le toggle : bascule isActive entre true et false
function toggleExtension(position){
    if (mesExtensions[position].isActive == true) {
        mesExtensions[position].isActive = false;
    } else {
        mesExtensions[position].isActive = true;
    }
    afficherExtensions(mesExtensions);
}
// Supprimer une extension
function supprimerExtension(position){
    mesExtensions.splice(position, 1);
    afficherExtensions(mesExtensions);
}


              
              
            