# DSTooltip

> **Figma source**
> - [Variables — node 8985:2100](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8985-2100) (`get_variable_defs`)
> - [Guidelines — node 8985:2140](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8985-2140) (`get_design_context`)

---

## Overview

Les tooltips fournissent une information contextuelle courte sur un élément d'interface. Ils apparaissent au survol ou au focus et disparaissent à la sortie. Leur largeur maximale est **240px**.

---

## Anatomy

```
┌──────────────────────────────────────┐
│  Title (optionnel)                   │
│  Body — texte descriptif             │
│                              Action  │  ← bouton optionnel
└──────────────────────────────────────┘
         ▲
    Cursor / Arrow (optionnel)
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Container** | Fond `tooltips/background/default`, padding 16px, max-width 240px |
| 2 | **Title** *(optionnel)* | Helvetica Bold 14px, 1 ligne tronquée |
| 3 | **Body** | Helvetica Regular 14px, multilignes |
| 4 | **Action** *(optionnel)* | Bouton texte souligné, ABChanel Corpo 2022, aligné à droite |
| 5 | **Cursor / Arrow** *(optionnel)* | Flèche positionnelle — 6 positions disponibles |

---

## Props

```typescript
type TooltipsProps = {
  className?:   string;
  arrow?:       "off" | "top" | "bottom" | "right" | "left" | "top-right";
  title?:       string;        // défaut : "Label"
  body?:        string;        // défaut : "Lorem ipsum..."
  showTitle?:   boolean;       // défaut : true
  showAction?:  boolean;       // défaut : true
};
```

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `arrow` | `"off" \| "top" \| "bottom" \| "right" \| "left" \| "top-right"` | `"off"` | Position de la flèche directionnelle |
| `title` | `string` | `"Label"` | Titre en gras (optionnel via `showTitle`) |
| `body` | `string` | — | Texte descriptif principal |
| `showTitle` | `boolean` | `true` | Affiche/masque le titre |
| `showAction` | `boolean` | `true` | Affiche/masque le bouton d'action |

---

## Arrow Positions

| Valeur | Description |
|--------|-------------|
| `off` | Pas de flèche — tooltip simple |
| `top` | Flèche pointant vers le haut |
| `bottom` | Flèche pointant vers le bas |
| `left` | Flèche pointant vers la gauche |
| `right` | Flèche pointant vers la droite |
| `top-right` | Flèche en coin supérieur droit |

---

## Design Tokens

### Couleurs Tooltip

| Token | Valeur | Usage |
|-------|--------|-------|
| `tooltips/background/default` | `#ededed` (light) / `#333` (dark) | Fond du container |
| `tooltips/text/default` | `#333333` | Couleur du texte |

### Typographie

| Token | Valeur | Usage |
|-------|--------|-------|
| `font/family/text` | `Helvetica` | Title & Body |
| `font/family/title` | `ABChanel Corpo 2022` | Bouton Action |
| `font/size/sm` | `14px` | Taille de tous les textes |
| `font/weight/bold` | `bold / 700` | Title |
| `font/weight/regular` | `regular / 400` | Body |
| `body/p2/important` | `Helvetica Bold 14px, lh 100%, ls 0.1px` | Titre tooltip |
| `body/p2/paragraph` | `Helvetica Regular 14px, lh 100%, ls 0.1px` | Corps tooltip |

### Spacing

| Token | Valeur | Usage |
|-------|--------|-------|
| `size/gap/xs` | `8px` | Gap interne (entre title et body, entre éléments) |
| `size/gap/md` | `16px` | Padding du container |
| `size/gap/3xs` | `4px` | Padding vertical du bouton action |
| `size/radius/default` | `0` | Border-radius (carré) |

---

## Interaction States

| État | Description |
|------|-------------|
| **Visible** | Affiché au survol / focus de l'élément cible |
| **Hidden** | Masqué par défaut — déclenché programmatiquement |

> Les tooltips ne doivent **pas** bloquer l'interaction. Ils se positionnent en `absolute` ou `fixed` au-dessus du contenu.

---

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|-------|---------|
| Garder le texte court et informatif | Dupliquer le label de l'élément cible |
| Utiliser `showTitle` pour les tooltips riches | Nicher des tooltips dans d'autres tooltips |
| Choisir l'`arrow` cohérent avec la position réelle | Afficher plusieurs tooltips simultanément |
| Limiter la largeur à **240px** | Utiliser pour des messages d'erreur (→ préférer un `toast`) |

---

## Accessibilité

- Utiliser `role="tooltip"` et `aria-describedby` sur l'élément déclencheur
- S'assurer que le tooltip est accessible au clavier (focus)
- Ne pas mettre d'interactions essentielles uniquement dans un tooltip

---

## Exemples d'utilisation

### Tooltip simple (sans flèche)

```tsx
<Tooltips
  arrow="off"
  title="Titre"
  body="Information contextuelle courte."
  showAction={false}
/>
```

### Tooltip avec flèche en bas

```tsx
<Tooltips
  arrow="bottom"
  title="Conseil"
  body="Appuyez longuement pour plus d'options."
  showAction={true}
/>
```

### Tooltip avec action

```tsx
<Tooltips
  arrow="top"
  title="Nouveau"
  body="Cette fonctionnalité vient d'être ajoutée."
  showTitle={true}
  showAction={true}
/>
```

---

## Implémentation

| Plateforme | Fichier |
|------------|---------|
| React / Web | `storybook/src/components/DSTooltip.tsx` |
| Storybook stories | `storybook/src/stories/Tooltip.stories.tsx` |
| iOS / SwiftUI | `InternalApp/Components/DSTooltip.swift` |

---

## Figma Source — Variable Definitions

> Extrait via `get_variable_defs` · node [8985:2100](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8985-2100)

```json
{
  "colors/white":                 "#ffffff",
  "colors/text/disabled":        "#4d4d4d",
  "colors/border/medium":        "#939292",
  "colors/surface/fake white":   "#1d1d1d",
  "colors/neutral/white":        "#ffffff",
  "colors/black":                "#000000",
  "colors/surface/white":        "#000000",

  "tooltips/background/default": "#ededed",
  "tooltips/text/default":       "#333333",

  "font/family/title":           "ABChanel Corpo 2022",
  "font/family/text":            "Helvetica",
  "font/weight/bold":            "bold",
  "font/weight/regular":         "regular",
  "font/size/md":                "16",
  "font/size/sm":                "14",

  "heading/h4":        "Font(family: font/family/title, style: font/weight/bold, size: font/size/md, weight: 600, lineHeight: 100, letterSpacing: 0.1)",
  "body/p2/important": "Font(family: font/family/text,  style: font/weight/bold,    size: font/size/sm, weight: 700, lineHeight: 100, letterSpacing: 0.1)",
  "body/p2/paragraph": "Font(family: font/family/text,  style: font/weight/regular, size: font/size/sm, weight: 400, lineHeight: 100, letterSpacing: 0.1)",
  "button/small":      "Font(family: font/family/title, style: font/weight/bold,    size: font/size/sm, weight: 600, lineHeight: 100, letterSpacing: 0.1)",

  "size/gap/3xs":      "4",
  "size/gap/xs":       "8",
  "size/gap/md":       "16",
  "size/gap/5xl":      "64",
  "size/radius/default": "0",
  "size/size-200":     "16"
}
```

---

## Figma Source — Design Context

> Extrait via `get_design_context` · node [8985:2140](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8985-2140) (Tooltips - Guidelines)

### Assets Figma

```ts
const imgVector       = "https://www.figma.com/api/mcp/asset/4787c149-bde7-4794-ad80-ed9dbf1b9a14"; // circle-information-outline icon
const imgCursor       = "https://www.figma.com/api/mcp/asset/663239c2-f6bd-4712-9f7f-a6c3c91c6bd0"; // arrow bottom
const imgCursor1      = "https://www.figma.com/api/mcp/asset/6405f1df-40bd-4a47-ab12-7a00490fe2ed"; // arrow left
const imgCursor2      = "https://www.figma.com/api/mcp/asset/c96c29a7-c3df-4797-9370-35412f2f1b93"; // arrow variant
const imgCursor3      = "https://www.figma.com/api/mcp/asset/962b816b-4115-401a-a386-f82c4e5b352d"; // arrow variant
const imgCursor4      = "https://www.figma.com/api/mcp/asset/2251e40c-5784-4858-a262-5ed3c42f221b"; // arrow variant
const imgCursor5      = "https://www.figma.com/api/mcp/asset/12cbbef5-e807-44ac-bc95-29d22c84e86d"; // arrow variant
const imgAnimation    = "https://www.figma.com/api/mcp/asset/ae44de64-2c4b-4681-99d9-5052027ba7a1"; // ripple animation
const imgVector1      = "https://www.figma.com/api/mcp/asset/bce33f53-760c-47f6-b0db-fb2623b59f51";
const imgVector2      = "https://www.figma.com/api/mcp/asset/fe2a583b-7780-45cc-9b05-075b46a0adc4";
const imgVector3      = "https://www.figma.com/api/mcp/asset/f2532b2c-f38f-47d5-b835-82c7404501da";
const imgVector4      = "https://www.figma.com/api/mcp/asset/5f5f8882-fbf3-4d82-8e42-c1829a3096e3";
const imgVector5      = "https://www.figma.com/api/mcp/asset/38a56285-a1bc-4393-9d4e-3a65f1fa1c8d";
const imgVector6      = "https://www.figma.com/api/mcp/asset/5c751089-d21e-4a57-9868-d8e610396689";
const imgVector7      = "https://www.figma.com/api/mcp/asset/ac2cfab0-ed70-4269-a7d4-c42ca7537e6d";
const imgVector8      = "https://www.figma.com/api/mcp/asset/c3e89984-d01a-483a-8d63-14afa57b04de";
const imgVector9      = "https://www.figma.com/api/mcp/asset/17dbedee-096c-40f8-94c2-1882e7bc949f";
const imgVector10     = "https://www.figma.com/api/mcp/asset/f4ef852c-7580-4e62-b66d-9379e63c0e06";
const imgVector11     = "https://www.figma.com/api/mcp/asset/cb48d1fa-9bb2-4a7d-9b15-90f123668944";
const imgVector12     = "https://www.figma.com/api/mcp/asset/be4cf922-9729-4e72-a24e-38725cdef963";
const imgVector13     = "https://www.figma.com/api/mcp/asset/e8b31831-c4af-422b-9956-cc6950ff34a3";
const imgImage        = "https://www.figma.com/api/mcp/asset/f6cfec56-31e5-4a7b-8dfc-1100e40f7762";
const imgImage1       = "https://www.figma.com/api/mcp/asset/91ac8326-1fad-4a0b-93ff-8432de839979";
const imgImage2       = "https://www.figma.com/api/mcp/asset/f1d52a5d-ad8d-446c-8a4a-251c322baf18";
const imgImage6       = "https://www.figma.com/api/mcp/asset/35fbcf3e-283b-4a7b-b317-f315d91363aa";
const imgImage22      = "https://www.figma.com/api/mcp/asset/df0675e1-c213-4785-8449-b291222a6315";
const imgEllipse9     = "https://www.figma.com/api/mcp/asset/a8fbc1f5-7cf4-4274-b5c8-e1a13d27e520";
const imgSongThumbnail = "https://www.figma.com/api/mcp/asset/7a055e6e-8ca8-407d-9ade-b08a354ad62f";
```

### Composant React — `Tooltips` (extrait Figma)

```tsx
type TooltipsProps = {
  className?:  string;
  arrow?:      "off" | "top" | "bottom" | "right" | "left" | "top-right";
  body?:       string;
  showAction?: boolean;
  showTitle?:  boolean;
  title?:      string;
};

function Tooltips({
  className,
  arrow = "off",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  showAction = true,
  showTitle = true,
  title = "Label",
}: TooltipsProps) {
  const isBottom = arrow === "bottom";
  const isLeft   = arrow === "left";
  const isOff    = arrow === "off";

  return (
    <div
      className={className || `
        content-stretch flex max-w-[240px] relative w-[240px]
        ${isLeft   ? "items-center"
        : isBottom ? "flex-col items-center"
        : `bg-[var(--tooltips/background/default,#333)]
           flex-col gap-[var(--size/gap/xs,8px)]
           items-start p-[var(--size/gap/md,16px)]`}
      `}
    >
      {/* ── No arrow (isOff) ───────────────────────────── */}
      {isOff && (
        <div
          className="
            content-stretch flex flex-col gap-[var(--size/gap/xs,8px)]
            items-start justify-center leading-[0] relative shrink-0
            text-[color:var(--tooltips/text/default,#ededed)]
            text-[length:var(--font/size/sm,14px)] tracking-[0.1px] w-full
          "
          data-name="Label"
        >
          {/* Title */}
          <div className="
            flex flex-col
            font-[family-name:var(--font/family/text,'Helvetica:bold',sans-serif)]
            font-[var(--font/weight/bold,normal)]
            justify-center overflow-hidden relative shrink-0 text-ellipsis w-full
          ">
            <p className="leading-[normal] text-[14px]">{title}</p>
          </div>
          {/* Body */}
          <div className="
            flex flex-col
            font-[family-name:var(--font/family/text,'Helvetica:regular',sans-serif)]
            font-[var(--font/weight/regular,normal)]
            justify-center relative shrink-0 w-full
          ">
            <p className="leading-[normal]">{body}</p>
          </div>
        </div>
      )}

      {/* ── Action button ──────────────────────────────── */}
      {isOff && showAction && (
        <button
          className="
            content-stretch cursor-pointer flex gap-[var(--size/gap/xs,8px)]
            items-center justify-end min-h-[32px] overflow-clip
            py-[var(--size/gap/3xs,4px)] relative shrink-0 w-full
          "
          data-name="button"
        >
          <div className="
            flex flex-col
            font-[family-name:var(--font/family/title,'ABChanel_Corpo_2022:bold',sans-serif)]
            font-[var(--font/weight/bold,normal)]
            justify-center leading-[0] relative shrink-0
            text-[color:var(--tooltips/text/default,#ededed)]
            text-right tracking-[0.1px] whitespace-nowrap
          ">
            <p className="decoration-solid leading-[normal] text-[14px] underline">
              Action
            </p>
          </div>
        </button>
      )}

      {/* ── Arrow bottom ───────────────────────────────── */}
      {isBottom && (
        <>
          <div
            className="
              bg-[var(--tooltips/background/default,#333)]
              content-stretch flex flex-col gap-[8px]
              items-start p-[var(--size/gap/md,16px)]
              relative shrink-0 w-[240px]
            "
            data-name="Content"
          >
            {showTitle && (
              <div className="
                flex flex-col
                font-[family-name:var(--font/family/text,'Helvetica:bold',sans-serif)]
                font-[var(--font/weight/bold,normal)]
                justify-center leading-[0] overflow-hidden relative shrink-0
                text-[color:var(--tooltips/text/default,#ededed)]
                text-[length:var(--font/size/sm,14px)] text-ellipsis tracking-[0.1px] w-full
              ">
                <p className="leading-[normal] text-[14px]">{title}</p>
              </div>
            )}
            <div className="
              flex flex-col
              font-[family-name:var(--font/family/text,'Helvetica:regular',sans-serif)]
              font-[var(--font/weight/regular,normal)]
              justify-center leading-[0] relative shrink-0
              text-[color:var(--tooltips/text/default,#ededed)]
              text-[length:var(--font/size/sm,14px)] tracking-[0.1px] w-full
            ">
              <p className="leading-[normal]">{body}</p>
            </div>
            {showAction && (
              <button className="
                content-stretch cursor-pointer flex gap-[var(--size/gap/xs,8px)]
                items-center justify-end min-h-[32px] overflow-clip
                py-[var(--size/gap/3xs,4px)] relative shrink-0 w-full
              ">
                <p className="decoration-solid leading-[normal] text-[14px] underline">
                  Action
                </p>
              </button>
            )}
          </div>
          {/* Arrow cursor image */}
          <div className="relative shrink-0 w-[14px] h-[12.091px]" data-name="Cursor">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCursor} />
          </div>
        </>
      )}

      {/* ── Arrow left ─────────────────────────────────── */}
      {isLeft && (
        <>
          <div className="relative shrink-0 w-[14px] h-[16.211px]" data-name="Cursor">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCursor1} />
          </div>
          <div
            className="
              bg-[var(--tooltips/background/default,#333)]
              content-stretch flex flex-[1_0_0] flex-col gap-[8px]
              items-end min-w-px p-[var(--size/gap/md,16px)] relative
            "
            data-name="Content"
          >
            {showTitle && (
              <div className="
                flex flex-col
                font-[family-name:var(--font/family/text,'Helvetica:bold',sans-serif)]
                font-[var(--font/weight/bold,normal)]
                justify-center leading-[0] overflow-hidden relative shrink-0
                text-[color:var(--tooltips/text/default,#ededed)]
                text-[length:var(--font/size/sm,14px)] text-ellipsis tracking-[0.1px] w-full
              ">
                <p className="leading-[normal] text-[14px]">{title}</p>
              </div>
            )}
            <div className="
              flex flex-col
              font-[family-name:var(--font/family/text,'Helvetica:regular',sans-serif)]
              font-[var(--font/weight/regular,normal)]
              justify-center leading-[0] relative shrink-0
              text-[color:var(--tooltips/text/default,#ededed)]
              text-[length:var(--font/size/sm,14px)] tracking-[0.1px] w-full
            ">
              <p className="leading-[normal]">{body}</p>
            </div>
            {showAction && (
              <button className="
                content-stretch cursor-pointer flex gap-[var(--size/gap/xs,8px)]
                items-center justify-end min-h-[32px] overflow-clip
                py-[var(--size/gap/3xs,4px)] relative shrink-0 w-full
              ">
                <p className="decoration-solid leading-[normal] text-[14px] underline">
                  Action
                </p>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
```
