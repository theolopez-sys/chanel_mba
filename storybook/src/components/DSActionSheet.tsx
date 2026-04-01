import { colors, radius, spacing } from '../tokens';

export interface ActionSheetOption {
  label: string;
  icon?: string;
  destructive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DSActionSheetProps {
  title?: string;
  description?: string;
  options: ActionSheetOption[];
  cancelLabel?: string;
  onCancel?: () => void;
  open?: boolean;
}

export const DSActionSheet = ({
  title,
  description,
  options,
  cancelLabel = 'Annuler',
  onCancel,
  open = true,
}: DSActionSheetProps) => {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onCancel}
        style={{
          position: 'fixed',
          inset: 0,
          background: colors.overlay.color,
          zIndex: 100,
        }}
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-modal
        aria-label={title ?? 'Options'}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 101,
          background: colors.white,
          borderTopLeftRadius: radius.xl,
          borderTopRightRadius: radius.xl,
          paddingBottom: spacing['3xl'],
          overflow: 'hidden',
        }}
      >
        {/* Handle */}
        <div
          style={{
            width: 36,
            height: 4,
            borderRadius: radius.pill,
            background: colors.neutral.low,
            margin: `${spacing.md} auto ${spacing.base}`,
          }}
        />

        {/* Header */}
        {(title || description) && (
          <div
            style={{
              padding: `0 ${spacing.xl} ${spacing.base}`,
              borderBottom: `1px solid ${colors.border.light}`,
              marginBottom: spacing.sm,
              textAlign: 'center',
            }}
          >
            {title && (
              <div
                style={{ fontSize: 16, fontWeight: 700, color: colors.text.heading, marginBottom: spacing.xs }}
              >
                {title}
              </div>
            )}
            {description && (
              <div style={{ fontSize: 13, color: colors.text.caption }}>{description}</div>
            )}
          </div>
        )}

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {options.map((opt, i) => (
            <button
              key={i}
              disabled={opt.disabled}
              onClick={() => {
                if (!opt.disabled) opt.onClick?.();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing.md,
                padding: `${spacing.base} ${spacing.xl}`,
                background: 'none',
                border: 'none',
                borderBottom: i < options.length - 1 ? `1px solid ${colors.border.light}` : 'none',
                cursor: opt.disabled ? 'not-allowed' : 'pointer',
                opacity: opt.disabled ? 0.4 : 1,
                textAlign: 'left',
              }}
            >
              {opt.icon && (
                <span style={{ fontSize: 20, width: 24, textAlign: 'center', flexShrink: 0 }}>
                  {opt.icon}
                </span>
              )}
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: opt.destructive ? colors.error.low : colors.text.heading,
                }}
              >
                {opt.label}
              </span>
            </button>
          ))}
        </div>

        {/* Cancel */}
        <div style={{ margin: `${spacing.sm} ${spacing.base} 0` }}>
          <button
            onClick={onCancel}
            style={{
              width: '100%',
              padding: spacing.base,
              background: colors.neutral.lower,
              border: 'none',
              borderRadius: radius.lg,
              cursor: 'pointer',
              fontSize: 16,
              fontWeight: 600,
              color: colors.text.heading,
            }}
          >
            {cancelLabel}
          </button>
        </div>
      </div>
    </>
  );
};
