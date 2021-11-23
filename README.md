# Checkpoint n°2 - **4h**

Pour ce travail tu as 4h devant toi. Ce checkpoint n'est pas un examen, il va nous permettre de valider tes compétences, essaye donc de le faire au maximum de ton côté.
Ce checkpoint est très consistant, si tu n'arrives pas à tout faire ce n'est pas grave, fais de ton mieux ;)

## **!!! ÉTAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**

- Clone ce projet
- Crée une branche "ville_nom_prenom", qui va contenir ton avancée. (ville_nom_prenom sera remplacé par la ville de ton campus, ton nom et ton prénom...)

## Pré-requis (outils installés)

- NodeJS
- NPM
- @angular/cli


## Angular app

<img src="https://appdesign.dev/wp-content/uploads/2020/08/Empresa-desarrollo-web-angular.jpg" height="200">

Pour cet exercice tu vas devoir créer un projet se nommant **list-games** grâce à la commande `ng new list-games`.
(Tu auras donc une arborescence : /checkpoint2-angular/list-games/)
Dans ce projet tu devras créer 3 composants : `GameListComponent`, `GameComponent` & `GameService`.


Tu devras récupérer les informations (au format JSON) en appelant l'url suivante: <https://apis.wilders.dev/wild-games> (consulte ce lien pour + d'informations)
Tu dois utiliser le service `GameService` pour récupérer les données.

- Le composant `GameService`devra se faire injecter un service de type `HttpClient` & ira recuperer les données de l'API au format JSON.
- Le composant `GameListComponent`devra se faire injecter le service de type `GameService`.
- Le composant `GameListComponent` devra récupérer la liste des jeux proposés par `GameService` et les afficher via le composant `GameComponent`.
- Le composant `GameComponent` devra récupérer via le décorateur @Input les informations de chaque jeu (titre, description, image etc...) et les afficher unitairement (format libre).

## Conseils
- Commente ton code ET ton HTML.
- Nomme correctement tes variables.
- Indique le retour de tes fonctions.
- Tu ne sauras pas tout refaire de tête, n'oublie pas de retourner chercher les informations aux bons endroits.

## Bonus

Il te reste du temps ? Parfait ! Tu vas pouvoir ajouter quelques fonctionnalités utiles à ton projet Angular !
Les bonus sont indépendants les uns des autres, tu peux les réaliser dans l'ordre que tu  veux.

### Selection d'un thème
- ajoute un `select` qui liste tous les thèmes et qui permet de filtrer la liste affichée. (NB : on ne peut pas recupèrer directement la liste des thèmes via l'API)

### Affichage des screenshots & clips
- ajoute un bouton `Voir les screenshot` et `Voir les clips` pour chaque jeu et utilise le router Angular pour afficher les images `images` et/ou les vidéos `clips` sur une page avec une url de type `http://localhost:3000/jeux/5/clips/115795` (par exemple), ou 5 est l'id du jeu selectionné et ou 115795 est l'ID du clip, même exemple pour les images (screenshots)
 

### Format des dates
- Affiche le champ date formaté comme dans l'exemple suivant ¨31/04/2021, 12:00¨, em utilisant un `Pipe`

## Et voilà...

Tu peux aller te désaltérer à la brasserie, tu l'as amplement mérité !!

**NB : Tu ne dois pas commencer par cette étape... ;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)
