export const DSHeader = ({ greeting, name, notificationCount = 0, onSearch, onNotification }) => (
  <div className="ds-header">
    <div>
      <span className="ds-header__greeting-sub">{greeting}</span>
      <div className="ds-header__name">{name}</div>
    </div>
    <div className="ds-header__actions">
      {onSearch && (
        <button className="ds-icon-btn" onClick={onSearch} aria-label="Rechercher">
          🔍
        </button>
      )}
      {onNotification && (
        <button className="ds-icon-btn" onClick={onNotification} aria-label="Notifications">
          🔔
          {notificationCount > 0 && <span className="ds-notif-dot" />}
        </button>
      )}
    </div>
  </div>
);
