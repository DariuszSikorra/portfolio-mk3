(this["webpackJsonpportfolio-mk3"]=this["webpackJsonpportfolio-mk3"]||[]).push([[0],{116:function(e,a,t){e.exports=t.p+"static/media/home.a6928071.jpg"},173:function(e,a,t){e.exports=t.p+"static/media/contact.f44435d5.jpg"},174:function(e,a,t){e.exports=t.p+"static/media/interests.8b748e55.jpg"},175:function(e,a,t){e.exports=t.p+"static/media/projects.4b74176d.jpg"},176:function(e,a,t){e.exports=t.p+"static/media/endomondoCloneScreen.3577e67a.jpg"},177:function(e,a,t){e.exports=t.p+"static/media/dawexpolScreen.43539c35.jpg"},178:function(e,a,t){e.exports=t.p+"static/media/todolistScreen.cdb3f489.jpg"},179:function(e,a,t){e.exports=t.p+"static/media/spacexScreen.a7c328ce.jpg"},181:function(e,a,t){e.exports=t.p+"static/media/pg.5b6fb535.jpg"},182:function(e,a,t){e.exports=t.p+"static/media/css3Icon.7ca664e1.svg"},183:function(e,a,t){e.exports=t.p+"static/media/graphQlIcon.e6990cd7.svg"},184:function(e,a,t){e.exports=t.p+"static/media/html5Icon.d22bcaa3.svg"},185:function(e,a,t){e.exports=t.p+"static/media/jsIcon.bbc5738c.svg"},186:function(e,a,t){e.exports=t.p+"static/media/npmIcon.787bab7a.svg"},187:function(e,a,t){e.exports=t.p+"static/media/reactIcon.2bbf54f4.svg"},188:function(e,a,t){e.exports=t.p+"static/media/reduxIcon.46f296b2.svg"},189:function(e,a,t){e.exports=t.p+"static/media/sassIcon.639cffb9.svg"},190:function(e,a,t){e.exports=t.p+"static/media/typescriptIcon.6268d13f.svg"},207:function(e,a,t){e.exports=t(347)},211:function(e,a,t){},346:function(e,a,t){},347:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),o=t.n(i),c=(t(211),t(91)),l=t.n(c),s=t(38),m=t(62),p=t(168),d=t(32),u=t(50),g=t(164),h=t(3),E=t(19),f=t(425),b=t(422),x=t(423),v=t(421),w=t(402),k=t(63),y=t(426),j=t(424),S=t(191),I=t.n(S),N=t(192),T=t.n(N),O=t(193),C=t.n(O),z=t(419),B=t(420),P=t(418),A=t(348),D=t(71),G=t(194),R=t(167),L=t.n(R),W=t(404),_=t(400),M=t(427),F=t(403),q=t(119),H=t(169),Q=t.n(H),J=t(87),V=t.n(J),X=t(170),Y=t.n(X),U=Object(p.a)((function(e){return{submit:{margin:e.spacing(2,0,2)}}})),$=function(e){var a=U(),t=Object(n.useState)(!1),i=Object(u.a)(t,2),o=i[0],c=i[1],l=Object(n.useState)(!1),s=Object(u.a)(l,2),m=s[0],p=s[1],d=e.values,g=d.name,h=d.email,E=d.message,f=e.errors,b=e.touched,x=e.handleChange,v=e.isValid;console.table(e);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={message_html:E,from_name:g,reply_to:h};L.a.send("portfolioMail","portfolio_mail_template",a,"user_koYEw5c4OtDEbzpGdAdMP").then((function(e){c(!0)}),(function(e){p(!0)}))}},r.a.createElement(_.a,{container:!0,spacing:2},r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(M.a,{variant:"outlined",size:"small",type:"text",name:"name",helperText:b.name?f.name:"",error:Boolean(f.name),value:g,onChange:x,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(F.a,{position:"start"},r.a.createElement(Q.a,null))}}),r.a.createElement("div",null,Boolean(f.name)?f.name:"")),r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(M.a,{variant:"outlined",size:"small",type:"email",name:"email",helperText:b.email?f.email:"",error:Boolean(f.email),fullWidth:!0,value:h,onChange:x,InputProps:{startAdornment:r.a.createElement(F.a,{position:"start"},r.a.createElement(V.a,null))}}),r.a.createElement("div",null,Boolean(f.email)?f.email:"")),r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(M.a,{variant:"outlined",size:"small",multiline:!0,rows:"5",name:"message",error:Boolean(f.message),fullWidth:!0,type:"message",value:E,onChange:x,InputProps:{startAdornment:r.a.createElement(F.a,{position:"start"},r.a.createElement(Y.a,null))}}),r.a.createElement("div",null,f.password))),o&&r.a.createElement(_.a,null,r.a.createElement(q.a,{variant:"outlined",size:"small",color:"primary"},r.a.createElement(k.a,{align:"center",color:"primary"},"Your e-mail has been sent!"))),m&&r.a.createElement(_.a,null,r.a.createElement(q.a,{variant:"outlined",size:"small",color:"primary"},r.a.createElement(k.a,{align:"center",color:"secondary"},"Something went wrong!"))),r.a.createElement(W.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:!v,className:a.submit},"Send"))},K=D.object({name:D.string("Enter a name").required("Name is required"),email:D.string("Enter your email").email("Enter a valid email").required("Email is required"),message:D.string("").min(20,"Message must contain atleast 20 characters").required("To send a message write something")}),Z=function(){return r.a.createElement(G.a,{render:function(e){return r.a.createElement($,e)},initialValues:{name:"",email:"",message:""},validationSchema:K,onSubmit:function(e){console.log(e)}})},ee=t(405),ae=t(171),te=t.n(ae),ne=t(172),re=t.n(ne),ie=Object(p.a)({icon:{}}),oe=function(){var e=ie();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{display:"block",variant:"body1",href:"https://www.linkedin.com/in/dariuszsikorra",key:"linkedIn"},r.a.createElement(_.a,{className:e.icon,container:!0,direction:"row",spacing:1,alignItems:"center"},r.a.createElement(_.a,{item:!0},r.a.createElement(te.a,{fontSize:"large"})))),r.a.createElement(ee.a,{display:"block",variant:"body1",href:"https://github.com/DariuszSikorra",key:"github"},r.a.createElement(_.a,{className:e.icon,container:!0,direction:"row",spacing:1,alignItems:"center"},r.a.createElement(_.a,{item:!0},r.a.createElement(re.a,{fontSize:"large"})))),r.a.createElement(ee.a,{display:"block",variant:"body1",key:"email"},r.a.createElement(_.a,{className:e.icon,container:!0,direction:"row",spacing:1,alignItems:"center"},r.a.createElement(_.a,{item:!0},r.a.createElement(V.a,{fontSize:"large"})),r.a.createElement(_.a,{item:!0},"dariusz.sikorra@gmail.com"))))},ce=t(173),le=t.n(ce),se=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexGrow:1,paddingTop:e.spacing(10),paddingBottom:e.spacing(4),alignItems:"center",padding:0,margin:0},title:{padding:e.spacing(2),color:"white"},text:{margin:"auto",display:"flex",padding:e.spacing(2),color:"white",flexDirection:"column"},graphic:{width:400,padding:e.spacing(2)}}})),me=function(){var e=se();return r.a.createElement(_.a,{className:e.container,container:!0},r.a.createElement(_.a,{className:e.graphic,xs:12,sm:6,item:!0},r.a.createElement(q.a,{style:{width:"100%",height:"500px",backgroundImage:"url(".concat(le.a,")"),backgroundPosition:"center",backgroundSize:"cover"},elevation:"13"})),r.a.createElement(_.a,{className:e.title,xs:12,sm:6,item:!0},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center"},"Contact")),r.a.createElement(_.a,{className:e.text,item:!0},r.a.createElement(k.a,{component:"h5",variant:"h5",align:"center"},"Wanna get in touch or talk about a projects? Feel free to contact me:"),r.a.createElement("br",null),r.a.createElement(_.a,{display:"flex",direction:"row",justify:"space-evenly",container:!0},r.a.createElement(oe,null)),r.a.createElement("br",null),r.a.createElement(k.a,{component:"h5",variant:"h5",align:"center"},"Or, send me a message:"),r.a.createElement("br",null),r.a.createElement(Z,null)))},pe=t(116),de=t.n(pe),ue=Object(p.a)((function(e){return{container:{display:"flex",flexGrow:1,paddingTop:e.spacing(10),paddingBottom:e.spacing(4),alignItems:"center",padding:0,margin:0},title:{padding:e.spacing(2),color:"white"},text:{margin:"auto",display:"flex",color:"white"},graphic:{width:400,padding:e.spacing(2)},mainFeaturedPost:{position:"relative",backgroundImage:"url(".concat(de.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},paper:{}}})),ge=function(){var e=ue();return r.a.createElement(_.a,{className:e.container,container:!0},r.a.createElement(_.a,{xs:12,sm:6,className:e.graphic,item:!0},r.a.createElement(q.a,{style:{width:"100%",height:"600px",backgroundImage:"url(".concat(de.a,")"),backgroundPosition:"center",backgroundSize:"cover"},elevation:"13"})),r.a.createElement(_.a,{xs:12,sm:6,className:e.title,item:!0},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center"},"Dariusz Sikorra"),r.a.createElement(k.a,{component:"h2",variant:"h4",align:"center"},"Front-end Developer React")))},he=t(174),Ee=t.n(he),fe=Object(p.a)((function(e){return{container:{display:"flex",flexGrow:1,paddingTop:e.spacing(10),paddingBottom:e.spacing(4),alignItems:"center",padding:0,margin:0},title:{padding:e.spacing(2),color:"white"},text:{margin:"auto",display:"flex",padding:e.spacing(2),color:"white"},graphic:{width:400,padding:e.spacing(2)},paper:{}}})),be=function(){var e=fe();return r.a.createElement(_.a,{className:e.container,container:!0},r.a.createElement(_.a,{className:e.graphic,xs:12,sm:6,item:!0},r.a.createElement(q.a,{style:{width:"100%",height:"500px",backgroundImage:"url(".concat(Ee.a,")"),backgroundPosition:"center",backgroundSize:"cover"},elevation:"13"})),r.a.createElement(_.a,{className:e.title,xs:12,sm:6,item:!0},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center"},"Interests")),r.a.createElement(_.a,{className:e.text,item:!0},r.a.createElement(k.a,{component:"h5",variant:"h5",align:"center"},"My passion are mountains, in my spare time when I'm not working on my projects I am looking for travel opportunities. I love spring and winter journeys, walking and cycling in the mountains. I love to admire the views and put myself on more and more difficult challenges.")))},xe=t(175),ve=t.n(xe),we=t(195),ke=t(406),ye=t(350),je=t(407),Se=t(353),Ie=t(117),Ne=Object(p.a)((function(e){return{media:{height:250},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),Te=r.a.forwardRef((function(e,a){var t=e.in,n=e.children,i=e.onEnter,o=e.onExited,c=Object(we.a)(e,["in","children","onEnter","onExited"]),l=Object(Ie.useSpring)({from:{opacity:0},to:{opacity:t?1:0},onStart:function(){t&&i&&i()},onRest:function(){!t&&o&&o()}});return r.a.createElement(Ie.animated.div,Object.assign({ref:a,style:l},c),n)})),Oe=function(e){var a=Ne(),t=r.a.useState(!1),n=Object(u.a)(t,2),i=n[0],o=n[1],c=function(){o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{className:a.media,image:e.card.image,title:e.card.name,onClick:function(){o(!0)}}),r.a.createElement(ye.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:a.modal,open:i,onClose:c,closeAfterTransition:!0,BackdropComponent:Se.a,BackdropProps:{timeout:500}},r.a.createElement(Te,{in:i},r.a.createElement(je.a,{maxWidth:"lg"},r.a.createElement("img",{style:{width:"90vw",height:"100%",maxWidth:1e3},src:e.card.image,onClick:c,alt:e.card.name})))))},Ce=t(408),ze=t(409),Be=t(411),Pe=t(410),Ae=Object(p.a)({card:{maxWidth:450},cardActionArea:{},button:{textDecoration:"none"}}),De=function(e){var a=Ae();return r.a.createElement(Ce.a,{raised:!0,className:a.card},r.a.createElement(ze.a,{className:a.cardActionArea},r.a.createElement(Oe,{card:e.card})),r.a.createElement(Pe.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.card.name),r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},e.card.cardTextContent)),r.a.createElement(Be.a,null,e.card.githubLink&&r.a.createElement(W.a,{component:ee.a,href:e.card.githubLink,target:"_blank",size:"small",className:a.button,variant:"contained",color:"primary"},"Github"),e.card.link&&r.a.createElement(W.a,{component:ee.a,href:e.card.link,target:"_blank",size:"small",className:a.button,variant:"contained",color:"primary"},"Website")))},Ge=t(176),Re=t.n(Ge),Le=t(177),We=t.n(Le),_e=t(178),Me=t.n(_e),Fe=t(179),qe=t.n(Fe),He=[{id:1,name:"Endomondo clone",linkText:"Endomondo clone",link:"https://dariuszsikorra.github.io/endomondo-like-app/",image:Re.a,cardTextContent:r.a.createElement(r.a.Fragment,null,"The application aims to track the location using the navigator.geolocation interface and remember the obtained results. Based on the results, the application draws a polyline that reflects the path travelled. ",r.a.createElement("br",null),r.a.createElement("br",null)," The map used in the application is based on the Google Maps API."," ",r.a.createElement("br",null)," The application also determines the speed of the device and the time for which the measurement is performed.",r.a.createElement("br",null),r.a.createElement("br",null),"The application was created for mobile devices.",r.a.createElement("br",null),"If the application is stuck, refresh data is saved to local storage."),githubLink:"https://github.com/DariuszSikorra/endomondo-like-app"},{id:2,name:"Business brochure",linkText:"text linku drugiego",link:"https://piaskowanie-dawexpol.pl/",image:We.a,cardTextContent:r.a.createElement(r.a.Fragment,null,"Created for client webpage. React.js based single page business-brochure. Visual maitained by Sass, and react-spring.",r.a.createElement("br",null),r.a.createElement("br",null),"Libraries used for this project:",r.a.createElement("ul",null,r.a.createElement("li",null," React-router for routing between pages,"),r.a.createElement("li",null,"React-spring for easy to inplemnt and natural animations,"),r.a.createElement("li",null,"React-responsive for dynamic responsiveness of gallery layout.")))},{id:3,name:"Spacex App",linkText:"text linku trzeciego",link:"https://dariuszsikorra.github.io/spacex-graphql-app/",image:qe.a,cardTextContent:r.a.createElement(r.a.Fragment,null,"An application shows last 10 SpaceX missions, with an exact load in rockets. App uses GraphQL to fetch data and free Spacex API as a source.",r.a.createElement("br",null),"I wrote the application for the purpose of learning how to use databases based on GraphQL.",r.a.createElement("br",null),"The app contains the last 10 rockets fired by SpaceX. The data includes:",r.a.createElement("ul",null,r.a.createElement("li",null,"when the rocket was launched,"),r.a.createElement("li",null,"what kind of rocket they used,"),r.a.createElement("li",null,"what was the base of operation,"),r.a.createElement("li",null,"what load was in the rocket, and what was a load mass."))),githubLink:"https://github.com/DariuszSikorra/spacex-graphql-app"},{id:4,name:"Todo List",linkText:"text linku czwartego",link:"https://dariuszsikorra.github.io/TodoList-Typescript/",image:Me.a,cardTextContent:r.a.createElement(r.a.Fragment,null,"My previous"," ",r.a.createElement("a",{key:"todo",href:"https://github.com/DariuszSikorra/TodoList-useHooks"},"Todo List")," ","rewrote into Typescript.",r.a.createElement("ul",null,r.a.createElement("li",null,"React.js with create-react-app-typescript as the main js library,"),r.a.createElement("li",null,"Typescript for strong type'ing,"),r.a.createElement("li",null,"Sass as a graphic postprocessor for easy page styling and BEM-like naming.")),"It's not as usual as it sounds! ;",")"),githubLink:"https://github.com/DariuszSikorra/TodoList-Typescript"}],Qe=Object(p.a)((function(e){return{container:{display:"flex",flexGrow:1,paddingTop:e.spacing(10),paddingBottom:e.spacing(4),alignItems:"center",padding:0,margin:0},title:{padding:e.spacing(2),color:"white"},text:{margin:"auto",display:"flex",padding:e.spacing(2),color:"white"},graphic:{width:400,padding:e.spacing(2)},cardsContainer:{padding:e.spacing(2),flexGrow:1},singleCardContainer:{}}})),Je=function(){var e=Qe();return r.a.createElement(_.a,{className:e.container,container:!0},r.a.createElement(_.a,{className:e.graphic,xs:12,sm:6,item:!0},r.a.createElement(q.a,{style:{width:"100%",height:"500px",backgroundImage:"url(".concat(ve.a,")"),backgroundPosition:"center",backgroundSize:"cover"},elevation:"13"})),r.a.createElement(_.a,{className:e.title,xs:12,sm:6,item:!0},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center"},"Projects")),r.a.createElement(_.a,{className:e.text,item:!0},r.a.createElement(k.a,{component:"h5",variant:"h5",align:"center"},"I am currently working on projects written with TypeScript in React.js. ",r.a.createElement("br",null),r.a.createElement("br",null),"I presented the most interesting projects in the following cards. All this projects and many more can be found on my"," ",r.a.createElement(s.b,{key:"contact",to:"/contact"},"github account"),".")),r.a.createElement(_.a,{container:!0,spacing:5,className:e.cardsContainer,justify:"space-around"},He.map((function(a){return r.a.createElement(_.a,{md:4,xs:12,item:!0,id:a.id,className:e.singleCardContainer},r.a.createElement(De,{card:a}))}))))},Ve=t(181),Xe=t.n(Ve),Ye=Object(p.a)((function(e){return{container:{display:"flex",flexGrow:1,paddingTop:e.spacing(10),paddingBottom:e.spacing(4),alignItems:"center",padding:0,margin:0},title:{padding:e.spacing(2),color:"white"},text:{margin:"auto",display:"flex",padding:e.spacing(2),color:"white"},graphic:{width:400,padding:e.spacing(2)},paper:{}}})),Ue=function(){var e=Ye();return r.a.createElement(_.a,{className:e.container,container:!0},r.a.createElement(_.a,{className:e.graphic,xs:12,sm:6,item:!0},r.a.createElement(q.a,{style:{width:"100%",height:"500px",backgroundImage:"url(".concat(Xe.a,")"),backgroundPosition:"center",backgroundSize:"cover"},elevation:"13"})),r.a.createElement(_.a,{className:e.title,xs:12,sm:6,item:!0},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center"},"Summary")),r.a.createElement(_.a,{className:e.text,item:!0},r.a.createElement(k.a,{component:"h5",variant:"h5",align:"center"},"I graduated from Gda\u0144sk University of Technology in the"," ",r.a.createElement("strong",null,"field of physics"),". I started my programming"," ",r.a.createElement("strong",null,"adventure")," during studies by using C++, creating a simulations of heat flow in solid bodies. I am looking for opportunities to learn in a ",r.a.createElement("strong",null,"professional")," development environment as a front-end developer.",r.a.createElement("br",null),r.a.createElement("br",null),"My goal is to become a front-end developer using the"," ",r.a.createElement("strong",null,"latest")," technologies!")))},$e=(t(346),t(182)),Ke=t.n($e),Ze=t(183),ea=t.n(Ze),aa=t(184),ta=t.n(aa),na=t(185),ra=t.n(na),ia=t(186),oa=t.n(ia),ca=t(187),la=t.n(ca),sa=t(188),ma=t.n(sa),pa=t(189),da=t.n(pa),ua=t(190),ga=t.n(ua),ha=t(412),Ea=t(413),fa=t(417),ba=t(416),xa=t(414),va=t(415),wa=Object(p.a)((function(e){return{root:{width:"100%",overflowX:"auto"},table:{},container:{display:"flex",flexGrow:1,paddingTop:e.spacing(10),paddingBottom:e.spacing(4),alignItems:"center",padding:0,margin:0},title:{padding:e.spacing(2),color:"white"},text:{margin:"auto",display:"flex",color:"white",flexDirection:"column",padding:e.spacing(2)},graphic:{width:400,padding:e.spacing(2)},paper:{}}})),ka=[la.a,ea.a,ta.a,ra.a,Ke.a,oa.a,ma.a,da.a,ga.a],ya=function(e,a,t){return{frontEnd:e,design:a,devTools:t}},ja=[ya("HTML5","Css3 in Sass","npm"),ya("TypeScript with JS ES6+","Bootstrap/TailWind","Chrome Dev Tools"),ya("React.js 16+","Adobe Photoshop","GIT"),ya("Apollo with GraphQL","","MacOS/Windows")],Sa=[{id:1,name:"Home",path:"/",component:ge,exact:!0},{id:2,name:"Summmary",path:"/summary",component:Ue,exact:!1},{id:3,name:"Technologies",path:"/technologies",component:function(){var e=wa();return r.a.createElement(_.a,{className:e.container,container:!0},r.a.createElement(_.a,{className:e.graphic,xs:12,sm:6,item:!0},r.a.createElement("div",{className:"main__photoContainer main__photoContainer--technologies"},r.a.createElement("ul",{class:"circle-container"},ka.map((function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e,alt:"..."}))}))))),r.a.createElement(_.a,{className:e.title,xs:12,sm:6,item:!0},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center"},"Technologies")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_.a,{className:e.text,item:!0},r.a.createElement(k.a,{component:"h5",variant:"h5",align:"center"},"I am a novice developer constantly broadening my horizons. Here are the main technologies I use:"),r.a.createElement("br",null),r.a.createElement(ha.a,{component:q.a},r.a.createElement(Ea.a,{className:e.table,"aria-label":"simple table",size:"small"},r.a.createElement(xa.a,{component:"thead"},r.a.createElement(va.a,null,r.a.createElement(ba.a,{align:"center"},r.a.createElement("strong",null,"Front-end")),r.a.createElement(ba.a,{align:"center"},r.a.createElement("strong",null,"Design")),r.a.createElement(ba.a,{align:"center"},r.a.createElement("strong",null,"Dev Tools")))),r.a.createElement(fa.a,null,ja.map((function(e){return r.a.createElement(va.a,{key:e.name},r.a.createElement(ba.a,{align:"center"},e.frontEnd),r.a.createElement(ba.a,{align:"center"},e.design),r.a.createElement(ba.a,{align:"center"},e.devTools))}))))),r.a.createElement("br",null),r.a.createElement(k.a,{component:"h5",variant:"h5",align:"center"},"I am intrested in all technologies that can improve my workflow.")))},exact:!1},{id:4,name:"Interests",path:"/interests",component:be,exact:!1},{id:5,name:"Projects",path:"/projects",component:Je,exact:!1},{id:6,name:"Contact",path:"/contact",component:me,exact:!1}],Ia=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},toolbar:{background:"#424242"},appBarShift:{width:"calc(100% - ".concat(200,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:200},title:{flexGrow:1},hide:{display:"none"},drawer:{width:200,flexShrink:0},drawerPaper:{width:200,background:"#424242",color:"white"},drawerHeader:Object(g.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-200},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0}}}));function Na(e){var a=e.children,t=e.window,n=Object(P.a)({target:t?t():void 0});return r.a.createElement(A.a,{appear:!1,direction:"down",in:!n},a)}function Ta(e){var a=r.a.useMemo((function(){return r.a.forwardRef((function(a,t){return r.a.createElement(s.b,Object.assign({to:e.route.path},a,{innerRef:t}))}))}),[e.route.path]);return r.a.createElement(z.a,{button:!0,component:a},r.a.createElement(B.a,{primary:e.route.name}))}var Oa=function(){var e=Ia(),a=Object(E.a)(),t=r.a.useState(!1),n=Object(u.a)(t,2),i=n[0],o=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(v.a,null),r.a.createElement(Na,null,r.a.createElement(b.a,{className:Object(h.a)(e.appBar,Object(d.a)({},e.appBarShift,i))},r.a.createElement(x.a,{className:e.toolbar},r.a.createElement(k.a,{variant:"h6",noWrap:!0,className:e.title},"MSc Dariusz Sikorra"),r.a.createElement(j.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){o(!0)},className:Object(h.a)(i&&e.hide)},r.a.createElement(I.a,null))))),r.a.createElement(f.a,{className:e.drawer,variant:"persistent",anchor:"right",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(j.a,{style:{color:"white"},onClick:function(){o(!1)}},"rtl"===a.direction?r.a.createElement(T.a,null):r.a.createElement(C.a,null))),r.a.createElement(y.a,null),r.a.createElement(w.a,null,Sa.map((function(e){return r.a.createElement(Ta,{route:e})}))),r.a.createElement(y.a,null)))},Ca=t(43);var za=function(){return r.a.createElement("h1",null,"This site does not exist")},Ba=function(e){var a=Object(n.useContext)(Ca.d).location;return Object(m.c)(a,(function(e){return e.pathname}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:1}}).map((function(e){var a=e.item,t=e.props,n=e.key;return r.a.createElement(m.a.div,{className:"app__main",key:n,style:t},r.a.createElement(Ca.c,{location:a},Sa.map((function(e){return r.a.createElement(Ca.a,{key:e.id,path:e.path,exact:e.exact,component:e.component})})),r.a.createElement(Ca.a,{component:za})))}))},Pa=t(428),Aa=Object(p.a)({mainBox:{background:"#424242",display:"flex",flexDirection:"row"},backgroundBox:{flexGrow:1,height:"100vh",position:"sticky",top:0},containerBox:{minHeight:"100vh"}});var Da=function(){var e=Aa(),a="linear-gradient(-35deg, black 10%, rgb(73, 73, 73) 10% 20%, rgb(112, 112, 112) 20% 30%, rgb(140, 140, 140) 30% 40%, rgb(251, 140, 0) 40%)",t="linear-gradient(-35deg, black 8%, rgb(73, 73, 73) 8% 22%, rgb(112, 112, 112) 22% 28%, rgb(140, 140, 140) 28% 41%, rgb(251, 140, 0) 40.5%)",n=Object(m.b)({from:{background:a,backgroundSize:"100% 100vh",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat"},to:function(e){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,l.a.awrap(e({background:t}));case 3:return n.next=5,l.a.awrap(e({background:a}));case 5:n.next=0;break;case 7:case"end":return n.stop()}}))},config:{mass:5,tension:100,friction:10}});return r.a.createElement(s.a,{basename:"/portfolio-mk3"},r.a.createElement(Pa.a,{className:e.mainBox},r.a.createElement(Pa.a,{sticky:!0,className:e.backgroundBox}),r.a.createElement(m.a.div,{style:n},r.a.createElement(je.a,{fixed:!0,maxWidth:"md",className:e.containerBox},r.a.createElement(Oa,null),r.a.createElement(Ba,null))),r.a.createElement(Pa.a,{className:e.backgroundBox})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Da,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[207,1,2]]]);
//# sourceMappingURL=main.3afe4ff1.chunk.js.map