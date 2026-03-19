import { DSButton } from './DSButton';

export const DSHeroCard = ({ label, title, subtitle, ctaLabel = 'Voir tout', onCta }) => (
  <div className="ds-hero-card">
    <div className="ds-hero-card__pattern" />
    <div className="ds-hero-card__body">
      <span className="ds-hero-card__label">{label}</span>
      <div className="ds-hero-card__title">{title}</div>
      <div className="ds-hero-card__footer">
        <span className="ds-hero-card__meta">{subtitle}</span>
        {onCta && <DSButton label={ctaLabel} variant="primary" onClick={onCta} />}
      </div>
    </div>
  </div>
);

export const DSStatCard = ({ icon, value, label }) => (
  <div className="ds-stat-card">
    <div className="ds-stat-card__icon">{icon}</div>
    <div className="ds-stat-card__value">{value}</div>
    <div className="ds-stat-card__label">{label}</div>
  </div>
);

export const DSActionCard = ({ icon, title, subtitle, dark = false, onClick }) => (
  <button
    className={['ds-action-card', dark ? 'ds-action-card--dark' : ''].join(' ')}
    onClick={onClick}
  >
    <div className="ds-action-card__icon">{icon}</div>
    <div>
      <div className="ds-action-card__title">{title}</div>
      <div className="ds-action-card__sub">{subtitle}</div>
    </div>
  </button>
);
