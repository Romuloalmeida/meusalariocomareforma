(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(e){e.exports=JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.21","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":60,"w":150,"h":150,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"arrow","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[75,65,0],"to":[0,4.167,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":20,"s":[75,90,0],"to":[0,0,0],"ti":[0,2.5,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":35,"s":[75,65,0],"to":[0,-2.5,0],"ti":[0,-1.667,0]},{"t":47,"s":[75,75,0]}],"ix":2},"a":{"a":0,"k":[4,2,0],"ix":1},"s":{"a":0,"k":[490,490,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0,0],[4,4],[8,0]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 10811","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0}],"markers":[]}')},115:function(e,t,a){"use strict";a.r(t);var i=a(1),o=a.n(i),r=a(50),s=a.n(r),n=(a(59),a(37)),l=(a.p,a(60),a(51)),c=a.n(l),d=a(116),u=a(118),j=a(120),m=a(122),b=a(52),p=a.n(b),x=a(117),h=a(119),f=a(121),O=a(123),v=a(0),y="Veja o que acontece no seu sal\xe1rio se a reforma tribut\xe1ria passar!",g="Meu sal\xe1rio com a reforma",S=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});function R(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=[0,.075,.15,.225,.275],o=[1903.98,2826.65,3751.05,4664.68,1/0];t&&(o=[22847.76,33919.8,45012.6,55976.16,1/0]),a&&(i=[0,.075,.15,.225,.275],o=[2500,3200,4250,5300,1/0],t&&(o=[3e4,38400,51e3,63600,1/0]));var r=o.map((function(t,a,i){var o=Math.min(e,t);return 0!==a&&(o-=i[a-1]),o=Math.max(o,0)})),s=r.reduce((function(e,t,a){return e+t*i[a]}),0);return parseFloat(s).toFixed(2)}function k(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=12*e,o=Math.min(16754.34,.2*i);a&&e>3333&&(o=0);var r=i-o,s=R(r,!0,a),n=R(i-12*t,!0,a);return(-1*(s-n)).toFixed(2)}window.calcularRestituicao=k;var F=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),o=t[0],r=t[1];Object(i.useEffect)((function(){setInterval((function(){r(!0),r(!1)}),1e4)}),[]);var s=Object(i.useState)({salarioBruto:null,INSS:null,rendimentoTributavel:null,IRRF:null,IRRFProposta:null,salarioLiquido:null,salarioLiquidoProposta:null,value:void 0,restituicaoAntiga:null,restituicaoNova:null}),l=Object(n.a)(s,2),b=l[0],F=l[1];return Object(v.jsxs)("div",{className:"App",style:{backgroundColor:"#2e333e"},children:[Object(v.jsxs)("header",{className:"App-header",children:[Object(v.jsx)("p",{children:"Digite o seu sal\xe1rio bruto*:"}),Object(v.jsx)(c.a,{id:"input-example",name:"input-name",style:{height:50,fontSize:26},placeholder:"Digite o seu sal\xe1rio bruto",intlConfig:{locale:"pt-BR",currency:"BRL"},defaultValue:0,decimalsLimit:2,onValueChange:function(e,t){if(void 0==e)return F({value:e,salarioBruto:0,INSS:0,rendimentoTributavel:0,IRRF:0,salarioLiquido:0,IRRFProposta:0,salarioLiquidoProposta:0,restituicaoAntiga:0,restituicaoNova:0}),!0;var a=function(e){e=Math.min(e,6433.57);var t=[.075,.09,.12,.14],a=[1100,2203.48,3305.22,6433.57].map((function(t,a,i){var o=Math.min(e,t);return 0!==a&&(o-=i[a-1]),o=Math.max(o,0)})).reduce((function(e,a,i){return e+parseFloat((a*t[i]).toFixed(2))}),0);return parseFloat(a.toFixed(2))}(e),i=e-a,o=R(i),r=R(i,!1,!0),s=i-o,n=i-r,l=k(e,a),c=k(e,a,!0);F({value:e,salarioBruto:e,INSS:a,rendimentoTributavel:i,IRRF:o,salarioLiquido:s,IRRFProposta:r,salarioLiquidoProposta:n,restituicaoAntiga:l,restituicaoNova:c})}}),Object(v.jsx)("h2",{children:function(){var e=12*(b.salarioLiquidoProposta-b.salarioLiquido)+(b.restituicaoNova-b.restituicaoAntiga);if(void 0==b.value)return Object(v.jsx)("div",{className:"dot-stretching"});if(0==e)return Object(v.jsx)("span",{children:"Nada muda para voc\xea!"});var t=S.format(Math.abs(e)),a={};return e<0?(a={color:"red"},t="MENOS "+t+" por ano!"):(a={color:"green"},t="MAIS "+t+" por ano!"),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{style:{visibility:void 0!=b.value?"hidden":""},className:"dot-stretching"}),Object(v.jsxs)("span",{children:["Voc\xea receber\xe1 ",Object(v.jsxs)("span",{style:a,children:[Object(v.jsx)("br",{}),t]})," "]})]})}()}),Object(v.jsxs)("div",{style:{fontSize:11,visibility:void 0==b.value?"hidden":""},children:[Object(v.jsx)("b",{children:"Dados:"}),Object(v.jsxs)("ul",{style:{textAlign:"left",listStyle:"none"},children:[Object(v.jsxs)("li",{children:["Sal\xe1rio Bruto: ",S.format(b.salarioBruto)]}),Object(v.jsxs)("li",{children:["INSS: ",S.format(b.INSS)]}),Object(v.jsxs)("li",{children:["Rendimento tribut\xe1vel: ",S.format(b.rendimentoTributavel)]})]}),Object(v.jsx)("b",{children:"Regras atuais"}),Object(v.jsxs)("ul",{style:{textAlign:"left",listStyle:"none"},children:[Object(v.jsxs)("li",{children:["Imposto de Renda: ",S.format(b.IRRF)]}),Object(v.jsxs)("li",{children:["Sal\xe1rio L\xedquido: ",S.format(b.salarioLiquido)]}),Object(v.jsxs)("li",{children:["Restitui\xe7\xe3o anual: ",S.format(b.restituicaoAntiga)]})]}),Object(v.jsx)("b",{children:"Com a Proposta"}),Object(v.jsxs)("ul",{style:{textAlign:"left",listStyle:"none"},children:[Object(v.jsxs)("li",{children:["Imposto de Renda: ",S.format(b.IRRFProposta)]}),Object(v.jsxs)("li",{children:["Sal\xe1rio L\xedquido: ",S.format(b.salarioLiquidoProposta)]}),Object(v.jsxs)("li",{children:["Restitui\xe7\xe3o anual: ",S.format(b.restituicaoNova)]})]})]}),Object(v.jsxs)("p",{style:{fontSize:10,marginTop:50,position:"relative",bottom:15},children:[" *Os seus dados ",Object(v.jsx)("b",{children:"N\xc3O"})," ser\xe3o gravados e/ou armanezados neste site.",Object(v.jsx)("br",{}),"Respeitamos a sua privacidade."]}),Object(v.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(v.jsx)("p",{children:"Compartilhe:"}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",maxWidth:"200px"},children:[Object(v.jsx)(d.a,{title:y,url:"https://meusalariocomareforma.com.br/",children:Object(v.jsx)(x.a,{borderRadius:3,size:40})}),Object(v.jsx)(u.a,{quote:y,url:"https://meusalariocomareforma.com.br/",children:Object(v.jsx)(h.a,{borderRadius:3,size:40})}),Object(v.jsx)(j.a,{title:g,url:"https://meusalariocomareforma.com.br/",children:Object(v.jsx)(f.a,{borderRadius:3,size:40})}),Object(v.jsx)(m.a,{title:g,url:"https://meusalariocomareforma.com.br/",children:Object(v.jsx)(O.a,{borderRadius:3,size:40})})]})]}),function(){var e={loop:!1,autoplay:!1,animationData:a(114)};return Object(v.jsx)(p.a,{style:{margin:"-32px"},options:e,height:120,width:120,isStopped:o,isPaused:!1})}()]}),Object(v.jsxs)("section",{id:"section05",style:{color:"white"},children:[Object(v.jsx)("h3",{children:"O que \xe9 a reforma tribut\xe1ria?"}),Object(v.jsxs)("p",{style:{position:"relative",textAlign:"justify",width:"90%",maxWidth:"600px",display:"inline-block",marginBottom:"70px",fontSize:19},children:[Object(v.jsx)("span",{style:{position:"absolute",top:"-28px",fontSize:"11px"},children:"07/07/2021 \xe0s 00:28"}),"O sistema tribut\xe1rio pode ser reformulado para aumentar ou diminuir os impostos arrecadados e/ou o valor fiscal arrecadado.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Segundo o atual ministro da Economia, Paulo Guedes, o objetivo da reforma tribut\xe1ria brasileira em 2021 n\xe3o \xe9 aumentar a carga tribut\xe1ria e tarif\xe1ria atualmente paga.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Como o ministro explicou at\xe9 agora, o objetivo dessa mudan\xe7a \xe9 reorganizar os m\xe9todos de pagamento atuais para estimular a atividade econ\xf4mica e aumentar a efici\xeancia do sistema de cobran\xe7a.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Vale lembrar que, de acordo com o site da C\xe2mara dos Deputados, uma empresa brasileira precisa de 1.958 horas para pagar impostos, enquanto o tempo m\xe9dio nos demais pa\xedses \xe9 de apenas 206 horas."]})]})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,124)).then((function(t){var a=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),i(e),o(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),I()},59:function(e,t,a){},60:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.ba6d4aa2.chunk.js.map