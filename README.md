# Présentation de Stage chez Web4Jobs — Aya Jeddi
> Double Master : Technologies Éducatives & Innovation Pédagogique (TEIP) & Dispositifs Numériques Éducatifs (DNE)

Ce projet est une présentation web interactive, moderne et accessible (conforme WCAG AA), conçue sous forme de page unique (*single-page*) pour votre e-portfolio académique et professionnel.

Le site a été développé exclusivement en **HTML5, CSS3 et Vanilla JavaScript pur** (sans frameworks ni dépendances externes), ce qui vous permet de l'ouvrir directement sur n'importe quel ordinateur en double-cliquant sur le fichier `index.html`.

---

## Sommaire

1. [Comment ouvrir le site](#1-comment-ouvrir-le-site)
2. [Organisation des fichiers](#2-organisation-des-fichiers)
3. [Comment modifier les textes (js/content.js)](#3-comment-modifier-les-textes-jscontentjs)
4. [Comment remplacer les mentions `[À compléter]`](#4-comment-remplacer-les-mentions-à-compléter)
5. [Comment ajouter les captures d'écran de vos projets](#5-comment-ajouter-les-captures-décran-de-vos-projets)
6. [Comment remplacer les liens de vos projets](#6-comment-remplacer-les-liens-de-vos-projets)
7. [Comment ajouter le lien vers votre e-portfolio](#7-comment-ajouter-le-lien-vers-votre-e-portfolio)
8. [Comment publier le site en ligne (gratuitement)](#8-comment-publier-le-site-en-ligne-gratuitement)

---

## 1. Comment ouvrir le site

Aucun serveur, ligne de commande ou installation logicielle n'est nécessaire :

1. Rendez-vous dans le dossier du projet :
   `stage-web4jobs-portfolio/`
2. Faites un simple **double-clic** sur le fichier `index.html`.
3. Le site s'ouvrira immédiatement dans votre navigateur habituel (Chrome, Firefox, Edge, Safari).

---

## 2. Organisation des fichiers

```text
stage-web4jobs-portfolio/
├── index.html          # Structure de la page web (HTML sémantique)
├── README.md           # Ce guide d'explication
├── css/
│   └── styles.css      # Design, typographie (Fraunces & Nunito Sans), couleurs et responsive
├── js/
│   ├── content.js      # FICHIER CENTRAL : tous les textes et contenus éditables
│   └── main.js         # Logique d'interactions (onglets, quiz, accordéons, filtres)
└── assets/
    └── icons.svg       # Bibliothèque d'icônes vectorielles
```

---

## 3. Comment modifier les textes (`js/content.js`)

Pour que vous n'ayez pas à toucher au code HTML complexe, **l'ensemble des contenus modifiables est réuni dans un seul fichier : `js/content.js`**.

1. Ouvrez le fichier `js/content.js` avec un éditeur de texte simple (VS Code, Notepad++, ou même le Bloc-notes).
2. Vous trouverez un objet JavaScript `window.CONTENT = { ... }` dont les rubriques correspondent aux sections de la page :
   - `identity` : Vos informations personnelles et académiques.
   - `stage` : Vos cartes de synthèse sur le stage.
   - `web4jobs` : Informations sur la structure d'accueil.
   - `missions` : Votre démarche didactique et vos apprentissages.
   - `ayaFireRecovery` : Onglets et données du Projet 1.
   - `oralisAcademy` : Parcours et cours du Projet 2.
   - `activitiesAndQuiz` : Formats d'activités et quiz de démonstration.
   - `competences` : Outils numériques et compétences acquises.
   - `bilan` : Enseignements majeurs et réflexion personnelle.
3. Modifiez simplement les textes entre guillemets (`"mon texte ici"`).
4. Enregistrez le fichier (`Ctrl + S` ou `Cmd + S`) et actualisez la page dans votre navigateur (`F5`).

---

## 4. Comment remplacer les mentions `[À compléter]`

Les éléments en attente d'informations réelles sont repérables visuellement par un badge avec bordure dorée en pointillés et fond doux.

### Dans `js/content.js` :
Recherchez simplement le terme `"[À compléter]"` dans `js/content.js` et remplacez-le par votre texte.

Exemple :
```javascript
// Avant
personalReflectionContent: "[À compléter]"

// Après
personalReflectionContent: "Cette immersion m'a permis de comprendre combien la démarche d'alignement pédagogique conditionne la motivation des apprenants..."
```

### Dans `index.html` :
Des commentaires `<!-- À COMPLÉTER -->` sont placés directement à côté des balises concernées pour vous guider si vous souhaitez également ajuster le texte brut dans le HTML.

---

## 5. Comment ajouter les captures d'écran de vos projets

Pour ajouter une ou plusieurs vraies captures d'écran (notamment pour le projet *Aya Fire Recovery*) :

1. Enregistrez votre capture d'écran au format `.png` ou `.jpg` dans le dossier `assets/` (par exemple : `assets/aya-fire-screenshot.png`).
2. Ouvrez `index.html` et repérez la section `<!-- Emplacement pour captures d'écran -->` (vers la ligne 340).
3. Remplacez le bloc `<div class="screenshot-placeholder-zone">...</div>` par :
   ```html
   <div class="project-screenshot-wrapper">
     <img src="assets/aya-fire-screenshot.png" alt="Interface du dispositif Aya Fire Recovery" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
   </div>
   ```

---

## 6. Comment remplacer les liens de vos projets

Pour ajouter l'adresse web réelle d'un projet interactif :

1. Ouvrez `index.html`.
2. Repérez le bouton du projet (recherchez le commentaire `<!-- À COMPLÉTER : remplacer # par le lien réel du projet -->`).
3. Modifiez l'attribut `href="#"` par l'URL de votre dispositif :
   ```html
   <!-- Exemple -->
   <a href="https://votre-domaine.com/aya-fire-recovery" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
     Voir le projet
   </a>
   ```

---

## 7. Comment ajouter le lien vers votre e-portfolio

Le bouton d'accès à votre e-portfolio est situé tout en bas de page dans la section de conclusion.

1. Ouvrez `index.html`.
2. Repérez la section `SECTION 10 : CONCLUSION / FOOTER` (vers la ligne 720) et le commentaire :
   `<!-- À COMPLÉTER : remplacer # par le lien réel de l'e-portfolio -->`
3. Remplacez `href="#"` par l'adresse de votre e-portfolio :
   ```html
   <a href="https://mon-eportfolio-etudiant.fr" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
     Voir mon e-portfolio
   </a>
   ```

Vous pouvez également mettre à jour la valeur `portfolioUrl` dans `js/content.js`.

---

## 8. Comment publier le site en ligne (gratuitement)

Pour rendre cette présentation accessible à un jury ou à des recruteurs sur Internet, vous pouvez utiliser l'une de ces méthodes simples et gratuites :

### Option A : GitHub Pages (Recommandée pour un portfolio)
1. Créez un compte sur [GitHub.com](https://github.com) si vous n'en avez pas.
2. Créez un nouveau dépôt public (ex: `stage-web4jobs`).
3. Déposez-y tous les fichiers du dossier (`index.html`, `README.md`, `css/`, `js/`, `assets/`).
4. Allez dans les réglages du dépôt (**Settings**) > onglet **Pages**.
5. Sous **Branch**, sélectionnez `main` (ou `master`) puis le dossier `/ (root)` et cliquez sur **Save**.
6. En quelques secondes, votre site sera disponible à une adresse du type : `https://ayajeddi.github.io/stage-web4jobs/`.

### Option B : Netlify Drop (Le plus rapide, sans compte complexe)
1. Rendez-vous sur [app.netlify.com/drop](https://app.netlify.com/drop).
2. Glissez-déposez l'intégralité du dossier `stage-web4jobs-portfolio/`.
3. Le site est publié instantanément et vous recevez un lien public partageable.

---

## Principes pédagogiques respectés

- **Conception centrée sur l'apprentissage** : mise en valeur des objectifs, de la progressivité et des feedbacks didactiques.
- **Rigueur éthique et factuelle** : distinction stricte entre votre rôle d'ingénieure pédagogique et le développement technique global des dispositifs.
- **Accessibilité universelle** : navigation clavier complète, contrastes validés WCAG AA et compatibilité pour les personnes sensibles au mouvement (`prefers-reduced-motion`).
