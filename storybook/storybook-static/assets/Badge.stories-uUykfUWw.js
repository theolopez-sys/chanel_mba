import{D as e}from"./DSBadge-BbQR-oQE.js";const k={title:"Components/Badge",component:e,tags:["autodocs"],argTypes:{text:{control:"text"},variant:{control:"select",options:["dark","accent","neutral","outlined"]}}},a={args:{text:"Nouveau",variant:"dark"}},t={args:{text:"New",variant:"accent"}},r={args:{text:"En cours",variant:"neutral"}},n={args:{text:"Draft",variant:"outlined"}},s={name:"All Variants",parameters:{controls:{disable:!0}},render:()=>React.createElement("div",{style:{padding:32,background:"#fff"}},React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Variants"),React.createElement("div",{className:"story-row"},React.createElement(e,{text:"New",variant:"accent"}),React.createElement(e,{text:"!",variant:"dark"}),React.createElement(e,{text:"En cours",variant:"neutral"}),React.createElement(e,{text:"Draft",variant:"outlined"}))),React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Cas d'usage"),React.createElement("div",{className:"story-row"},React.createElement(e,{text:"New",variant:"accent"}),React.createElement(e,{text:"3",variant:"dark"}),React.createElement(e,{text:"Validé",variant:"neutral"}),React.createElement(e,{text:"Archivé",variant:"outlined"}),React.createElement(e,{text:"Urgent",variant:"dark"}))))};var c,o,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Nouveau',
    variant: 'dark'
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'New',
    variant: 'accent'
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,v,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'En cours',
    variant: 'neutral'
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var p,x,E;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Draft',
    variant: 'outlined'
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var N,D,R;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'All Variants',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 32,
    background: '#fff'
  }}>
      <div className="story-section">
        <h3>Variants</h3>
        <div className="story-row">
          <DSBadge text="New" variant="accent" />
          <DSBadge text="!" variant="dark" />
          <DSBadge text="En cours" variant="neutral" />
          <DSBadge text="Draft" variant="outlined" />
        </div>
      </div>
      <div className="story-section">
        <h3>Cas d'usage</h3>
        <div className="story-row">
          <DSBadge text="New" variant="accent" />
          <DSBadge text="3" variant="dark" />
          <DSBadge text="Validé" variant="neutral" />
          <DSBadge text="Archivé" variant="outlined" />
          <DSBadge text="Urgent" variant="dark" />
        </div>
      </div>
    </div>
}`,...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const f=["Dark","Accent","Neutral","Outlined","AllVariants"];export{t as Accent,s as AllVariants,a as Dark,r as Neutral,n as Outlined,f as __namedExportsOrder,k as default};
