---
scope: patterns
depends_on: [foundations, components]
---

# Patterns iEDS

Les patterns sont des **compositions de composants** que l'on voit souvent dans l'app. Documentés ici pour éviter que chaque designer / dev réinvente la combinaison.

**Règle** : si un écran ressemble à 80% à un pattern listé ici, l'utiliser tel quel plutôt que partir d'une page blanche.

## Liste avec recherche

**Cas** : "Mes clients", "Mes rendez-vous", toute liste filtrable.

### Composition

1. `Header` avec titre + action (ex : "+ Nouveau client")
2. `InputSearch` sticky juste sous le header
3. Optionnel : rangée de `Chip` pour filtres rapides
4. `Stack` de `ListItem` ou `CardClient`
5. `EmptyState` si résultat vide

### Règles

- La recherche filtre côté client si < 200 items, côté serveur sinon
- Les chips de filtre sont **ou** entre elles, pas **et**
- Loading initial : 6 `Skeleton` de la même forme que l'item cible
- Pull-to-refresh activé par défaut

## Form long (> 5 champs)

**Cas** : création de client, édition de profil, prise de rendez-vous détaillée.

### Composition

1. `Header` avec titre + bouton "Annuler" à gauche
2. `Stack gap="spacing/16"` — sections espacées large
3. Chaque section = titre (`typo/title/md`) + champs + `Divider` en fin
4. Footer sticky avec `Button variant="primary"` pleine largeur

### Règles

- Validation à la soumission, pas en temps réel (sauf email / téléphone)
- Erreurs : `color/action/danger` + texte sous le champ, pas de toast
- Champs obligatoires : astérisque dans le label, pas de couleur

## Confirmation destructive

**Cas** : supprimer un client, annuler un rendez-vous, se déconnecter.

### Composition

- `Modal` centré
- Titre explicite ("Supprimer Marie Dubois ?")
- Corps : conséquences en clair ("Cette action est irréversible…")
- 2 actions : `Button variant="ghost"` (Annuler) + `Button variant="danger"` (Supprimer)

### Règles

- Jamais de confirmation destructive dans un `Toast` — toujours modale
- Le bouton destructif est **à droite** (position d'action principale)
- Pas de deuxième confirmation type "Êtes-vous vraiment sûr ?" — une seule suffit

## Sélection dans une longue liste

**Cas** : choisir un produit, un client, une boutique parmi beaucoup.

### Composition

1. `Sheet` coulissant (plein écran mobile)
2. `Header` de sheet avec bouton Close
3. `InputSearch` sticky
4. Liste de `ListItem` avec radio ou checkbox en slot end
5. Bouton "Valider" sticky bottom si multi-select

### Règles

- Single select : tap = sélection + fermeture immédiate
- Multi select : tap = toggle, fermeture sur "Valider" uniquement

## État vide

**Cas** : première ouverture, filtre sans résultat, pas de rendez-vous du jour.

### Composition

Un seul composant : `EmptyState` avec illustration + titre + sous-titre + CTA.

### Règles

- Illustration toujours depuis la librairie iEDS, jamais une image produit
- CTA facultatif mais recommandé — dire quoi faire ensuite
- Ne jamais afficher un `EmptyState` pendant un chargement — utiliser `Skeleton`

## Notification non-bloquante

**Cas** : confirmation de sauvegarde, info système, toast de succès.

### Composition

- `Toast` en bas d'écran, 3s par défaut
- Icône à gauche + texte + optionnel action à droite

### Règles

- Jamais de toast rouge d'erreur critique — utiliser `Alert` inline
- Pas de stack de toasts — un seul à la fois, le nouveau remplace l'ancien
- Texte sous 60 caractères

## À ajouter (ouverts)

- Prise de rendez-vous multi-étapes (wizard)
- Scan QR produit → fiche
- Partage client vers collègue
