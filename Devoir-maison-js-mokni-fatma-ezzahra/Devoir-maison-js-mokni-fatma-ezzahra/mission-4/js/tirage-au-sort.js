// On remplace les mangas par une liste de personnages Sanrio
const personnages = [
    "Hello Kitty 🎀", 
    "Kuromi 💀", 
    "My Melody 🐰", 
    "Cinnamoroll ☁️", 
    "Pompompurin 🍮", 
    "Badtz-Maru 🐧", 
    "Keroppi 🐸", 
    "Little Twin Stars ✨", 
    "Aggretsuko 🤘", 
    "Chococat 🐱"
];

function tirage() {
    // On génère un index aléatoire entre 0 et la longueur de la liste
    // Math.random donne un chiffre entre 0 et 1, on le multiplie par la taille du tableau
    const indexAleatoire = Math.floor(Math.random() * personnages.length);
    
    // On pioche le personnage dans le tableau
    const gagnant = personnages[indexAleatoire];

    // On affiche le résultat dans les balises HTML prévues
    document.getElementById('affichage').textContent = "Le destin a choisi...";
    document.getElementById('aleatoire').textContent = gagnant;
}