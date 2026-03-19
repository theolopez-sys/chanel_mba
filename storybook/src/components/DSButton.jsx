export const DSButton = ({ label, variant = 'primary', icon, fullWidth, onClick }) => (
  <button
    className={[
      'ds-btn',
      `ds-btn--${variant}`,
      fullWidth ? 'ds-btn--full' : '',
    ].join(' ')}
    onClick={onClick}
  >
    {icon && <span>{icon}</span>}
    {label}
  </button>
);
