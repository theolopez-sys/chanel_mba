export default {
  title: 'Tokens/Typography',
  parameters: { controls: { disable: true }, actions: { disable: true } },
};

const TypeRow = ({ token, size, weight, family, sample, isUppercase = false, letterSpacing = 'normal' }) => (
  <div style={{
    display: 'flex',
    alignItems: 'baseline',
    gap: 24,
    padding: '16px 0',
    borderBottom: '1px solid #EDEDED',
  }}>
    <div style={{ width: 180, flexShrink: 0 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#B8964E', fontFamily: 'monospace', letterSpacing: 1 }}>{token}</div>
      <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>{size} · {weight}</div>
    </div>
    <div style={{
      fontFamily: family,
      fontSize: size,
      fontWeight: weight,
      textTransform: isUppercase ? 'uppercase' : 'none',
      letterSpacing,
      color: '#000',
      lineHeight: 1.3,
      flex: 1,
    }}>
      {sample}
    </div>
  </div>
);

export const Scale = {
  name: 'Type Scale',
  render: () => (
    <div style={{ padding: 32, background: '#fff', maxWidth: 900 }}>

      <div className="story-section">
        <h3>Titre — ABChanel Corpo 2022 (Georgia)</h3>
        <TypeRow token="Font.DS.hero" size="36px" weight={700} family="Georgia, serif"
          sample="Tableau de bord Q1 2026" />
        <TypeRow token="Font.DS.h1" size="28px" weight={700} family="Georgia, serif"
          sample="Sophie Martin" />
        <TypeRow token="Font.DS.h2" size="22px" weight={400} family="Georgia, serif"
          sample="Rapport mensuel" />
        <TypeRow token="Font.DS.h3" size="18px" weight={600} family="Helvetica Neue, sans-serif"
          sample="Section principale" />
      </div>

      <div className="story-section">
        <h3>Corps — Helvetica Neue</h3>
        <TypeRow token="Font.DS.bodyLg" size="17px" weight={400} family="Helvetica Neue, sans-serif"
          sample="Notre système de design libère du temps pour l'innovation." />
        <TypeRow token="Font.DS.body" size="15px" weight={400} family="Helvetica Neue, sans-serif"
          sample="By turning recurring challenges into repeatable solutions." />
        <TypeRow token="Font.DS.bodySm" size="13px" weight={400} family="Helvetica Neue, sans-serif"
          sample="A validé le rapport mensuel Q1 2026" />
        <TypeRow token="Font.DS.bodySm (bold)" size="13px" weight={600} family="Helvetica Neue, sans-serif"
          sample="Thomas M. · Alice Laurent" />
      </div>

      <div className="story-section">
        <h3>Labels — Uppercase</h3>
        <TypeRow token="Font.DS.label" size="11px" weight={700} family="Helvetica Neue, sans-serif"
          sample="Activité récente" isUppercase letterSpacing="1.5px" />
        <TypeRow token="Font.DS.micro" size="10px" weight={700} family="Helvetica Neue, sans-serif"
          sample="Tableau de bord · 09:14 · New" isUppercase letterSpacing="0.5px" />
      </div>

    </div>
  ),
};
