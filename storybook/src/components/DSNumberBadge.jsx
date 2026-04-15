/**
 * DSNumberBadge — numeric count badge
 * Source: docs/components/DSNumberBadge.md
 */
export const DSNumberBadge = ({
  value = 1,
  max = 99,
  variant = 'primary',
}) => {
  const display = value > max ? `${max}+` : String(value);
  if (value <= 0) return null;

  return (
    <span className={`ds-number-badge ds-number-badge--${variant}`}>
      {display}
    </span>
  );
};
