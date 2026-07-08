//Chercher,transformer et acceder aux données du fichier JSON
let extensions=[];//variable pour stocker les extensions
fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        extensions = data;
        afficherExtensions(extensions);
    }); 
    
//Afficher les cases
function afficherExtensions(liste){
    const grille = document.getElementById("grille");
    grille.innerHTML = "";
    liste.forEach((item, index) => {
        grille.innerHTML += `
        <div class="carte">
            <div class="carte-haut">
                <img src="${item.logo}" alt="${item.name}" class="carte-icone">
            </div>
            <div>
                <h3 class="carte-titre">${item.name}</h3>
                <p class="carte-description">${item.description}</p>    
            </div>    
            
            

            <div class="carte-bas">
                <button 
                    class="button-remove"
                    onclick="supprimerExtension(${index})">
                    Remove

                </button>
                <button  
                    class="toggle ${item.active ? " on": ""}"
                    onclick="toggleExtension(${index})">
                    
                </button>
            </div>
        `;
    });
}


              
              
            