---
ds_name: iEDS (Internal European Design System)
version: 2.4.0
last_updated: 2026-04-23
scope: Revamp Clienteling App, Revamp My Boutique App
figma_library_id: TUWENXBuFEehR2YBIzBqcm
canonical_source: this_repo
---

# iEDS — Design System documentation

**Cette documentation est la source de vérité. Si Figma ou Zeroheight dit autre chose, ce fichier gagne.**

## 🚨 Règle n°1 — Librairie

Utiliser **uniquement iEDS**. Ne jamais piocher dans :

- Chanel [.COM] / ABCHANEL 22
- [OLD][.COM] Components
- [APP HC FSH]
- [APP FSH]
- Toute autre librairie Chanel

Si un composant semble manquer dans iEDS, c'est qu'il n'existe pas encore : demander avant de créer.

## Pour le LLM qui lit ce repo

Ordre de consultation recommandé :

1. Ce README (règles globales)
2. `rules.md` — contraintes en dur, do / don't
3. `foundations.md` — tokens, couleurs, typo, spacing
4. `components/<nom>.md` — spec du composant demandé
5. `patterns.md` — si l'écran est une composition (liste, form, modal…)

Ne jamais chercher ailleurs que dans ce repo pour générer du code aligné iEDS.

## Structure

```
/
├── README.md              ← tu es ici
├── rules.md               ← do / don't transverses
├── foundations.md         ← tokens DS
├── patterns.md            ← compositions récurrentes
├── components/
│   ├── button.md
│   ├── input-text.md
│   ├── card-client.md
│   ├── … (un fichier par composant)
│   └── _index.md          ← liste exhaustive avec 1 ligne chacun
└── changelog.md           ← breaking changes versionnés
```

## Conventions de nommage

- Fichiers : `kebab-case.md`
- Composants : nom iEDS exact (ex : `CardClient`, pas `ClientCard`)
- Variables : tokens iEDS exacts (ex : `color/surface/primary`, pas une couleur RGB)

## Stack technique cible

- React + TypeScript
- Tailwind (classes uniquement depuis `tailwind.config.iEDS.js`)
- Figma MCP pour extraction de specs
- Polices : `ABChanel Corpo` (Regular, Light, Semi Bold) — `ABChanel Corpo 2022` **non utilisable en MCP**

## Workflow de mise à jour

1. Changement validé en Figma (library `TUWENXBuFEehR2YBIzBqcm`)
2. PR sur ce repo pour synchroniser le `.md` concerné
3. Bump `version` dans le front-matter du fichier modifié
4. Entrée dans `changelog.md` si breaking

## Contacts

- Owner DS : [à remplir]
- Owner doc : Théo Lopez Carbajal
