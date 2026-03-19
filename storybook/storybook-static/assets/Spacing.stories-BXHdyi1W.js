const u={title:"Tokens/Spacing & Radius",parameters:{controls:{disable:!0},actions:{disable:!0}}},e=({token:t,value:a,usage:n})=>React.createElement("div",{style:{display:"flex",alignItems:"center",gap:20,marginBottom:12}},React.createElement("div",{style:{width:140,fontSize:11,fontFamily:"monospace",color:"#B8964E",fontWeight:700}},t),React.createElement("div",{style:{height:24,width:parseInt(a)*2,background:"#000",borderRadius:3,flexShrink:0}}),React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"#333",width:40}},a),React.createElement("div",{style:{fontSize:12,color:"#888"}},n)),s=({token:t,value:a,usage:n})=>React.createElement("div",{style:{textAlign:"center",width:140}},React.createElement("div",{style:{width:80,height:80,background:"#000",borderRadius:parseInt(a)>50?40:parseInt(a),margin:"0 auto 12px"}}),React.createElement("div",{style:{fontSize:11,fontFamily:"monospace",color:"#B8964E",fontWeight:700}},t),React.createElement("div",{style:{fontSize:11,color:"#333",fontWeight:700}},a),React.createElement("div",{style:{fontSize:11,color:"#888",marginTop:2}},n)),i={name:"Spacing",render:()=>React.createElement("div",{style:{padding:32,background:"#fff"}},React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Espacement"),React.createElement(e,{token:"DSSpacing.xs",value:"4pt",usage:"Gap icône/texte"}),React.createElement(e,{token:"DSSpacing.sm",value:"8pt",usage:"Gap interne badge, bouton"}),React.createElement(e,{token:"DSSpacing.md",value:"12pt",usage:"Padding compact, gutter grille"}),React.createElement(e,{token:"DSSpacing.base",value:"16pt",usage:"Padding standard"}),React.createElement(e,{token:"DSSpacing.lg",value:"20pt",usage:"Gap liste, page padding mobile"}),React.createElement(e,{token:"DSSpacing.xl",value:"24pt",usage:"Padding card"}),React.createElement(e,{token:"DSSpacing.xxl",value:"32pt",usage:"Gap entre éléments importants"}),React.createElement(e,{token:"DSSpacing.xxxl",value:"40pt",usage:"Gap entre sections"}),React.createElement(e,{token:"DSSpacing.pagePadding",value:"20pt",usage:"Marge horizontale de page"})),React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Border Radius"),React.createElement("div",{className:"story-row"},React.createElement(s,{token:"DSRadius.sm",value:"8pt",usage:"Icône bg"}),React.createElement(s,{token:"DSRadius.md",value:"12pt",usage:"Cards secondaires"}),React.createElement(s,{token:"DSRadius.lg",value:"20pt",usage:"Cards principales"}),React.createElement(s,{token:"DSRadius.full",value:"999pt",usage:"Badges, pills"}))))},o={name:"Shadows",render:()=>React.createElement("div",{style:{padding:32,background:"#EDEDED",minHeight:400}},React.createElement("div",{className:"story-section"},React.createElement("h3",null,"Niveaux d'élévation"),React.createElement("div",{className:"story-row"},[{token:".dsShadow(.card)",css:"0 4px 12px rgba(0,0,0,0.06)",usage:"Cards, listes"},{token:".dsShadow(.modal)",css:"0 12px 32px rgba(0,0,0,0.15)",usage:"Modals, bottom sheets"}].map(({token:t,css:a,usage:n})=>React.createElement("div",{key:t,style:{width:220,textAlign:"center"}},React.createElement("div",{style:{width:140,height:80,background:"#fff",borderRadius:16,boxShadow:a,margin:"0 auto 16px"}}),React.createElement("div",{style:{fontSize:11,fontFamily:"monospace",color:"#B8964E",fontWeight:700}},t),React.createElement("div",{style:{fontSize:10,color:"#888",marginTop:4}},n))))))};var c,d,r;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Spacing',
  render: () => <div style={{
    padding: 32,
    background: '#fff'
  }}>
      <div className="story-section">
        <h3>Espacement</h3>
        <SpacingRow token="DSSpacing.xs" value="4pt" usage="Gap icône/texte" />
        <SpacingRow token="DSSpacing.sm" value="8pt" usage="Gap interne badge, bouton" />
        <SpacingRow token="DSSpacing.md" value="12pt" usage="Padding compact, gutter grille" />
        <SpacingRow token="DSSpacing.base" value="16pt" usage="Padding standard" />
        <SpacingRow token="DSSpacing.lg" value="20pt" usage="Gap liste, page padding mobile" />
        <SpacingRow token="DSSpacing.xl" value="24pt" usage="Padding card" />
        <SpacingRow token="DSSpacing.xxl" value="32pt" usage="Gap entre éléments importants" />
        <SpacingRow token="DSSpacing.xxxl" value="40pt" usage="Gap entre sections" />
        <SpacingRow token="DSSpacing.pagePadding" value="20pt" usage="Marge horizontale de page" />
      </div>

      <div className="story-section">
        <h3>Border Radius</h3>
        <div className="story-row">
          <RadiusBox token="DSRadius.sm" value="8pt" usage="Icône bg" />
          <RadiusBox token="DSRadius.md" value="12pt" usage="Cards secondaires" />
          <RadiusBox token="DSRadius.lg" value="20pt" usage="Cards principales" />
          <RadiusBox token="DSRadius.full" value="999pt" usage="Badges, pills" />
        </div>
      </div>
    </div>
}`,...(r=(d=i.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var l,g,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Shadows',
  render: () => <div style={{
    padding: 32,
    background: '#EDEDED',
    minHeight: 400
  }}>
      <div className="story-section">
        <h3>Niveaux d'élévation</h3>
        <div className="story-row">
          {[{
          token: '.dsShadow(.card)',
          css: '0 4px 12px rgba(0,0,0,0.06)',
          usage: 'Cards, listes'
        }, {
          token: '.dsShadow(.modal)',
          css: '0 12px 32px rgba(0,0,0,0.15)',
          usage: 'Modals, bottom sheets'
        }].map(({
          token,
          css,
          usage
        }) => <div key={token} style={{
          width: 220,
          textAlign: 'center'
        }}>
              <div style={{
            width: 140,
            height: 80,
            background: '#fff',
            borderRadius: 16,
            boxShadow: css,
            margin: '0 auto 16px'
          }} />
              <div style={{
            fontSize: 11,
            fontFamily: 'monospace',
            color: '#B8964E',
            fontWeight: 700
          }}>{token}</div>
              <div style={{
            fontSize: 10,
            color: '#888',
            marginTop: 4
          }}>{usage}</div>
            </div>)}
        </div>
      </div>
    </div>
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const m=["SpacingScale","Shadows"];export{o as Shadows,i as SpacingScale,m as __namedExportsOrder,u as default};
