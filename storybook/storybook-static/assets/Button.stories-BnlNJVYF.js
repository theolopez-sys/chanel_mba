import{D as a}from"./DSButton-DgUJqaRx.js";const C={title:"Components/Button",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","accent"]},label:{control:"text"},icon:{control:"text"},fullWidth:{control:"boolean"}},parameters:{backgrounds:{default:"neutral"}}},e={args:{label:"Action principale",variant:"primary"}},r={args:{label:"Action secondaire",variant:"secondary"}},t={args:{label:"Action ghost",variant:"ghost"}},n={args:{label:"Valider",variant:"accent"}},c={args:{label:"Nouvelle tâche",variant:"primary",icon:"+"}},o={args:{label:"Confirmer",variant:"primary",fullWidth:!0}},s={name:"All Variants",parameters:{controls:{disable:!0}},render:()=>React.createElement("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:16,maxWidth:340,background:"#EDEDED"}},React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Variants"),React.createElement("div",{className:"story-row"},React.createElement(a,{label:"Primary",variant:"primary"}),React.createElement(a,{label:"Secondary",variant:"secondary"}),React.createElement(a,{label:"Ghost",variant:"ghost"}),React.createElement(a,{label:"Accent",variant:"accent"}))),React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Avec icône"),React.createElement("div",{className:"story-row"},React.createElement(a,{label:"Créer",variant:"primary",icon:"+"}),React.createElement(a,{label:"Partager",variant:"secondary",icon:"↗"}))),React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Full Width"),React.createElement(a,{label:"Confirmer l'action",variant:"primary",fullWidth:!0}),React.createElement(a,{label:"Annuler",variant:"secondary",fullWidth:!0})))};var l,i,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Action principale',
    variant: 'primary'
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Action secondaire',
    variant: 'secondary'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var v,y,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Action ghost',
    variant: 'ghost'
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,b,E;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Valider',
    variant: 'accent'
  }
}`,...(E=(b=n.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var S,f,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Nouvelle tâche',
    variant: 'primary',
    icon: '+'
  }
}`,...(A=(f=c.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var D,R,W;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Confirmer',
    variant: 'primary',
    fullWidth: true
  }
}`,...(W=(R=o.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var N,B,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'All Variants',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 340,
    background: '#EDEDED'
  }}>
      <div className="story-section">
        <h3>Variants</h3>
        <div className="story-row">
          <DSButton label="Primary" variant="primary" />
          <DSButton label="Secondary" variant="secondary" />
          <DSButton label="Ghost" variant="ghost" />
          <DSButton label="Accent" variant="accent" />
        </div>
      </div>
      <div className="story-section">
        <h3>Avec icône</h3>
        <div className="story-row">
          <DSButton label="Créer" variant="primary" icon="+" />
          <DSButton label="Partager" variant="secondary" icon="↗" />
        </div>
      </div>
      <div className="story-section">
        <h3>Full Width</h3>
        <DSButton label="Confirmer l'action" variant="primary" fullWidth />
        <DSButton label="Annuler" variant="secondary" fullWidth />
      </div>
    </div>
}`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const P=["Primary","Secondary","Ghost","Accent","WithIcon","FullWidth","AllVariants"];export{n as Accent,s as AllVariants,o as FullWidth,t as Ghost,e as Primary,r as Secondary,c as WithIcon,P as __namedExportsOrder,C as default};
