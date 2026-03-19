import { DSBadge } from './DSBadge';

export const DSActivityItem = ({ initials, name, description, time, badge }) => (
  <div className="ds-activity-item">
    <div className="ds-avatar">{initials}</div>
    <div className="ds-activity-item__info">
      <div className="ds-activity-item__name">{name}</div>
      <div className="ds-activity-item__desc">{description}</div>
    </div>
    <div className="ds-activity-item__meta">
      <span className="ds-activity-item__time">{time}</span>
      {badge && <DSBadge text={badge.text} variant={badge.variant} />}
    </div>
  </div>
);

export const DSActivityList = ({ items = [] }) => (
  <div className="ds-activity-list">
    {items.map((item, i) => (
      <DSActivityItem key={i} {...item} />
    ))}
  </div>
);
