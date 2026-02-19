function construirePyramide() {
    const nbLignes = document.getElementById('ligne-pyramide').value;
    const zonePyramide = document.getElementById('pyramide');
    let contenu = "";
    let etage = "";

    // On boucle autant de fois que le nombre de lignes demandé
    for (let i = 0; i < nbLignes; i++) {
        etage += "*"; // On rajoute une étoile à chaque étage
        contenu += etage + "<br>"; // On ajoute l'étage au contenu total
    }

    // On utilise slice pour être sûr de bien prendre toute la chaîne (consigne cours)
    zonePyramide.innerHTML = contenu.slice(0);
}