---
scope: changelog
---

# Changelog iEDS

Format : [version du DS] - date — liste des changements. Breaking changes marqués 🚨.

## [2.4.0] - 2026-04-23

- **CardClient** 1.3.0 — ajout variant `compact` (non-breaking)
- **foundations** — token `spacing/24` ajouté (48px)

## [2.3.0] - 2026-03-15

- 🚨 **Button** 2.0.0 — prop `type` renommée en `variant`. Migration : remplacer `type="primary"` par `variant="primary"`.
- **Badge** 1.4.0 — nouveau ton `warning`

## [2.2.1] - 2026-02-14

- **CardClient** 1.2.0 — badge devient optionnel et typé
- Fix token `color/text/tertiary` contraste insuffisant (WCAG AA)

## [2.2.0] - 2026-01-20

- 🚨 **Modal** 2.0.0 — suppression de la prop `fullscreen` (utiliser `Sheet` à la place)
- Nouveau composant : **Toggle**

## Policy

- Patch (x.y.**Z**) : bug fix, pas de changement d'API
- Minor (x.**Y**.0) : ajout rétrocompatible
- Major (**X**.0.0) : breaking, migration obligatoire

Breaking changes → annoncés 2 semaines avant, PR de migration fournie.
