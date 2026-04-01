import { colors, radius, spacing } from '../tokens';

export type FABSize = 'small' | 'medium' | 'large';
export type FABVariant = 'primary' | 'secondary';

export interface DSFloatingActionButtonProps {
  icon: string;
  label?: string;
  size?: FABSize;
  variant?: FABVariant;
  disabled?: boolean;
  onClick?: () => void;
}

const sizeMap: Record<FABSize, { padding: string; iconSize: number; fontSize: number }> = {
  small: { padding: spacing.sm, iconSize: 20, fontSize: 14 },
  medium: { padding: spacing.md, iconSize: 24, fontSize: 18 },
  large: { padding: spacing.base, iconSize: 28, fontSize: 22 },
};

export const DSFloatingActionButton = ({
  icon,
  label,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick,
}: DSFloatingActionButtonProps) => {
  const { padding, iconSize, fontSize } = sizeMap[size];

  const isPrimary = variant === 'primary';
  const bg = isPrimary ? colors.black : colors.white;
  const color = isPrimary ? colors.white : colors.black;
  const border = isPrimary ? 'none' : `1px solid ${colors.border.light}`;

  return (
    <button
      aria-label={label ?? icon}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: label ? spacing.sm : '0',
        padding: label ? `${padding} ${spacing.xl}` : padding,
        background: bg,
        color,
        border,
        borderRadius: radius.pill,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontSize,
        fontWeight: 500,
        transition: 'opacity 0.15s, box-shadow 0.15s',
      }}
    >
      <span style={{ fontSize: iconSize, lineHeight: 1 }}>{icon}</span>
      {label && <span style={{ fontSize: 14, letterSpacing: '0.04em' }}>{label}</span>}
    </button>
  );
};
