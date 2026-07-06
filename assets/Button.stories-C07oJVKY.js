import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{tt as n}from"./iframe-c1fVgNaJ.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./Button-Iw7Exxm4.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{i(),o=t(n(),1),s=r(),{fn:c}=__STORYBOOK_MODULE_TEST__,l=[`primary`,`secondary`],u=[`default`,`hover`,`pressed`],d=[`default`,`dark`],f=e=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:20,justifyItems:`start`},children:l.map(t=>(0,s.jsxs)(`div`,{style:{alignItems:`center`,display:`grid`,gap:16,gridTemplateColumns:`96px repeat(3, max-content)`},children:[(0,s.jsx)(`strong`,{style:{color:`var(--text-primary)`,fontFamily:`var(--family-primary)`,fontSize:`var(--size-body)`,fontWeight:`var(--weight-medium)`,textTransform:`capitalize`},children:t}),u.map(n=>(0,o.createElement)(a,{...e,key:`${t}-${n}`,variant:t,visualState:n}))]},t))}),p=e=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:24},children:d.map(t=>(0,s.jsxs)(`section`,{"data-theme":t,style:{background:`var(--section-primary)`,border:`1px solid color-mix(in srgb, var(--text-primary), transparent 82%)`,borderRadius:`var(--radius-radius-04)`,boxSizing:`border-box`,color:`var(--text-primary)`,display:`grid`,gap:18,padding:24},children:[(0,s.jsx)(`h2`,{style:{fontFamily:`var(--family-primary)`,fontSize:`var(--size-body)`,fontWeight:`var(--weight-medium)`,lineHeight:1.25,margin:0,textTransform:`capitalize`},children:t}),(0,s.jsx)(f,{...e,mode:t})]},t))}),m={title:`Design System/Components/Button`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mode:{control:`inline-radio`,options:[`default`,`dark`]},variant:{control:`inline-radio`,options:[`primary`,`secondary`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},visualState:{control:`inline-radio`,options:[`default`,`hover`,`pressed`]}},args:{label:`Book Now`,mode:`default`,onClick:c()}},h={args:{variant:`primary`,size:`md`,visualState:`default`}},g={args:{variant:`secondary`,size:`md`,visualState:`default`}},_={parameters:{layout:`fullscreen`},render:e=>(0,s.jsx)(`div`,{style:{boxSizing:`border-box`,padding:32},children:(0,s.jsx)(p,{...e})}),args:{label:`Book Now`,size:`md`}},v={args:{disabled:!0,label:`Book Now`,variant:`primary`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    visualState: 'default'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    visualState: 'default'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    boxSizing: 'border-box',
    padding: 32
  }}>
      <ButtonModeMatrix {...args} />
    </div>,
  args: {
    label: 'Book Now',
    size: 'md'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Book Now',
    variant: 'primary'
  }
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`Secondary`,`States`,`Disabled`]}))();export{v as Disabled,h as Primary,g as Secondary,_ as States,y as __namedExportsOrder,m as default};