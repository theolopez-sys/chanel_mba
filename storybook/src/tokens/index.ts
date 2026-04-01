/**
 * Design Tokens — Internal European Design System
 * Source: Figma · Internal European Design System (R1w2martdIEdeXEad1g4Yo)
 * Collections: Foundations · Components
 */

// ---------------------------------------------------------------------------
// Foundations — Color tokens
// ---------------------------------------------------------------------------

export const colors = {
  // Core
  black: '#000000',
  white: '#FFFFFF',
  accent: '#B8964E',

  // Text  (Foundations collection)
  text: {
    heading: '#000000',   // colors/text/heading
    body: '#333333',      // colors/text/body
    caption: '#888888',   // colors/text/caption
    inverted: '#FFFFFF',
  },

  // Border
  border: {
    light: '#D4D4D4',     // colors/border/light
  },

  // Neutral
  neutral: {
    lower: '#EDEDED',
    low: '#D4D4D4',       // colors/neutral/low
    high: '#A0A0A0',      // colors/neutral/high
  },

  // Semantic states
  error: {
    lowest: '#FDECEA',    // colors/error/lowest
    lower: '#F9C0BB',     // colors/error/lower
    low: '#C1121F',       // colors/error/low
    high: '#7D0A10',      // colors/error/high
  },
  warning: {
    low: '#E9C46A',       // colors/warning/low
    high: '#9A6E00',      // colors/warning/high
  },
  success: {
    low: '#2D6A4F',       // colors/success/low
  },
  overlay: {
    color: 'rgba(0,0,0,0.48)', // overlay/color/color
  },
} as const;

// ---------------------------------------------------------------------------
// Components — Button tokens
// ---------------------------------------------------------------------------

export const buttonTokens = {
  background: {
    primary: { default: colors.black, pressed: '#1A1A1A', disabled: colors.neutral.low },
    secondary: { default: 'transparent' },
    tertiary: { default: 'transparent' },
  },
  text: {
    primary: { default: colors.white, disabled: colors.neutral.high },   // button/text/primary/*
    secondary: { default: colors.black },                                  // button/text/secondary/default
    tertiary: { default: colors.black, pressed: '#1A1A1A', disabled: colors.neutral.high }, // button/text/tertiary/*
  },
  icon: {
    primary: { default: colors.white, disabled: colors.neutral.high },    // button/icon/primary/*
    secondary: { default: colors.black },                                  // button/icon/secondary/default
    tertiary: { default: colors.black, pressed: '#1A1A1A', disabled: colors.neutral.high }, // button/icon/tertiary/*
  },
  border: {
    secondary: { default: colors.black },  // button/border/secondary/default
  },
} as const;

// ---------------------------------------------------------------------------
// Components — Input tokens
// ---------------------------------------------------------------------------

export const inputTokens = {
  border: {
    default: colors.neutral.low,    // input/border/default
    active: colors.black,           // input/border/active
    error: colors.error.low,        // input/border/error
    disabled: colors.neutral.lower, // input/border/disabled
  },
  icon: {
    default: colors.neutral.high,   // input/icon/default
    active: colors.black,           // input/icon/active
    error: colors.error.low,        // input/icon/error
    disabled: colors.neutral.low,   // input/icon/disabled
    validate: colors.success.low,   // input/icon/validate
  },
  text: {
    input: {
      default: colors.text.body,    // input/text/input/default
      active: colors.text.heading,  // input/text/input/active
      disabled: colors.neutral.high, // input/text/input/disabled
    },
    label: {
      default: colors.text.caption, // input/text/label/default
    },
    helper: {
      error: colors.error.low,      // input/text/helper/error
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Spacing scale
// ---------------------------------------------------------------------------

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  base: '16px',
  lg: '20px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
} as const;

// ---------------------------------------------------------------------------
// Border radius
// ---------------------------------------------------------------------------

export const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  pill: '9999px',
} as const;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

export const typography = {
  button: {
    small: { fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const },
    medium: { fontSize: '14px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const },
  },
} as const;
