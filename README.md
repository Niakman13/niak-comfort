# Niak Comfort

[![release](https://img.shields.io/github/v/release/Niakman13/niak-comfort?include_prereleases&cacheSeconds=3600)](https://github.com/Niakman13/niak-comfort/releases)
[![Validate](https://github.com/Niakman13/niak-comfort/actions/workflows/validate.yml/badge.svg)](https://github.com/Niakman13/niak-comfort/actions/workflows/validate.yml)
[![HACS](https://img.shields.io/badge/HACS-Custom-orange)](https://hacs.xyz)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

[![Sponsor](https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?logo=githubsponsors&logoColor=white)](https://github.com/sponsors/Niakman13)
[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-frankblemont-FFDD00?logo=buymeacoffee&logoColor=black)](https://www.buymeacoffee.com/frankblemont)
[![PayPal](https://img.shields.io/badge/PayPal-Donate-00457C?logo=paypal&logoColor=white)](https://paypal.me/frankblemont)

Carte de confort par pièce pour Home Assistant, inspirée de Niak Weather. Elle affiche les conseils calculés par [l’intégration Niak Comfort](https://github.com/Niakman13/niak-comfort-integration), avec leurs besoins, contraintes et sources.

**Version 0.4.0-beta.1 — bêta de test.** Aucun équipement n’est commandé. Home Assistant 2026.10.0 minimum.

> **Depuis la version 0.4, la carte est incluse dans [l’intégration Niak Comfort](https://github.com/Niakman13/niak-comfort-integration).** Installez seulement l’intégration : la carte est disponible sans rien déclarer. Ce dépôt reste la source de développement de la carte ; si vous l’aviez installé dans HACS, vous pouvez le supprimer.

![Aperçu de la carte — données fictives](docs/images/preview.png)

## Fonctions

Quatre formats : mini, tuile, dépliée et complète. Comparaison dedans/dehors, fenêtres, CO₂, température, humidité et action réellement observée du chauffage. Pourquoi/sources, fenêtre complète accessible par bouton, appui long ou Shift+Entrée. Thèmes clair/sombre/HA, rubriques masquables et réordonnables, animations et verre désactivables.

Vert : tout va bien ; bleu : potentiel ; orange : conseil ; rouge : attention ; gris : inconnu. Le geste ne remplace pas le niveau : une aération observée peut rester rouge tant que le besoin mesuré persiste.

Les ouvrants affichent leur exposition, leur abri et le soleil qu’ils reçoivent. Prévisions, volets, PM2.5/COV et coordination chauffage ne sont pas raccordés. Ils restent clairement indisponibles. La carte reçoit le moteur ; elle ne recalcule pas ses conseils.

## Installation

1. Installer et configurer [l’intégration](https://github.com/Niakman13/niak-comfort-integration#installation) avec une pièce.
2. Dans HACS, ouvrir le bouton ci-dessous (ou ⋮ → **Dépôts personnalisés** : `https://github.com/Niakman13/niak-comfort`, catégorie **Tableau de bord**) et télécharger la version alpha. Afficher les versions bêta si nécessaire. Ce projet n’est pas inclus au catalogue HACS par défaut.
3. Vérifier la ressource HACS `/hacsfiles/niak-comfort/niak-comfort-card.js` en **module JavaScript**, puis recharger le navigateur.
4. Ajouter une carte Niak Comfort et choisir la pièce dans l’éditeur. Un choix automatique est possible avec une seule pièce configurée.

[![Ouvrir Niak Comfort dans HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Niakman13&repository=niak-comfort&category=plugin)

Installation manuelle : télécharger `niak-comfort-card.js` depuis [la release](https://github.com/Niakman13/niak-comfort/releases), le copier dans `config/www/`, puis ajouter `/local/niak-comfort-card.js?v=0.4.0-beta.1` comme module JavaScript. Inutile avec l’intégration 0.4 ou plus récente, qui inclut déjà la carte.

```yaml
type: custom:niak-comfort-card
format: tile
```

Les capteurs et seuils se règlent dans l’intégration. L’éditeur de carte règle la présentation. Les noms d’entités ne sont pas imposés.

## Essai et développement

`npm ci` puis `npm run validate` : vérification TypeScript, 10 tests et compilation. Le bundle contient Lit et fonctionne sans téléchargement de bibliothèque externe.

Pour le banc local : `npm run build`, puis `python3 -m http.server 8766 --bind 127.0.0.1` et ouvrir `http://127.0.0.1:8766/preview/card.html`. Les vues ont été générées avec le moteur Python ; les données et la connexion sont **fictives**. Aucun accès à une installation réelle. Le script d’export est dans le dépôt de l’intégration.

Les contrôles navigateur locaux couvrent les formats, thèmes, petits écrans, sources, gestes et retrait des réponses invalides. Ils ne certifient pas toutes les versions HA ni une conformité d’accessibilité exhaustive.

## Les trois piliers

Weather fournira observations et prévisions en lecture seule. Comfort évalue besoins et possibilités. Le futur chauffage conservera la responsabilité des commandes autorisées. Ces raccordements restent à développer ; aucune proposition de pause n’est envoyée dans cette alpha.

Licence MIT — Niakman13. Les notices de Lit sont dans `licenses/`.

La configuration des sources se fait dans **Niak Confort → Mon logement**, dans la barre latérale Home Assistant. Le bouton **Configurer cette pièce** de la carte ouvre directement la pièce concernée pour les administrateurs.
