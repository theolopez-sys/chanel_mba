import{D as _}from"./DSButton-DgUJqaRx.js";const m=({label:t,title:r,subtitle:l,ctaLabel:d="Voir tout",onCta:c})=>React.createElement("div",{className:"ds-hero-card"},React.createElement("div",{className:"ds-hero-card__pattern"}),React.createElement("div",{className:"ds-hero-card__body"},React.createElement("span",{className:"ds-hero-card__label"},t),React.createElement("div",{className:"ds-hero-card__title"},r),React.createElement("div",{className:"ds-hero-card__footer"},React.createElement("span",{className:"ds-hero-card__meta"},l),c&&React.createElement(_,{label:d,variant:"primary",onClick:c})))),a=({icon:t,value:r,label:l})=>React.createElement("div",{className:"ds-stat-card"},React.createElement("div",{className:"ds-stat-card__icon"},t),React.createElement("div",{className:"ds-stat-card__value"},r),React.createElement("div",{className:"ds-stat-card__label"},l)),e=({icon:t,title:r,subtitle:l,dark:d=!1,onClick:c})=>React.createElement("button",{className:["ds-action-card",d?"ds-action-card--dark":""].join(" "),onClick:c},React.createElement("div",{className:"ds-action-card__icon"},t),React.createElement("div",null,React.createElement("div",{className:"ds-action-card__title"},r),React.createElement("div",{className:"ds-action-card__sub"},l)));m.__docgenInfo={description:"",methods:[],displayName:"DSHeroCard",props:{ctaLabel:{defaultValue:{value:"'Voir tout'",computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"DSStatCard"};e.__docgenInfo={description:"",methods:[],displayName:"DSActionCard",props:{dark:{defaultValue:{value:"false",computed:!1},required:!1}}};const D={title:"Components/Card",parameters:{backgrounds:{default:"neutral"}}},s={name:"Hero Card",tags:["autodocs"],argTypes:{label:{control:"text"},title:{control:"text"},subtitle:{control:"text"},ctaLabel:{control:"text"}},args:{label:"Tableau de bord",title:"Q1 2026",subtitle:"Mis à jour il y a 2h",ctaLabel:"Voir tout"},render:t=>React.createElement("div",{style:{padding:20,maxWidth:393}},React.createElement(m,{...t,onCta:()=>{}}))},n={name:"Stat Card",render:()=>React.createElement("div",{style:{padding:20,maxWidth:393}},React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Stat Cards"),React.createElement("div",{className:"story-grid-3"},React.createElement(a,{icon:"📈",value:"247",label:"Tâches"}),React.createElement(a,{icon:"👥",value:"18",label:"Équipe"}),React.createElement(a,{icon:"⭐",value:"94%",label:"Score"}))))},i={name:"Action Card",render:()=>React.createElement("div",{style:{padding:20,maxWidth:393}},React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Action Cards"),React.createElement("div",{className:"story-grid-2"},React.createElement(e,{icon:"➕",title:"Nouvelle tâche",subtitle:"Créer & assigner",dark:!0}),React.createElement(e,{icon:"📅",title:"Planifier",subtitle:"3 événements ce soir"}),React.createElement(e,{icon:"💬",title:"Messages",subtitle:"5 non lus"}),React.createElement(e,{icon:"📄",title:"Rapports",subtitle:"Exporter les données"}))))},o={name:"All Cards",parameters:{controls:{disable:!0}},render:()=>React.createElement("div",{style:{padding:20,maxWidth:393,display:"flex",flexDirection:"column",gap:24}},React.createElement(m,{label:"Tableau de bord",title:"Q1 2026",subtitle:"Mis à jour il y a 2h",onCta:()=>{}}),React.createElement("div",{className:"story-grid-3"},React.createElement(a,{icon:"📈",value:"247",label:"Tâches"}),React.createElement(a,{icon:"👥",value:"18",label:"Équipe"}),React.createElement(a,{icon:"⭐",value:"94%",label:"Score"})),React.createElement("div",{className:"story-grid-2"},React.createElement(e,{icon:"➕",title:"Nouvelle tâche",subtitle:"Créer & assigner",dark:!0}),React.createElement(e,{icon:"📅",title:"Planifier",subtitle:"3 événements"}),React.createElement(e,{icon:"💬",title:"Messages",subtitle:"5 non lus"}),React.createElement(e,{icon:"📄",title:"Rapports",subtitle:"Exporter"})))};var u,p,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Hero Card',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    subtitle: {
      control: 'text'
    },
    ctaLabel: {
      control: 'text'
    }
  },
  args: {
    label: 'Tableau de bord',
    title: 'Q1 2026',
    subtitle: 'Mis à jour il y a 2h',
    ctaLabel: 'Voir tout'
  },
  render: args => <div style={{
    padding: 20,
    maxWidth: 393
  }}>
      <DSHeroCard {...args} onCta={() => {}} />
    </div>
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var b,C,E;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Stat Card',
  render: () => <div style={{
    padding: 20,
    maxWidth: 393
  }}>
      <div className="story-section">
        <h3>Stat Cards</h3>
        <div className="story-grid-3">
          <DSStatCard icon="📈" value="247" label="Tâches" />
          <DSStatCard icon="👥" value="18" label="Équipe" />
          <DSStatCard icon="⭐" value="94%" label="Score" />
        </div>
      </div>
    </div>
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,S,g;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Action Card',
  render: () => <div style={{
    padding: 20,
    maxWidth: 393
  }}>
      <div className="story-section">
        <h3>Action Cards</h3>
        <div className="story-grid-2">
          <DSActionCard icon="➕" title="Nouvelle tâche" subtitle="Créer & assigner" dark={true} />
          <DSActionCard icon="📅" title="Planifier" subtitle="3 événements ce soir" />
          <DSActionCard icon="💬" title="Messages" subtitle="5 non lus" />
          <DSActionCard icon="📄" title="Rapports" subtitle="Exporter les données" />
        </div>
      </div>
    </div>
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var h,N,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'All Cards',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 20,
    maxWidth: 393,
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <DSHeroCard label="Tableau de bord" title="Q1 2026" subtitle="Mis à jour il y a 2h" onCta={() => {}} />
      <div className="story-grid-3">
        <DSStatCard icon="📈" value="247" label="Tâches" />
        <DSStatCard icon="👥" value="18" label="Équipe" />
        <DSStatCard icon="⭐" value="94%" label="Score" />
      </div>
      <div className="story-grid-2">
        <DSActionCard icon="➕" title="Nouvelle tâche" subtitle="Créer & assigner" dark />
        <DSActionCard icon="📅" title="Planifier" subtitle="3 événements" />
        <DSActionCard icon="💬" title="Messages" subtitle="5 non lus" />
        <DSActionCard icon="📄" title="Rapports" subtitle="Exporter" />
      </div>
    </div>
}`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const f=["HeroCard","StatCard","ActionCard","AllCards"];export{i as ActionCard,o as AllCards,s as HeroCard,n as StatCard,f as __namedExportsOrder,D as default};
