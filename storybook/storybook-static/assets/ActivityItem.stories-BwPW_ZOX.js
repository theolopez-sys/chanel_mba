import{D as h}from"./DSBadge-BbQR-oQE.js";const t=({initials:e,name:r,description:s,time:R,badge:c})=>React.createElement("div",{className:"ds-activity-item"},React.createElement("div",{className:"ds-avatar"},e),React.createElement("div",{className:"ds-activity-item__info"},React.createElement("div",{className:"ds-activity-item__name"},r),React.createElement("div",{className:"ds-activity-item__desc"},s)),React.createElement("div",{className:"ds-activity-item__meta"},React.createElement("span",{className:"ds-activity-item__time"},R),c&&React.createElement(h,{text:c.text,variant:c.variant}))),E=({items:e=[]})=>React.createElement("div",{className:"ds-activity-list"},e.map((r,s)=>React.createElement(t,{key:s,...r})));t.__docgenInfo={description:"",methods:[],displayName:"DSActivityItem"};E.__docgenInfo={description:"",methods:[],displayName:"DSActivityList",props:{items:{defaultValue:{value:"[]",computed:!1},required:!1}}};const S={title:"Components/ActivityItem",tags:["autodocs"],parameters:{backgrounds:{default:"neutral"}}},d=[{initials:"AL",name:"Alice Laurent",description:"A validé le rapport mensuel",time:"09:14",badge:{text:"New",variant:"accent"}},{initials:"TM",name:"Thomas M.",description:"A mis à jour le projet Q1",time:"08:52"},{initials:"CR",name:"Clara R.",description:"Nouvelle demande d'accès",time:"08:30",badge:{text:"!",variant:"dark"}},{initials:"JP",name:"Jean-Pierre B.",description:"Commentaire sur Tâche #482",time:"Hier"}],a={name:"Single Item",argTypes:{initials:{control:"text"},name:{control:"text"},description:{control:"text"},time:{control:"text"}},args:{initials:"AL",name:"Alice Laurent",description:"A validé le rapport mensuel",time:"09:14"},render:e=>React.createElement("div",{style:{padding:20,maxWidth:393}},React.createElement("div",{style:{borderRadius:12,overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.06)"}},React.createElement(t,{...e})))},i={name:"With Badge",render:()=>React.createElement("div",{style:{padding:20,maxWidth:393}},React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8}},React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Accent badge (New)"),React.createElement("div",{style:{borderRadius:12,overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.06)"}},React.createElement(t,{...d[0]}))),React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Dark badge (Alert)"),React.createElement("div",{style:{borderRadius:12,overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.06)"}},React.createElement(t,{...d[2]})))))},n={name:"Activity List",render:()=>React.createElement("div",{style:{padding:20,maxWidth:393}},React.createElement(E,{items:d}))};var o,l,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Single Item',
  argTypes: {
    initials: {
      control: 'text'
    },
    name: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    time: {
      control: 'text'
    }
  },
  args: {
    initials: 'AL',
    name: 'Alice Laurent',
    description: 'A validé le rapport mensuel',
    time: '09:14'
  },
  render: args => <div style={{
    padding: 20,
    maxWidth: 393
  }}>
      <div style={{
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
    }}>
        <DSActivityItem {...args} />
      </div>
    </div>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var v,p,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With Badge',
  render: () => <div style={{
    padding: 20,
    maxWidth: 393
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <div className="story-section">
          <h3>Accent badge (New)</h3>
          <div style={{
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
        }}>
            <DSActivityItem {...SAMPLE_ITEMS[0]} />
          </div>
        </div>
        <div className="story-section">
          <h3>Dark badge (Alert)</h3>
          <div style={{
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
        }}>
            <DSActivityItem {...SAMPLE_ITEMS[2]} />
          </div>
        </div>
      </div>
    </div>
}`,...(y=(p=i.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var x,g,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Activity List',
  render: () => <div style={{
    padding: 20,
    maxWidth: 393
  }}>
      <DSActivityList items={SAMPLE_ITEMS} />
    </div>
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const b=["SingleItem","WithBadge","List"];export{n as List,a as SingleItem,i as WithBadge,b as __namedExportsOrder,S as default};
