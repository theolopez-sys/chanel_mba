import{r as S}from"./index-DRjF_FHU.js";const R=[{icon:"🏠",label:"Accueil"},{icon:"⊞",label:"Projets"},{icon:"👤",label:"Profil"},{icon:"⚙️",label:"Réglages"}],A=({defaultActive:_=0})=>{const[T,P]=S.useState(_);return React.createElement("div",{className:"ds-tabbar"},R.map((s,c)=>React.createElement("button",{key:s.label,className:["ds-tabbar__item",T===c?"ds-tabbar__item--active":""].join(" "),onClick:()=>P(c)},React.createElement("span",{className:"ds-tabbar__icon"},s.icon),React.createElement("span",{className:"ds-tabbar__label"},s.label))))};A.__docgenInfo={description:"",methods:[],displayName:"DSTabBar",props:{defaultActive:{defaultValue:{value:"0",computed:!1},required:!1}}};const E={title:"Components/TabBar",component:A,tags:["autodocs"],argTypes:{defaultActive:{control:"select",options:[0,1,2,3]}},parameters:{backgrounds:{default:"white"}}},e={args:{defaultActive:0}},a={args:{defaultActive:1},name:"Projets active"},t={args:{defaultActive:2},name:"Profil active"},r={args:{defaultActive:3},name:"Réglages active"};var o,n,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    defaultActive: 0
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    defaultActive: 1
  },
  name: 'Projets active'
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultActive: 2
  },
  name: 'Profil active'
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,g,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    defaultActive: 3
  },
  name: 'Réglages active'
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const B=["Default","ProjectsTab","ProfileTab","SettingsTab"];export{e as Default,t as ProfileTab,a as ProjectsTab,r as SettingsTab,B as __namedExportsOrder,E as default};
