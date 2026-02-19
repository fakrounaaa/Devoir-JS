// On récupère le texte de la citation
const citation = document.getElementById('citation').textContent;

// On enlève le point à la fin pour ne pas qu'il soit compté dans le dernier mot
const phraseNettoyee = citation.replace('.', '');

// On transforme la phrase en tableau de mots
const mots = phraseNettoyee.split(' ');

let motLePlusLong = "";

// On parcourt le tableau pour trouver le mot avec le plus de lettres
for (let i = 0; i < mots.length; i++) {
    if (mots[i].length > motLePlusLong.length) {
        motLePlusLong = mots[i];
    }
}

// On affiche le mot trouvé dans la page
document.getElementById('mot Plus Long').textContent = "Le mot le plus long est : " + motLePlusLong;