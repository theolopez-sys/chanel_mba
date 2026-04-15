/**
 * DSChips — filter / input / suggestion chips
 * Source: docs/components/DSChips.md
 */
export const DSChips = ({
  label,
  type = 'custom',
  active = false,
  disabled = false,
  count,
  leadingIcon,
  trailingIcon,
  onClick,
  onDismiss,
}) => {
  const handleClick = () => {
    if (disabled) return;
    if (type === 'input' && onDismiss) onDismiss();
    else if (onClick) onClick();
  };

  return (
    <button
      className={[
        'ds-chips',
        active    ? 'ds-chips--active'   : '',
        disabled  ? 'ds-chips--disabled' : '',
      ].join(' ')}
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={active}
    >
      {leadingIcon && <span className="ds-chips__icon ds-chips__icon--lead">{leadingIcon}</span>}

      <span className="ds-chips__label">{label}</span>

      {count != null && (
        <span className="ds-chips__count">+{count}</span>
      )}

      {type === 'input' && (
        <span className="ds-chips__icon ds-chips__icon--trail">×</span>
      )}

      {trailingIcon && type !== 'input' && (
        <span className="ds-chips__icon ds-chips__icon--trail">{trailingIcon}</span>
      )}
    </button>
  );
};
