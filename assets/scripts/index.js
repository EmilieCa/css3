// HEADER
const headerElement = document.querySelector('header');

// SECTION LETTRE
const lettresElements = document.querySelectorAll('.lettre');

// BOUTON RETOUR EN HAUT
const retourHaut = document.querySelector('.retour-en-haut');

// BOUTONS NAVIGATION SECTION LETTRE *** À RETRAVAILLER ***
const boutonAnimation = document.getElementById('animation');
const boutonArrierePlans = document.getElementById('arr-plans-multiples');
const boutonBackground = document.getElementById('background');
const boutonBoiteDecorative = document.getElementById('boite-decorative');
const boutonBordures = document.getElementById('bordures');
const boutonFiltre = document.getElementById('filtre');
const boutonFontface = document.getElementById('fontface');
const boutonForme = document.getElementById('formes');
const boutonOpacite = document.getElementById('opacite');
const boutonOverflow = document.getElementById('overflow');
const boutonTransformation = document.getElementById('transformation');
const boutonTransition = document.getElementById('transition');

// CONTENUS SECTION LETTRE  *** À RETRAVAILLER ***
const contenuAnimation = document.querySelector('.contenu-animations');
const contenuArrierePlans = document.querySelector('.contenu-arriere-plans');
const contenuBackground = document.querySelector('.contenu-background');
const contenuBoiteDecorative = document.querySelector('.contenu-boite-decorative');
const contenuBordures = document.querySelector('.contenu-bordures');
const contenuFiltre = document.querySelector('.contenu-filtre');
const contenuFontface = document.querySelector('.contenu-fontfaces');
const contenuForme = document.querySelector('.contenu-formes');
const contenuOpacite = document.querySelector('.contenu-opacite');
const contenuOverflow = document.querySelector('.contenu-overflow');
const contenuTransformation = document.querySelector('.contenu-transformation');
const contenuTransition = document.querySelector('.contenu-transition');

// SCROLL EVENT
window.addEventListener('scroll', function() {
    headerElement.style.animationName = 'headerDimension';
    retourHaut.style.animationName = 'apparition';
});

// MENU ACCORDÉON
lettresElements.forEach(function(lettre) {
    const lettreEnteteElement = lettre .querySelector('.lettre-entete');
    const lettreCorpsElement = lettre.querySelector('.lettre-corps');

        if (lettreEnteteElement.ariaExpanded == 'true') {
            lettreCorpsElement.style.display = 'block';
        } else {
            lettreEnteteElement.ariaExpanded = 'false';
            lettreCorpsElement.style.display = 'none';
        }

        lettreEnteteElement.addEventListener('click', basculerOuverturelettre);
        function basculerOuverturelettre() {
            if (lettreEnteteElement.ariaExpanded == 'true') {
                lettreEnteteElement.ariaExpanded = 'false';
                lettreCorpsElement.style.display = 'none';
            } else {
                lettreEnteteElement.ariaExpanded = 'true';
                lettreCorpsElement.style.display = 'block';
                etatBoutonEtPageAnimationsActif();
                etatBoutonEtPageBackgroundActif();
                etatBoutonEtPageFiltreActif();
                etatBoutonEtPageOpaciteActif();
                etatBoutonEtPageTransformationActif(); 
            }
        }
});

// *** À RETRAVAILLER ***
// FONCTIONS D'ÉTATS
function etatBoutonEtPageAnimationsActif() {
    boutonAnimation.classList.add('actif');
    contenuAnimation.classList.remove('non-visible');
    boutonArrierePlans.classList.remove('actif');
    contenuArrierePlans.classList.add('non-visible');
}

function etatBoutonEtPageArrierePlansActif() {
    boutonAnimation.classList.remove('actif');
    contenuAnimation.classList.add('non-visible');
    boutonArrierePlans.classList.add('actif');
    contenuArrierePlans.classList.remove('non-visible');
}

function etatBoutonEtPageBackgroundActif() {
    boutonBackground.classList.add('actif');
    contenuBackground.classList.remove('non-visible');
    boutonBoiteDecorative.classList.remove('actif');
    contenuBoiteDecorative.classList.add('non-visible');
    boutonBordures.classList.remove('actif');
    contenuBordures.classList.add('non-visible');
}

function etatBoutonEtPageBoitesDecorativesActif() {
    boutonBoiteDecorative.classList.add('actif');
    contenuBoiteDecorative.classList.remove('non-visible');
    boutonBackground.classList.remove('actif');
    contenuBackground.classList.add('non-visible');
    boutonBordures.classList.remove('actif');
    contenuBordures.classList.add('non-visible');
}

function etatBoutonEtPageBorduresActif() {
    boutonBordures.classList.add('actif');
    contenuBordures.classList.remove('non-visible');
    boutonBoiteDecorative.classList.remove('actif');
    contenuBoiteDecorative.classList.add('non-visible');
    boutonBackground.classList.remove('actif');
    contenuBackground.classList.add('non-visible');
}

function etatBoutonEtPageFiltreActif() {
    boutonFiltre.classList.add('actif');
    contenuFiltre.classList.remove('non-visible');
    boutonFontface.classList.remove('actif');
    contenuFontface.classList.add('non-visible');
    boutonForme.classList.remove('actif');
    contenuForme.classList.add('non-visible');
}

function etatBoutonEtPageFontfaceActif() {
    boutonFiltre.classList.remove('actif');
    contenuFiltre.classList.add('non-visible');
    boutonFontface.classList.add('actif');
    contenuFontface.classList.remove('non-visible');
    boutonForme.classList.remove('actif');
    contenuForme.classList.add('non-visible');
}

function etatBoutonEtPageFormeActif() {
    boutonFiltre.classList.remove('actif');
    contenuFiltre.classList.add('non-visible');
    boutonFontface.classList.remove('actif');
    contenuFontface.classList.add('non-visible');
    boutonForme.classList.add('actif');
    contenuForme.classList.remove('non-visible');
}

function etatBoutonEtPageOpaciteActif() {
    boutonOpacite.classList.add('actif');
    contenuOpacite.classList.remove('non-visible');
    boutonOverflow.classList.remove('actif');
    contenuOverflow.classList.add('non-visible');
}

function etatBoutonEtPageOverflowActif() {
    boutonOverflow.classList.add('actif');
    contenuOverflow.classList.remove('non-visible');
    boutonOpacite.classList.remove('actif');
    contenuOpacite.classList.add('non-visible');
}

function etatBoutonEtPageTransformationActif() {
    boutonTransformation.classList.add('actif');
    contenuTransformation.classList.remove('non-visible');
    boutonTransition.classList.remove('actif');
    contenuTransition.classList.add('non-visible');
}

function etatBoutonEtPageTransitionActif() {
    boutonTransformation.classList.remove('actif');
    contenuTransformation.classList.add('non-visible');
    boutonTransition.classList.add('actif');
    contenuTransition.classList.remove('non-visible');
}

boutonAnimation.addEventListener('click', function() {
    etatBoutonEtPageAnimationsActif();
});

boutonArrierePlans.addEventListener('click', function() {
    etatBoutonEtPageArrierePlansActif();
});

boutonBackground.addEventListener('click', function() {
    etatBoutonEtPageBackgroundActif();
});

boutonBoiteDecorative.addEventListener('click', function() {
    etatBoutonEtPageBoitesDecorativesActif();
});

boutonBordures.addEventListener('click', function() {
    etatBoutonEtPageBorduresActif();
});

boutonFiltre.addEventListener('click', function() {
    etatBoutonEtPageFiltreActif();
});

boutonFontface.addEventListener('click', function() {
    etatBoutonEtPageFontfaceActif();
});

boutonForme.addEventListener('click', function() {
    etatBoutonEtPageFormeActif();
});

boutonOpacite.addEventListener('click', function() {
    etatBoutonEtPageOpaciteActif();
});

boutonOverflow.addEventListener('click', function() {
    etatBoutonEtPageOverflowActif();
});

boutonTransformation.addEventListener('click', function() {
    etatBoutonEtPageTransformationActif();
});

boutonTransition.addEventListener('click', function() {
    etatBoutonEtPageTransitionActif();
});


