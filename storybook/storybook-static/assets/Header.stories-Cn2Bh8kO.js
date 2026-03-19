const a=({greeting:e,name:N,notificationCount:h=0,onSearch:r,onNotification:c})=>React.createElement("div",{className:"ds-header"},React.createElement("div",null,React.createElement("span",{className:"ds-header__greeting-sub"},e),React.createElement("div",{className:"ds-header__name"},N)),React.createElement("div",{className:"ds-header__actions"},r&&React.createElement("button",{className:"ds-icon-btn",onClick:r,"aria-label":"Rechercher"},"🔍"),c&&React.createElement("button",{className:"ds-icon-btn",onClick:c,"aria-label":"Notifications"},"🔔",h>0&&React.createElement("span",{className:"ds-notif-dot"}))));a.__docgenInfo={description:"",methods:[],displayName:"DSHeader",props:{notificationCount:{defaultValue:{value:"0",computed:!1},required:!1}}};const S={title:"Components/Header",component:a,tags:["autodocs"],argTypes:{greeting:{control:"text"},name:{control:"text"},notificationCount:{control:"number"}},parameters:{backgrounds:{default:"black"}}},n={args:{greeting:"Bonjour",name:"Sophie M.",notificationCount:2},render:e=>React.createElement(a,{...e,onSearch:()=>{},onNotification:()=>{}})},t={args:{greeting:"Bonsoir",name:"Thomas M.",notificationCount:0},render:e=>React.createElement(a,{...e,onSearch:()=>{},onNotification:()=>{}})},o={args:{greeting:"Bonjour",name:"Alice L.",notificationCount:12},render:e=>React.createElement(a,{...e,onSearch:()=>{},onNotification:()=>{}})};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    greeting: 'Bonjour',
    name: 'Sophie M.',
    notificationCount: 2
  },
  render: args => <DSHeader {...args} onSearch={() => {}} onNotification={() => {}} />
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    greeting: 'Bonsoir',
    name: 'Thomas M.',
    notificationCount: 0
  },
  render: args => <DSHeader {...args} onSearch={() => {}} onNotification={() => {}} />
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,f,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    greeting: 'Bonjour',
    name: 'Alice L.',
    notificationCount: 12
  },
  render: args => <DSHeader {...args} onSearch={() => {}} onNotification={() => {}} />
}`,...(p=(f=o.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const E=["Default","NoNotifications","ManyNotifications"];export{n as Default,o as ManyNotifications,t as NoNotifications,E as __namedExportsOrder,S as default};
