---
layout: ../../layouts/post.astro
title: Comment est construit ce site
publishDate: 2022-02-01 00:00:00
description: Quel SSG j'ai utilisé, pourquoi et comment je l'ai mis en ligne
tags:
  - dev
  - astro
---

Ce site internet a été développé avec la volonté qu'il soit extrement leger et performant.

Pour cela j'ai utilisé le SSG (Static Site Generator) : [AstroBuild](https://astro.build/)

## Astro
Astro est un petit nouveau parmis les SSG, le [premier article mis en ligne](https://astro.build/blog/introducing-astro/) l'a été en juin 2021.

Une communauté s'est très vite formée, le repository ayant déjà 10k stars et le discord environ 4000 membres au moment où j'écris cet article.

Astro a deux objectifs principaux: 
- Permettre aux développeurs d'utiliser leurs framework préférés (React, Preact, Vue, Svelte, etc.)
- Créer des sites 0kb javascript

### Liens utiles

- [Github](https://github.com/withastro/astro)
- [Documentation](https://docs.astro.build/en/getting-started/)
- [Blog](https://astro.build/blog/)
- [Discord](https://discord.com/invite/grF4GTXXYm)
- [Twitter](https://twitter.com/astrodotbuild)


## Qu'est-ce qu'un site statique
Les sites internets "dynamique" ont besoin d'un back-end, c'est à dire un serveur qui va s'occuper de traiter les requêtes de l'utilisateur : 

- Connexion a un espace membre
- Soumission d'un formulaire
- Recherche de produit
- etc.

Lorsque ces besoins peuvent être eviter, on peut utiliser un site statique.

Un site statique va être générer au moment du déploiement, ainsi toutes les pages existent sur le serveur.

Lorsqu'un utilisateur essaye d'acceder a la page contact.html, le serveur va simplement chercher celle-ci dans un dossier et la renvoi a l'utilisateur. 

Il est donc possible d'ouvrir le repertoire "build" où se situe tous les fichiers générés, ouvrir un fichier html dans le navigateur et simuler l'expérience exacte que les visiteurs auront.

## Mise en ligne
L'avantage d'utiliser un site statique est que les pré-requis sont presque innexistant.

Il suffit d'un serveur sur lequel vous pouvez envoyer des fichiers HTML et auquel peut être lié un nom de domaine.

Pour ma part j'utilise pour l'instant GitHub Pages, le site étant hebergé sur GitHub, la mise en ligne est extrêment aisé. A chaque fois que j'envoi une nouvelle version du site, GitHub s'occupe de généré les fichiers statiques et de les mettre à disposition des utilisateurs.

### Quelques hebergeurs de sites statiques
- [Github Pages](https://pages.github.com/)
- [CloudFlare Pages](https://pages.cloudflare.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Il en existe plein d'autres et vous trouverez toutes les instructions dans la [documentation d'astro](https://docs.astro.build/en/guides/deploy/)

En dehors de GitHub, j'ai testé le deploiement de CloudFlare et c'était extrêment rapide, il suffit de parametrer le site en le liant à votre compte GitHub &amp; de sélectionner Astro lorsque CloudFlare vous demande le type de site.