import React from 'react';
import { colors, spacing, radius } from '../tokens';

// MARK: - Types

export type DialogType = 'alert' | 'confirmation' | 'custom';

export interface DSDialogProps {
  title: string;
  description?: string;
  type?: DialogType;
  primaryLabel: string;
  secondaryLabel?: string;
  tertiaryLabel?: string;
  showCloseIcon?: boolean;
  image?: React.ReactNode;
  open?: boolean;
  onPrimary?: () => void;
  onSecondary?: () => void;
  onTertiary?: () => void;
  onClose?: () => void;
}

// MARK: - Tokens (dialog/*)

const dialogTokens = {
  background: { surface: colors.white },
  borderTop: { default: colors.black },
  text: {
    title: colors.text.heading,
    description: colors.text.body,
  },
  icon: { default: colors.black },
} as const;

const overlayStronger = 'rgba(32,32,32,0.8)'; // transparency/overlay/stronger (#202020cc)

// MARK: - Component

export const DSDialog = ({
  title,
  description,
  type = 'confirmation',
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
  showCloseIcon = false,
  image,
  open = true,
  onPrimary,
  onSecondary,
  onTertiary,
  onClose,
}: DSDialogProps) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          background: overlayStronger,
          zIndex: 200,
        }}
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal
        aria-labelledby="ds-dialog-title"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 201,
          width: 345,
          background: dialogTokens.background.surface,
          borderTop: `2px solid ${dialogTokens.borderTop.default}`,
          padding: spacing.base,
          display: 'flex',
          flexDirection: 'column',
          gap: spacing['2xl'],
          alignItems: 'center',
        }}
      >
        {/* Header */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.base,
          }}
        >
          {/* Title row */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingTop: spacing.sm,
              paddingBottom: spacing.sm,
            }}
          >
            <p
              id="ds-dialog-title"
              style={{
                flex: 1,
                margin: 0,
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "'ABChanel Corpo 2022', sans-serif",
                color: dialogTokens.text.title,
                textAlign: 'center',
                letterSpacing: '0.1px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </p>

            {showCloseIcon && (
              <button
                onClick={onClose}
                aria-label="Fermer"
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  color: dialogTokens.icon.default,
                  fontSize: 16,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Description */}
          {description && (
            <p
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "'Helvetica', sans-serif",
                color: dialogTokens.text.description,
                textAlign: 'center',
                letterSpacing: '0.1px',
              }}
            >
              {description}
            </p>
          )}

          {/* Custom image/content (type custom) */}
          {image && (
            <div style={{ width: '100%' }}>
              {image}
            </div>
          )}
        </div>

        {/* Actions */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.base,
          }}
        >
          {/* Primary button */}
          <button
            onClick={onPrimary}
            style={{
              width: '100%',
              minHeight: 40,
              padding: `${spacing.sm} ${spacing.base}`,
              background: colors.black,
              border: 'none',
              cursor: 'pointer',
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "'ABChanel Corpo 2022', sans-serif",
              color: colors.neutral.lower,
              letterSpacing: '0.1px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {primaryLabel}
          </button>

          {/* Secondary button */}
          {secondaryLabel && (
            <button
              onClick={onSecondary}
              style={{
                width: '100%',
                minHeight: 40,
                padding: `${spacing.sm} ${spacing.base}`,
                background: 'transparent',
                border: `1px solid ${colors.black}`,
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "'ABChanel Corpo 2022', sans-serif",
                color: colors.text.heading,
                letterSpacing: '0.1px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {secondaryLabel}
            </button>
          )}

          {/* Tertiary button */}
          {tertiaryLabel && (
            <button
              onClick={onTertiary}
              style={{
                width: '100%',
                minHeight: 40,
                padding: `${spacing.sm} ${spacing.base}`,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "'ABChanel Corpo 2022', sans-serif",
                color: colors.text.heading,
                letterSpacing: '0.1px',
                textDecoration: 'underline',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {tertiaryLabel}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
