export default {
  title: 'Tokens/Spacing & Radius',
  parameters: { controls: { disable: true }, actions: { disable: true } },
};

const SpacingRow = ({ token, value, usage }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 12 }}>
    <div style={{ width: 140, fontSize: 11, fontFamily: 'monospace', color: '#B8964E', fontWeight: 700 }}>{token}</div>
    <div style={{
      height: 24,
      width: parseInt(value) * 2,
      background: '#000',
      borderRadius: 3,
      flexShrink: 0,
    }} />
    <div style={{ fontSize: 11, fontWeight: 700, color: '#333', width: 40 }}>{value}</div>
    <div style={{ fontSize: 12, color: '#888' }}>{usage}</div>
  </div>
);

const RadiusBox = ({ token, value, usage }) => (
  <div style={{ textAlign: 'center', width: 140 }}>
    <div style={{
      width: 80, height: 80,
      background: '#000',
      borderRadius: parseInt(value) > 50 ? 40 : parseInt(value),
      margin: '0 auto 12px',
    }} />
    <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#B8964E', fontWeight: 700 }}>{token}</div>
    <div style={{ fontSize: 11, color: '#333', fontWeight: 700 }}>{value}</div>
    <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{usage}</div>
  </div>
);

export const SpacingScale = {
  name: 'Spacing',
  render: () => (
    <div style={{ padding: 32, background: '#fff' }}>
      <div className="story-section">
        <h3>Espacement</h3>
        <SpacingRow token="DSSpacing.xs"          value="4pt"  usage="Gap icône/texte" />
        <SpacingRow token="DSSpacing.sm"          value="8pt"  usage="Gap interne badge, bouton" />
        <SpacingRow token="DSSpacing.md"          value="12pt" usage="Padding compact, gutter grille" />
        <SpacingRow token="DSSpacing.base"        value="16pt" usage="Padding standard" />
        <SpacingRow token="DSSpacing.lg"          value="20pt" usage="Gap liste, page padding mobile" />
        <SpacingRow token="DSSpacing.xl"          value="24pt" usage="Padding card" />
        <SpacingRow token="DSSpacing.xxl"         value="32pt" usage="Gap entre éléments importants" />
        <SpacingRow token="DSSpacing.xxxl"        value="40pt" usage="Gap entre sections" />
        <SpacingRow token="DSSpacing.pagePadding" value="20pt" usage="Marge horizontale de page" />
      </div>

      <div className="story-section">
        <h3>Border Radius</h3>
        <div className="story-row">
          <RadiusBox token="DSRadius.sm"   value="8pt"   usage="Icône bg" />
          <RadiusBox token="DSRadius.md"   value="12pt"  usage="Cards secondaires" />
          <RadiusBox token="DSRadius.lg"   value="20pt"  usage="Cards principales" />
          <RadiusBox token="DSRadius.full" value="999pt" usage="Badges, pills" />
        </div>
      </div>
    </div>
  ),
};

export const Shadows = {
  name: 'Shadows',
  render: () => (
    <div style={{ padding: 32, background: '#EDEDED', minHeight: 400 }}>
      <div className="story-section">
        <h3>Niveaux d'élévation</h3>
        <div className="story-row">
          {[
            { token: '.dsShadow(.card)', css: '0 4px 12px rgba(0,0,0,0.06)', usage: 'Cards, listes' },
            { token: '.dsShadow(.modal)', css: '0 12px 32px rgba(0,0,0,0.15)', usage: 'Modals, bottom sheets' },
          ].map(({ token, css, usage }) => (
            <div key={token} style={{ width: 220, textAlign: 'center' }}>
              <div style={{
                width: 140, height: 80,
                background: '#fff',
                borderRadius: 16,
                boxShadow: css,
                margin: '0 auto 16px',
              }} />
              <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#B8964E', fontWeight: 700 }}>{token}</div>
              <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>{usage}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
