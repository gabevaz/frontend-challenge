# Le Challenge Front-End Novatize

Bienvenue dans ton coding challenge Novatize! Tu trouveras ci-bas tout ce que tu dois savoir pour pouvoir réaliser le challenge.

Ce repo contient une interface web assez simple composée de 3 fichiers. Tu auras à modifier ces 3 fichiers au cours du challenge.

- index.html
- src/styles.css
- src/app.js

Un de nos collègues chez Novatize a bien avancé le travail, mais il manque encore du travail à faire. Et c'est là qu'on demande ton aide.

En partant du code de ce repo, ton challenge est d'y ajouter ce qui est décrit plus bas dans la section [Tâches à compléter](#tâches-à-compléter)

---

## :hand: Avant de commencer

Tu as deux options d'environnement de développement:

* CodeSandbox, un environnement déjà tout prêt.
* Environnement local sur ta machine. Utilise cette façon de faire si tu préfères développer avec tes outils habituels. Tu peux suivre les étapes ci-dessous pour installer le nécessaire.

### CodeSandbox

[Cliques ici](https://codesandbox.io/s/novatize-front-end-challenge-niqqy) pour accéder le CodeSandbox

Un environnement en ligne qui contient exactement le même code que le repo Github. Si tu rencontres des problèmes avec l'environnement local, celui-là ne demande aucune préparation afin d'être up and running.

Dès que tu modifies quelque chose dans CodeSandbox, une copie est créée que tu pourras nous envoyer par la suite en utilisant la fonction _Share_.

### Environnement local

Tu peux aussi utiliser le repo lui-même pour développer localement sur ta machine. Ça peut demander un peu de préparation, mais ça te permet aussi d'utiliser tous tes outils habituels. Si tu choisis d'utiliser CodeSandbox, passes directement à la section Maquettes Finales.

#### Outils

Voir les outils que tu dois avoir sur ta machine afin de pouvoir compléter le challenge.

- npm version 7.x et node version 16.x (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Chrome (d'autres browsers devraient fonctionner, mais ici on l'a testé sur Chrome seulement)
- Git CLI (https://github.com/git-guides/install-git)
- Un compte GitHub

#### Cloner le repo

Tu devras ensuite cloner ce repo sur ta machine.

`git clone https://github.com/Novatize/frontend-challenge.git` ou dans GitHub cliques sur Code et ensuite Download Zip.

On recommande ensuite de te créer un repo public sur ton propre compte GitHub et d'y mettre l'ensemble des fichiers que tu viens de télécharger. Tu pourras ensuite nous envoyer le lien vers ton repo quand tu auras terminé ton challenge pour nous partager ton travail.

C'est aussi possible de nous envoyer ton code par courriel dans un .zip, mais c'est moins pratique. On veut voir ce que tu sais faire avec Git!

#### Démarrer l'interface localement

Finalement, ouvres-toi un terminal dans le dossier où tu as placé le repo et exécute les commandes suivantes.

`npm install`

`npm run start`

Ton terminal devrait montrer à la dernière ligne quelque chose de similaire à `Server running at http://localhost:1234`. Ouvre ton browser à cette adresse et tu verras l'interface du challenge. Tant que le terminal reste ouvert, elle se mettra à jour automatiquement pour refléter les changements que tu fais au code.

---

## :framed_picture: Maquettes finales

Les designers ont créé ces maquettes pour te montrer le rendu final qu'on veut atteindre. Tu y trouveras toutes les sections nécessaires pour accomplir les tâches ci-dessous.

[Vue desktop (plus grand que 950px)](https://github.com/Novatize/frontend-challenge/blob/master/mockups/desktop.png?raw=true)

[Vue tablette (entre 770px et 950px)](https://github.com/Novatize/frontend-challenge/blob/master/mockups/tablet.png?raw=true)

[Vue mobile (plus petit que 770px)](https://github.com/Novatize/frontend-challenge/blob/master/mockups/mobile.png?raw=true)

[Validation des champs](https://github.com/Novatize/frontend-challenge/blob/master/mockups/validation.png?raw=true)

[Modale de succès](https://github.com/Novatize/frontend-challenge/blob/master/mockups/success_modal.png?raw=true)

[Modale d'erreur](https://github.com/Novatize/frontend-challenge/blob/master/mockups/error_modal.png?raw=true)

[Bannière d'acceptation des cookies](https://github.com/Novatize/frontend-challenge/blob/master/mockups/cookie_banner.png?raw=true)

[Menu hamburger mobile](https://github.com/Novatize/frontend-challenge/blob/master/mockups/mobile_header.png?raw=true)

---

## :white_check_mark: Tâches à compléter

L'interface web de ce repo est un travail qui est encore en cours par un de nos développeurs chez Novatize. Elle est fonctionnelle en plusieurs points, mais il manque encore du travail avant qu'elle réponde aux demandes du client.

Tu verras ci-dessous qu'il manque: 1 bug à réparer, quelques features à ajouter et à rendre l'interface responsive sur mobile. Si tu n'es pas en mesure de compléter toutes les tâches, ce n'est pas la fin du monde. On veut surtout voir de quoi tu es capable. Certaines tâches sont plus difficiles que d'autres, à toi de voir ce que tu peux faire et comment tu priorises le tout.

### :bug: Bug à réparer

**1. Affichage des erreurs**

Si un champ a été évalué en erreur et est ensuite évalué valide, le contour rouge et l'icône d'erreur restent visibles.

Pour reproduire:

- Remplis le champ _First name_
- Clique sur _Submit_
- Le champ _First name_ est maintenant encadré en vert
- Efface le texte du champ _First name_
- Clique sur _Submit_ une seconde fois
- L'icône d'erreur est toujours visible et le champs _Last name_ demeure rouge

On voudrait qu'après avoir cliqué sur _Submit_ une seconde fois, seul le premier champ en erreur soit rouge et que les status précédents ne soient plus affichés.

### :star: Features manquantes

**2. :white_circle: Changer la police par défaut**

Change la font utilisée dans toute la page pour celle de ton choix, tant que ce soit une font qui n'est pas nativement supportée par les navigateurs. Ce doit être une font qui est téléchargée dynamiquement.

Afin de se rapprocher le plus possible des maquettes, on te suggère une font sans sérif.

**3. :white_circle: Ajouter un champ courriel et vérifier son contenu**

Au-dessus des champs _Password_ et _Confirm password_, ajoute des champs _Email_ et _Confirm email_. Au moment de cliquer sur le bouton _Submit_, l'interface doit vérifier que le email respecte un format valide et que les deux champs contiennent le même courriel. Sans quoi, une erreur doit être affichée sur l'input, de la même manière que les autres inputs existants.

**4. :white_circle: Améliorer la liste des races de chiens**

La liste est déjà remplie par l'appel à un API de Novatize qui retourne une liste de races de chiens.

On veut maintenant la peaufiner en l'ordonnant alphabétiquement.

Voir [Obtenir une liste des races de chiens](#obtenir-une-liste-de-races-de-chien) pour la documentation de l'API.

**5. :white_circle: Styler et modifier le comportement de la bannière d'acceptation des cookies**

En te basant sur la maquette, tu dois ajouter une bannière en haut de page qui demande à l'utilisateur d'accepter l'utilisation des cookies.

Une fois que l'utilisateur clique sur Accept, il ne devrait plus recevoir ce message, même s'il rafraîchit la page ou ferme et réouvre son navigateur. Si toutefois il clique sur _Reject_, le bouton _Submit_ du form devrait se désactiver et rafraîchir la page devrait remontrer la demande d'acceptation à nouveau.

Pour ton information, le HTML de la bannière existe déjà, mais le style et la logique d'affichage n'existent pas.

**6. :white_circle: Appeler un API pour créer le profil**

Au moment de cliquer sur _Submit_, si tous les champs sont valides, l'interface devrait appeler l'API de Novatize pour créer le profil.

Les données entrées dans le formulaire devraient être envoyées dans le body de la requête à l'API dans le format requis et ensuite l'interface devrait se baser sur la réponse pour savoir si l'opération s'est complétée avec succès ou non.

Voir [Vérifier le formulaire et créer un profil](#vérifier-le-formulaire-et-créer-un-profil) pour la documentation de l'API.

**7. :white_circle: Afficher une modale en cas d'erreur sur l'API**

Faisant suite à la feature d'appel de l'API pour créer le profil, si l'API retourne une erreur, tu dois afficher une modale d'erreur et y afficher le message retourné par l'API. Pour ton information, une modale est déjà affichée en cas de succès, tu peux évidemment t'en inspirer.

Pour tester plus facilement, entres `j.doe@novatize.com` comme courriel. L'API te retournera une erreur à tout coup.

Voir [Vérifier le formulaire et créer un profil](#vérifier-le-formulaire-et-créer-un-profil) pour la documentation de l'API.

### :star: Features spécifiques à un écran de tablette

**8. :white_circle: Responsive pour tablette**

Lorsque le width est plus petit que 950px, l'interface devrait réagir comme suit:

- Seulement 4 photos doivent s'afficher dans un format 2x2.
- (Optionnel) Les margins et paddings peuvent être ajustés pour diminuer les espaces vides.

### :star: Features spécifiques à un écran mobile

**9. :white_circle: Responsive pour mobile**

Lorsque le width est plus petit que 770px, l'interface devrait réagir comme suit:

- Tous les champs doivent être l'un par-dessus l'autre.
- Les photos sont cachées.

**10. :white_circle: Éviter de télécharger les images en mobile**

Maintenant que les images n'ont plus à s'afficher en mobile, il ne faudrait plus les télécharger pour rien. Si la résolution est inférieure au seuil mobile défini ci-haut, ton navigateur ne devrait pas télécharger les images.

**11. :white_circle: Rendre le header responsive**

Le header de la page est présentement conçu pour afficher 4 liens avec assez d'espace pour qu'ils soient un à côté de l'autre. Par contre, dans une résolution mobile, les liens s'empilent un par-dessus l'autre. Le client aimerait que tous les liens soient disponibles dans un menu hamburger dès que la résolution a une largeur mobile.

Une maquette de ce menu mobile est disponible plus haut.

---

## :gear: Documentation API

### Obtenir une liste de races de chien

**Requête:**

API endpoint: GET https://api.devnovatize.com/frontend-challenge

**Réponse:**

Status code: 200

Body:

```
[
    "Affenpinscher",
    "Airdale Terrier",
    "Akita Inu",
    "Basenji",
    "Basset hound",
    "Beagle",
    "Beauceron",
    "German shepherd",
    "Australian Shepherd",
    "Australian Shepherd miniature",
    "Bichon Frise",
    "Maltese",
    ...
]
```

**Commande curl pour l'essayer facilement**

`curl --location --request GET 'https://api.devnovatize.com/frontend-challenge'`

### Vérifier le formulaire et créer un profil

**Requête:**

API endpoint: POST https://api.devnovatize.com/frontend-challenge

Headers: `Content-Type: application/json`

Body:

```
{
    "first-name": "Jane",
    "last-name": "Doe",
    "doggo-name": "Cobalt",
    "doggo-breed": "Libernese",
    "email": "j.doe@novatize.com",
    "confirm-email": "j.doe@novatize.com",
    "password": "password12A",
    "confirm-password": "password12A"
}
```

**Réponse:**

_Si le formulaire est accepté_

_Le profil n'est pas réellement créé et rien n'est sauvegardé, tu peux t'en servir autant que tu veux._

Status code: 201

Body: vide

_S'il y a une erreur dans la requête_

Status code: 400

Body:

```
{
    "error": "Error message."
}
```

**Commande curl pour l'essayer facilement**

`curl --location --request POST 'https://api.devnovatize.com/frontend-challenge'
--header 'Content-Type: application/json'
--data-raw '{
    "first-name": "Jane",
    "last-name": "Doe",
    "doggo-name": "Cobalt",
    "doggo-breed": "Libernese",
    "email": "example@domain.com",
    "confirm-email": "example@domain.com",
    "password": "password12A",
    "confirm-password": "password12A"
}'`