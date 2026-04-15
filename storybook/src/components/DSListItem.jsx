/**
 * DSListItem — flexible list row
 * Source: docs/components/DSListItem.md
 */
export const DSListItem = ({
  title = 'Title',
  subtitle,
  level = 'primary',
  state = 'default',
  showSubtitle = false,
  showRightElement = false,
  showLeftElement = false,
  showDivider = false,
  leftContent,    // custom left element (avatar, image…)
  rightContent,   // custom right element override
  badge,          // { text, variant }
  onClick,
}) => {
  const isDisabled = state === 'disabled';
  const isSelected = state === 'selected';
  const isSecondary = level === 'secondary';

  return (
    <div
      className={[
        'ds-list-item',
        isSelected  ? 'ds-list-item--selected'  : '',
        isDisabled  ? 'ds-list-item--disabled'  : '',
        isSecondary ? 'ds-list-item--secondary' : '',
      ].join(' ')}
      onClick={!isDisabled ? onClick : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !isDisabled ? 0 : undefined}
    >
      {/* Left element */}
      {showLeftElement && leftContent && (
        <div className="ds-list-item__left">{leftContent}</div>
      )}

      {/* Text block */}
      <div className="ds-list-item__text">
        <span className="ds-list-item__title">{title}</span>
        {(showSubtitle && subtitle) && (
          <span className="ds-list-item__subtitle">{subtitle}</span>
        )}
      </div>

      {/* Badge */}
      {badge && (
        <span className={`ds-badge ds-badge--${badge.variant ?? 'dark'}`}>
          {badge.text}
        </span>
      )}

      {/* Right element */}
      {showRightElement && (
        <div className="ds-list-item__right">
          {rightContent ?? <span className="ds-list-item__chevron">›</span>}
        </div>
      )}

      {/* Divider */}
      {showDivider && <div className="ds-list-item__divider" />}
    </div>
  );
};
