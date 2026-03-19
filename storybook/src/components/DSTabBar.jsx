import { useState } from 'react';

const TABS = [
  { icon: '🏠', label: 'Accueil' },
  { icon: '⊞',  label: 'Projets' },
  { icon: '👤', label: 'Profil'  },
  { icon: '⚙️', label: 'Réglages'},
];

export const DSTabBar = ({ defaultActive = 0 }) => {
  const [active, setActive] = useState(defaultActive);
  return (
    <div className="ds-tabbar">
      {TABS.map((tab, i) => (
        <button
          key={tab.label}
          className={['ds-tabbar__item', active === i ? 'ds-tabbar__item--active' : ''].join(' ')}
          onClick={() => setActive(i)}
        >
          <span className="ds-tabbar__icon">{tab.icon}</span>
          <span className="ds-tabbar__label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
