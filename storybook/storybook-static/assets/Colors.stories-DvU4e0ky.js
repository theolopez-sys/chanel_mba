const S={title:"Tokens/Colors",parameters:{controls:{disable:!0},actions:{disable:!0}}},e=({name:n,value:t,token:i,onDark:m=!1})=>React.createElement("div",{style:{width:160}},React.createElement("div",{style:{height:80,background:t,borderRadius:12,border:t==="#FFFFFF"?"1px solid #D4D4D4":"none",marginBottom:10,boxShadow:"0 2px 8px rgba(0,0,0,0.08)"}}),React.createElement("div",{style:{fontWeight:700,fontSize:13,color:"#000",marginBottom:2}},n),React.createElement("div",{style:{fontSize:11,color:"#888",fontFamily:"monospace",marginBottom:2}},t),React.createElement("div",{style:{fontSize:10,color:"#B8964E",fontFamily:"monospace"}},i)),a=({title:n,children:t})=>React.createElement("div",{className:"story-section"},React.createElement("h3",null,n),React.createElement("div",{className:"story-row"},t)),o={name:"All Colors",render:()=>React.createElement("div",{style:{padding:32,background:"#EDEDED",minHeight:"100vh"}},React.createElement(a,{title:"Core"},React.createElement(e,{name:"Black",value:"#000000",token:"Color.DS.black"}),React.createElement(e,{name:"White",value:"#FFFFFF",token:"Color.DS.white"}),React.createElement(e,{name:"Accent",value:"#B8964E",token:"Color.DS.accent"})),React.createElement(a,{title:"Neutral"},React.createElement(e,{name:"Lower",value:"#EDEDED",token:"Color.DS.neutralLower"}),React.createElement(e,{name:"Mid",value:"#D4D4D4",token:"Color.DS.neutralMid"}),React.createElement(e,{name:"High",value:"#A0A0A0",token:"Color.DS.neutralHigh"})),React.createElement(a,{title:"Text"},React.createElement(e,{name:"Heading",value:"#000000",token:"Color.DS.Text.heading"}),React.createElement(e,{name:"Body",value:"#333333",token:"Color.DS.Text.body"}),React.createElement(e,{name:"Muted",value:"#888888",token:"Color.DS.Text.muted"}),React.createElement(e,{name:"Inverted",value:"#FFFFFF",token:"Color.DS.Text.inverted"})),React.createElement(a,{title:"Surface"},React.createElement(e,{name:"White",value:"#FFFFFF",token:"Color.DS.surface"})),React.createElement(a,{title:"Status"},React.createElement(e,{name:"Success",value:"#2D6A4F",token:"Color.DS.Status.success"}),React.createElement(e,{name:"Warning",value:"#E9C46A",token:"Color.DS.Status.warning"}),React.createElement(e,{name:"Error",value:"#C1121F",token:"Color.DS.Status.error"}),React.createElement(e,{name:"Info",value:"#023E8A",token:"Color.DS.Status.info"})))};var l,r,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'All Colors',
  render: () => <div style={{
    padding: 32,
    background: '#EDEDED',
    minHeight: '100vh'
  }}>

      <Section title="Core">
        <Swatch name="Black" value="#000000" token="Color.DS.black" />
        <Swatch name="White" value="#FFFFFF" token="Color.DS.white" />
        <Swatch name="Accent" value="#B8964E" token="Color.DS.accent" />
      </Section>

      <Section title="Neutral">
        <Swatch name="Lower" value="#EDEDED" token="Color.DS.neutralLower" />
        <Swatch name="Mid" value="#D4D4D4" token="Color.DS.neutralMid" />
        <Swatch name="High" value="#A0A0A0" token="Color.DS.neutralHigh" />
      </Section>

      <Section title="Text">
        <Swatch name="Heading" value="#000000" token="Color.DS.Text.heading" />
        <Swatch name="Body" value="#333333" token="Color.DS.Text.body" />
        <Swatch name="Muted" value="#888888" token="Color.DS.Text.muted" />
        <Swatch name="Inverted" value="#FFFFFF" token="Color.DS.Text.inverted" />
      </Section>

      <Section title="Surface">
        <Swatch name="White" value="#FFFFFF" token="Color.DS.surface" />
      </Section>

      <Section title="Status">
        <Swatch name="Success" value="#2D6A4F" token="Color.DS.Status.success" />
        <Swatch name="Warning" value="#E9C46A" token="Color.DS.Status.warning" />
        <Swatch name="Error" value="#C1121F" token="Color.DS.Status.error" />
        <Swatch name="Info" value="#023E8A" token="Color.DS.Status.info" />
      </Section>

    </div>
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const s=["AllColors"];export{o as AllColors,s as __namedExportsOrder,S as default};
