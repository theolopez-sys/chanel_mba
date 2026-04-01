import { colors, radius, spacing } from '../tokens';

export type AlertVariant = 'error' | 'warning' | 'success' | 'neutral';

export interface DSAlertProps {
  variant?: AlertVariant;
  title?: string;
  message: string;
  onClose?: () => void;
}

const variantStyles: Record<AlertVariant, { background: string; border: string; iconColor: string; icon: string }> = {
  error: {
    background: colors.error.lowest,
    border: colors.error.low,
    iconColor: colors.error.low,
    icon: '✕',
  },
  warning: {
    background: '#FFF8E7',
    border: colors.warning.low,
    iconColor: colors.warning.high,
    icon: '!',
  },
  success: {
    background: '#EAF5F0',
    border: colors.success.low,
    iconColor: colors.success.low,
    icon: '✓',
  },
  neutral: {
    background: colors.neutral.lower,
    border: colors.neutral.low,
    iconColor: colors.neutral.high,
    icon: 'i',
  },
};

export const DSAlert = ({ variant = 'neutral', title, message, onClose }: DSAlertProps) => {
  const s = variantStyles[variant];

  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: spacing.md,
        padding: spacing.base,
        background: s.background,
        border: `1px solid ${s.border}`,
        borderRadius: radius.lg,
        position: 'relative',
      }}
    >
      {/* Icon */}
      <div
        style={{
          flexShrink: 0,
          width: 20,
          height: 20,
          borderRadius: radius.pill,
          background: s.border,
          color: colors.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          fontWeight: 700,
          marginTop: 1,
        }}
      >
        {s.icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        {title && (
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: colors.text.heading,
              marginBottom: spacing.xs,
            }}
          >
            {title}
          </div>
        )}
        <div style={{ fontSize: 13, color: colors.text.body, lineHeight: 1.5 }}>{message}</div>
      </div>

      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            flexShrink: 0,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: colors.neutral.high,
            fontSize: 16,
            padding: 0,
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};
