export default {
  title: 'Tokens/Colors',
  parameters: { controls: { disable: true }, actions: { disable: true } },
};

const Swatch = ({ name, value, token, onDark = false }) => (
  <div style={{ width: 160 }}>
    <div style={{
      height: 80,
      background: value,
      borderRadius: 12,
      border: value === '#FFFFFF' ? '1px solid #D4D4D4' : 'none',
      marginBottom: 10,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    }} />
    <div style={{ fontWeight: 700, fontSize: 13, color: '#000', marginBottom: 2 }}>{name}</div>
    <div style={{ fontSize: 11, color: '#888', fontFamily: 'monospace', marginBottom: 2 }}>{value}</div>
    <div style={{ fontSize: 10, color: '#B8964E', fontFamily: 'monospace' }}>{token}</div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="story-section">
    <h3>{title}</h3>
    <div className="story-row">{children}</div>
  </div>
);

export const AllColors = {
  name: 'All Colors',
  render: () => (
    <div style={{ padding: 32, background: '#EDEDED', minHeight: '100vh' }}>

      <Section title="Core">
        <Swatch name="Black"  value="#000000" token="Color.DS.black" />
        <Swatch name="White"  value="#FFFFFF" token="Color.DS.white" />
        <Swatch name="Accent" value="#B8964E" token="Color.DS.accent" />
      </Section>

      <Section title="Neutral">
        <Swatch name="Lower"  value="#EDEDED" token="Color.DS.neutralLower" />
        <Swatch name="Mid"    value="#D4D4D4" token="Color.DS.neutralMid" />
        <Swatch name="High"   value="#A0A0A0" token="Color.DS.neutralHigh" />
      </Section>

      <Section title="Text">
        <Swatch name="Heading" value="#000000" token="Color.DS.Text.heading" />
        <Swatch name="Body"    value="#333333" token="Color.DS.Text.body" />
        <Swatch name="Muted"   value="#888888" token="Color.DS.Text.muted" />
        <Swatch name="Inverted"value="#FFFFFF" token="Color.DS.Text.inverted" />
      </Section>

      <Section title="Surface">
        <Swatch name="White" value="#FFFFFF" token="Color.DS.surface" />
      </Section>

      <Section title="Status">
        <Swatch name="Success" value="#2D6A4F" token="Color.DS.Status.success" />
        <Swatch name="Warning" value="#E9C46A" token="Color.DS.Status.warning" />
        <Swatch name="Error"   value="#C1121F" token="Color.DS.Status.error" />
        <Swatch name="Info"    value="#023E8A" token="Color.DS.Status.info" />
      </Section>

    </div>
  ),
};
