export const DSBadge = ({ text, variant = 'dark' }) => (
  <span className={`ds-badge ds-badge--${variant}`}>{text}</span>
);
