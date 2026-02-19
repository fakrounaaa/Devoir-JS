function palindrome() {
    // On récupère la saisie et on met tout en minuscules
    const mot = document.getElementById('id-mot-saisi').value.toLowerCase();
    
    // On inverse le mot : split (coupe), reverse (inverse), join (recolle)
    const motInverse = mot.split('').reverse().join('');
    
    const zoneResultat = document.getElementById('resultat');

    // On vérifie si c'est vide ou si ça correspond
    if (mot === "") {
        zoneResultat.textContent = "Veuillez saisir un mot.";
    } else if (mot === motInverse) {
        zoneResultat.textContent = "C'est un palindrome ! ✅";
    } else {
        zoneResultat.textContent = "Ce n'est pas un palindrome. ❌";
    }
}