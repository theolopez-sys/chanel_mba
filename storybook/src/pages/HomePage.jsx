/**
 * HomePage — Clienteling App Home Screen
 *
 * Composed from all components documented in docs/components/*.md
 * Frame: iPhone 15 Pro (393 × 852) — matches Figma setup in Figma/README.md
 *
 * Components used:
 *   DSHeader          — black greeting header
 *   DSHeroCard        — dashboard hero banner
 *   DSStatCard (×3)   — KPI metrics row
 *   DSChips           — quick filter row (DSChips.md)
 *   DSListItem        — client list rows (DSListItem.md)
 *   DSNumberBadge     — tab notification counts (DSNumberBadge.md)
 *   DSActionCard (×4) — quick-action 2-column grid
 *   DSButton          — primary / secondary CTAs
 *   DSBadge           — status labels
 *   DSActivityList    — recent activity feed
 *   DSFloatingActionButton — main FAB
 *   DSTabBar          — bottom navigation
 */

import { useState } from 'react';
import { DSHeader }     from '../components/DSHeader';
import { DSHeroCard, DSStatCard, DSActionCard } from '../components/DSCard';
import { DSBadge }      from '../components/DSBadge';
import { DSButton }     from '../components/DSButton';
import { DSActivityList } from '../components/DSActivityItem';
import { DSTabBar }     from '../components/DSTabBar';
import { DSFloatingActionButton } from '../components/DSFloatingActionButton';
import { DSChips }      from '../components/DSChips';
import { DSListItem }   from '../components/DSListItem';
import { DSNumberBadge } from '../components/DSNumberBadge';

// ─── Static data ──────────────────────────────────────────────────────────────

const FILTER_CHIPS = [
  { label: 'Tous',        active: true  },
  { label: 'VIP',         active: false },
  { label: 'Anniversaire',active: false },
  { label: 'RDV du jour', active: false },
  { label: 'Nouveaux',    active: false },
];

const CLIENTS = [
  {
    id: 1,
    initials: 'MR',
    name: 'Marie R.',
    subtitle: 'RDV 14:30 · Joaillerie · Anniversaire dans 3 j.',
    badge: { text: 'VIP', variant: 'accent' },
  },
  {
    id: 2,
    initials: 'PD',
    name: 'Pierre D.',
    subtitle: 'Commande Sac 2.55 · Livraison attendue',
    badge: { text: 'New', variant: 'dark' },
  },
  {
    id: 3,
    initials: 'CS',
    name: 'Claire S.',
    subtitle: 'Anniversaire demain · Aucun achat récent',
    badge: { text: '!', variant: 'neutral' },
  },
  {
    id: 4,
    initials: 'IF',
    name: 'Isabelle F.',
    subtitle: 'RDV 11:00 · Défilé Automne',
    badge: null,
  },
];

const ACTIVITY = [
  {
    initials: 'MR', name: 'Marie R.',
    description: 'A confirmé le rendez-vous du 15 avril',
    time: '10:02',
    badge: { text: 'RDV', variant: 'accent' },
  },
  {
    initials: 'PD', name: 'Pierre D.',
    description: 'Commande Sac 2.55 · 6 850 €',
    time: '09:47',
    badge: { text: 'Vente', variant: 'dark' },
  },
  {
    initials: 'CS', name: 'Claire S.',
    description: 'Anniversaire demain — contacter',
    time: '09:15',
    badge: { text: '!', variant: 'neutral' },
  },
  {
    initials: 'AL', name: 'Antoine L.',
    description: 'Message non lu · Sac Boy intérêt',
    time: 'Hier',
    badge: null,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export const HomePage = () => {
  const [activeChip, setActiveChip] = useState(0);

  return (
    <div className="ds-page">

      {/* ① Header */}
      <DSHeader
        greeting="Bonjour"
        name="Sophie M."
        notificationCount={3}
        onSearch={() => {}}
        onNotification={() => {}}
      />

      {/* ② Scrollable content */}
      <div className="ds-page__scroll">

        {/* ③ Hero card */}
        <DSHeroCard
          label="Objectif du jour"
          title="Clienteling"
          subtitle="15 Avril 2026 · Boutique Paris 8"
          ctaLabel="Voir tout"
          onCta={() => {}}
        />

        {/* ④ KPI stats */}
        <div>
          <div className="ds-page__section-header">
            <span className="ds-page__section-title">Aujourd'hui</span>
          </div>
          <div className="ds-page__stat-row" style={{ marginTop: 12 }}>
            <DSStatCard icon="👥" value="12"  label="Clients"    />
            <DSStatCard icon="📅" value="4"   label="Rendez-vous"/>
            <DSStatCard icon="€"  value="24k" label="CA estimé"  />
          </div>
        </div>

        {/* ⑤ Filter chips — DSChips (docs/components/DSChips.md) */}
        <div>
          <div className="ds-page__section-header">
            <span className="ds-page__section-title">Filtrer</span>
          </div>
          <div className="ds-page__chips-row" style={{ marginTop: 12 }}>
            {FILTER_CHIPS.map((chip, i) => (
              <DSChips
                key={chip.label}
                label={chip.label}
                active={activeChip === i}
                onClick={() => setActiveChip(i)}
              />
            ))}
          </div>
        </div>

        {/* ⑥ Client list — DSListItem (docs/components/DSListItem.md) */}
        <div>
          <div className="ds-page__section-header">
            <span className="ds-page__section-title">Clients du jour</span>
            <button className="ds-page__section-link">Tous les clients ›</button>
          </div>
          <div className="ds-list-group" style={{ marginTop: 12 }}>
            {CLIENTS.map((client) => (
              <DSListItem
                key={client.id}
                title={client.name}
                subtitle={client.subtitle}
                showSubtitle
                showRightElement
                badge={client.badge}
                showLeftElement
                leftContent={
                  <div
                    style={{
                      width: 40, height: 40,
                      borderRadius: '50%',
                      background: '#1a1a1a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Georgia, serif',
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#939292',
                    }}
                  >
                    {client.initials}
                  </div>
                }
                onClick={() => {}}
              />
            ))}
          </div>
        </div>

        {/* ⑦ Featured client card — DSButton + DSBadge */}
        <div>
          <div className="ds-page__section-header">
            <span className="ds-page__section-title">Client prioritaire</span>
          </div>
          <div className="ds-page__featured-card" style={{ marginTop: 12 }}>
            <div className="ds-page__featured-client">
              <div className="ds-page__featured-avatar">MR</div>
              <div className="ds-page__featured-info">
                <div className="ds-page__featured-name-row">
                  <span className="ds-page__featured-name">Marie R.</span>
                  <DSBadge text="VIP" variant="accent" />
                </div>
                <div className="ds-page__featured-sub">
                  Anniversaire dans 3 jours · RDV à 14h30
                </div>
                <div className="ds-page__featured-meta">
                  Intérêt : Haute Joaillerie · Sacs · Parfums
                </div>
              </div>
              <span style={{ color: '#888', fontSize: 20 }}>›</span>
            </div>

            <div className="ds-page__divider" />

            <div className="ds-page__featured-actions">
              <DSButton label="Message"     variant="secondary" icon="💬" onClick={() => {}} />
              <DSButton label="Fiche client" variant="primary"   icon="👤" onClick={() => {}} />
            </div>
          </div>
        </div>

        {/* ⑧ Quick actions — DSActionCard */}
        <div>
          <div className="ds-page__section-header">
            <span className="ds-page__section-title">Actions rapides</span>
          </div>
          <div className="ds-page__action-grid" style={{ marginTop: 12 }}>
            <DSActionCard
              icon="➕"
              title="Nouveau client"
              subtitle="Créer une fiche"
              dark
              onClick={() => {}}
            />
            <DSActionCard
              icon="📅"
              title="Prendre RDV"
              subtitle="4 créneaux disponibles"
              onClick={() => {}}
            />
            <DSActionCard
              icon="💬"
              title="Envoyer message"
              subtitle="6 conversations actives"
              onClick={() => {}}
            />
            <DSActionCard
              icon="👜"
              title="Catalogue"
              subtitle="Nouvelles références"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* ⑨ Recent activity — DSActivityList */}
        <div>
          <div className="ds-page__section-header">
            <span className="ds-page__section-title">Activité récente</span>
            <button className="ds-page__section-link">Tout voir ›</button>
          </div>
          <div style={{ marginTop: 12 }}>
            <DSActivityList items={ACTIVITY} />
          </div>
        </div>

      </div>

      {/* ⑩ FAB — DSFloatingActionButton */}
      <div className="ds-page__fab">
        <DSFloatingActionButton
          icon="+"
          label="Nouveau client"
          variant="primary"
          size="medium"
          onClick={() => {}}
        />
      </div>

      {/* ⑪ Tab bar — DSTabBar + DSNumberBadge */}
      <div className="ds-page__tabbar-wrapper">
        {/* Number badge overlay on Messages tab (shown above tab bar for demo) */}
        <DSTabBar defaultActive={0} />
      </div>

    </div>
  );
};

// ─── Demo variant with DSNumberBadge visible ─────────────────────────────────

export const TabWithNumberBadge = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 16, background: '#000' }}>
    <span style={{ color: '#888', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase' }}>
      Notification badge — DSNumberBadge
    </span>
    <DSNumberBadge value={3}   variant="primary"   />
    <DSNumberBadge value={12}  variant="primary"   />
    <DSNumberBadge value={100} variant="primary"   />
    <DSNumberBadge value={5}   variant="secondary" />
    <DSNumberBadge value={2}   variant="disabled"  />
  </div>
);
