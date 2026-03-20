# Voice & Tone — Internal App

> **Principes fondateurs :** Clarté · Élégance · Précision · Bienveillance
>
> Le ton de l'application reflète l'ADN de la Maison : sobre, exigeant, humain. Chaque mot est choisi pour sa justesse — jamais pour son effet.

---

## Table des matières

1. [Identité de voix](#1-identité-de-voix)
2. [Les quatre piliers du ton](#2-les-quatre-piliers-du-ton)
3. [Registre de langue](#3-registre-de-langue)
4. [Vocabulaire de référence](#4-vocabulaire-de-référence)
5. [Patterns de copy UI](#5-patterns-de-copy-ui)
6. [États & feedback](#6-états--feedback)
7. [Dos & Don'ts](#7-dos--donts)

---

## 1. Identité de voix

L'application est un outil interne à destination des collaborateurs de la Maison. Elle parle à des professionnels exigeants, habitués à l'excellence — et qui n'ont pas de temps à perdre.

### Persona de voix

| Attribut | Description |
|---|---|
| **Ton général** | Professionnel, direct, chaleureux sans familiarité |
| **Registre** | Vouvoiement systématique |
| **Langue** | Français exclusivement (sauf termes métier établis) |
| **Longueur** | Aussi courte que possible, jamais plus longue que nécessaire |
| **Personnalité** | Précise, fiable, discrète |

### Ce que la voix n'est pas

- ❌ Enthousiaste à outrance ("Super ! Génial ! Félicitations !")
- ❌ Condescendante ou trop explicative
- ❌ Trop formelle ou froide (formulaires administratifs)
- ❌ Technique ou jargonneuse sans nécessité

---

## 2. Les quatre piliers du ton

### CLAIR
Chaque message a une lecture, pas deux. On dit ce qu'on veut dire, on le dit une fois.

> ✅ "Reprendre" / ❌ "Continuer votre progression là où vous vous étiez arrêté"

### PRÉCIS
On nomme les choses avec exactitude. Pas d'approximation, pas de vague rassurant.

> ✅ "3 modules complétés sur 9" / ❌ "Vous avancez bien !"

### SOBRE
L'application ne célèbre pas pour elle-même. Les retours positifs existent, mais ils ne crient pas.

> ✅ "Parcours terminé" / ❌ "Bravo, vous avez terminé ce parcours !"

### BIENVEILLANT
L'outil accompagne, il ne juge pas. Le ton est neutre face à l'erreur, encourageant face à l'effort.

> ✅ "Une erreur est survenue. Veuillez réessayer." / ❌ "Oops ! Quelque chose s'est mal passé 😬"

---

## 3. Registre de langue

### Vouvoiement systématique

L'application vouvoie toujours l'utilisateur, sans exception. Le vouvoiement est un signe de respect, cohérent avec la culture de la Maison.

| ✅ Correct | ❌ Incorrect |
|---|---|
| "Modifier votre profil" | "Modifier mon profil" |
| "Vos parcours en cours" | "Tes parcours en cours" |
| "Vous avez 5 messages non lus" | "T'as 5 messages" |

> **Exception :** Les titres de section ou d'écran à la première personne du possessif restent en "Mon / Mes" car ils désignent l'espace personnel de l'utilisateur (ex : "Mon compte", "Mes parcours"). Il s'agit d'une convention UI, pas d'une prise de parole directe.

### Majuscules et ponctuation

- Les **titres de section** sont en UPPERCASE (géré par le Design System via `.dsLabel()`).
- Les **phrases complètes** (messages, descriptions) portent une majuscule initiale et une ponctuation finale.
- Les **labels de bouton** et **titres courts** n'ont pas de ponctuation finale.
- Éviter les points d'exclamation, sauf cas exceptionnel.

### Termes métier acceptés en anglais

Certains termes sont établis dans l'usage professionnel et ne se traduisent pas naturellement. Les utiliser tels quels, sans guillemets.

| Terme | Contexte |
|---|---|
| Dashboard | Tableau de bord global |
| Score | Indicateur de performance |
| Feedback | Retour utilisateur |
| Design | Conception visuelle |
| Brand | Identité de marque |
| KPI | Indicateur clé (usage interne) |

---

## 4. Vocabulaire de référence

### Lexique préféré

| Concept | ✅ Utiliser | ❌ Éviter |
|---|---|---|
| Contenu d'apprentissage | Parcours, Module | Cours, Formation, Leçon |
| Progression | Avancement, Progression | Niveau, Score de jeu |
| Achèvement | Terminé, Complété | Fini, Bouclé, Done |
| En cours | En cours | Actif, Démarré, Started |
| État initial | À commencer | Non démarré, Inactif, Vierge |
| Retour arrière | Retour | Annuler, Back |
| Naviguer | Voir tout, Accéder | Cliquer, Tapper, Appuyer |
| Compte utilisateur | Compte, Profil | Espace perso, Dashboard perso |
| Données personnelles | Informations personnelles | Infos perso, Mes données |
| Déconnexion | Se déconnecter | Quitter, Logout |
| Notification | Notification | Alerte, Pop-up |

### Nomenclature des actions

Les labels de bouton sont des **verbes à l'infinitif** — jamais de formulations nominales ambiguës.

| ✅ Correct | ❌ Incorrect |
|---|---|
| "Commencer le parcours" | "Démarrage du parcours" |
| "Modifier le profil" | "Modification" |
| "Tout voir" | "Voir plus" / "More" |
| "Se déconnecter" | "Déconnexion" |
| "Exporter les données" | "Export" |

---

## 5. Patterns de copy UI

### En-têtes & salutation

La salutation dans le header est personnelle, sobre, directe.

```
Bonjour, [Prénom N.]
```

- Utiliser le prénom + initiale du nom (ex : "Sophie M.")
- Ne pas ajouter de ponctuation après le prénom
- Ne pas faire varier selon l'heure de la journée (pas de "Bonsoir")

### Titres d'écran

Courts, nominaux, en cohérence avec le contexte de navigation.

| Écran | Titre |
|---|---|
| Accueil | *(pas de titre — le header fait office de titre)* |
| Profil | Profil |
| Détail d'un parcours | *(titre du parcours)* |
| Paramètres | Compte |

### Labels de section

En UPPERCASE, maximum 2 mots. Décrire le contenu, pas l'action.

| ✅ Correct | ❌ Incorrect |
|---|---|
| "Aperçu" | "Voir les statistiques" |
| "Actions rapides" | "Que souhaitez-vous faire ?" |
| "Activité récente" | "Dernières activités" |
| "Mes parcours" | "Vos formations disponibles" |
| "Compte" | "Paramètres du compte" |

### Descriptions de parcours

Une phrase, voix active, centrée sur la compétence développée — pas sur le contenu du cours.

> ✅ "Développer son style de leadership et piloter des équipes multiculturelles."
> ✅ "Maîtriser les outils financiers pour prendre des décisions stratégiques éclairées."
> ❌ "Dans ce parcours, vous apprendrez les bases du leadership et de la gestion d'équipe."

### Sous-titres de cartes action

Ultra-courts. Une information ou une incitation. Pas de verbe si l'action est déjà dans le titre.

| Titre | Sous-titre |
|---|---|
| "Planifier" | "3 événements ce soir" |
| "Messages" | "5 non lus" |
| "Rapports" | "Exporter les données" |
| "Nouvelle tâche" | "Créer & assigner" |

### Horodatage & métadonnées

Format court, naturel, contextuel.

| Contexte | Format |
|---|---|
| Aujourd'hui | "09:14" |
| Hier | "Hier" |
| Cette semaine | "Lun.", "Mar.", etc. |
| Plus ancien | "12 mars" |

### Badges de statut

| Statut | Label | Variant |
|---|---|---|
| Nouveau contenu | "New" | `.accent` (doré) |
| Alerte importante | "!" | `.dark` (noir) |
| En cours | "En cours" | `.accent` (doré) |
| Terminé | "Terminé" | `.dark` (noir) |
| Non commencé | "À commencer" | `.neutral` (gris) |
| Brouillon / secondaire | "Draft" | `.outlined` |
| Rôle administrateur | "Admin" | `.accent` (doré) |

> Le badge "New" reste en anglais — convention UI internationale universellement comprise.

---

## 6. États & feedback

### États vides

Informatifs, jamais culpabilisants. Proposer une action quand c'est possible.

| Contexte | Message |
|---|---|
| Aucune activité | "Aucune activité récente." |
| Aucun message | "Vous n'avez pas de message." |
| Parcours non commencé | "Commencez ce parcours pour suivre votre progression." |
| Aucun résultat de recherche | "Aucun résultat pour cette recherche." |

### Erreurs

Claires, sans jargon technique. Toujours indiquer la marche à suivre.

| Situation | Message |
|---|---|
| Erreur réseau | "Impossible de charger les données. Vérifiez votre connexion et réessayez." |
| Erreur serveur | "Une erreur est survenue. Veuillez réessayer." |
| Session expirée | "Votre session a expiré. Reconnectez-vous pour continuer." |
| Accès non autorisé | "Vous n'avez pas accès à cette section." |
| Formulaire incomplet | "Veuillez compléter tous les champs obligatoires." |

> Règles pour les messages d'erreur :
> - Jamais de code technique visible (ex : "Error 403")
> - Toujours une phrase d'explication + une action possible
> - Ton neutre — ne pas minimiser ni dramatiser

### Confirmations & succès

Sobres, factuels. Pas d'exclamation.

| Action | Confirmation |
|---|---|
| Profil mis à jour | "Vos informations ont été enregistrées." |
| Tâche créée | "Tâche créée." |
| Module terminé | "Module terminé." |
| Parcours complété | "Parcours terminé." |
| Déconnexion | *(pas de message — transition silencieuse vers l'écran de connexion)* |

### Chargement

Court, rassurant, sans attente visible prolongée.

```
Chargement…
```

Pour les contenus lourds uniquement — préférer les skeletons screens sans texte.

### Alertes de confirmation (actions destructives)

Toujours demander confirmation pour les actions irréversibles. Format : **titre de l'action + conséquence + deux actions claires**.

```
Titre    : Supprimer la tâche
Message  : Cette action est irréversible. La tâche sera définitivement supprimée.
Actions  : [Annuler]  [Supprimer]
```

> L'action destructive est toujours le bouton secondaire à droite (jamais `.primary`).

---

## 7. Dos & Don'ts

### ✅ DO

- Utiliser le **vouvoiement** dans toutes les prises de parole directes
- Préférer le **verbe à l'infinitif** pour les labels d'action
- Écrire des **descriptions en une phrase**, voix active
- Rester **neutre face à l'erreur** — informer, ne pas juger
- Utiliser des **métadonnées courtes** et lisibles d'un coup d'œil
- Conserver les **termes métier établis** (Dashboard, Brand, Score…) sans traduction forcée
- Garder les **titres de section courts** (1-2 mots en UPPERCASE)

### ❌ DON'T

- Ne pas utiliser le **tutoiement**, même dans un contexte décontracté
- Ne pas **sur-expliquer** une action évidente depuis le contexte visuel
- Ne pas **féliciter excessivement** ("Bravo !", "Excellent !", "Vous êtes un champion !")
- Ne pas utiliser **d'emojis** dans les copies UI (sauf dans les notifications push si nécessaire)
- Ne pas afficher **de code d'erreur technique** visible par l'utilisateur
- Ne pas utiliser **des anglicismes inutiles** ("Update votre profil", "Checker vos messages")
- Ne pas **ponctuer les labels de bouton** avec un point final
- Ne pas utiliser **plus d'un point d'exclamation** par écran — préférer zéro

---

## Ressources

| Ressource | Lien |
|---|---|
| Design System Guidelines | [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) |
| Figma Design System | [Internal European DS](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System) |
| Règles typographiques | [`DESIGN_SYSTEM.md#3-typographie`](DESIGN_SYSTEM.md#3-typographie) |
