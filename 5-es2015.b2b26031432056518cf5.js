(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9m5P":function(e,t,n){"use strict";n.r(t),n.d(t,"DevTestModule",(function(){return S}));var i=n("tyNb"),a=n("/Eym"),s=n("fXoL"),l=n("PScX"),c=n("w1IW");let o=(()=>{class e{constructor(e){this.msg=e,this.schema={properties:{start:{type:"string",ui:{widget:"date",end:"end"},default:new Date},end:{type:"string",default:Object(a.a)(new Date,6)}},required:["start"]}}submit(e){this.msg.success(JSON.stringify(e))}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(l.b))},e.\u0275cmp=s.Jb({type:e,selectors:[["app-demo"]],decls:1,vars:1,consts:[[3,"schema","formSubmit"]],template:function(e,t){1&e&&(s.Vb(0,"sf",0),s.cc("formSubmit",(function(e){return t.submit(e)})),s.Ub()),2&e&&s.oc("schema",t.schema)},directives:[c.a],encapsulation:2}),e})();var d=n("PCNd"),r=n("ByMC");let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Jb({type:e,selectors:[["dev-home"]],decls:2,vars:1,consts:[[3,"autoBreadcrumb"]],template:function(e,t){1&e&&(s.Qb(0,"page-header",0),s.Pc(1," home ")),2&e&&s.oc("autoBreadcrumb",!1)},directives:[r.a],encapsulation:2}),e})();var b=n("zwnO"),p=n("kVq8"),h=n("FwiY"),m=n("C2AL"),g=n("Nqz0"),v=n("ZE2D"),f=n("Q8cG"),y=n("CCNn"),x=n("UKzi"),w=n("sYmb");const _=function(){return["/dev"]},k=[p.Y,p.ab,p.gb,p.hb,p.M,p.L,p.c,p.W,p.cb,p.sb,p.X,p.A,p.O,p.N,p.a];let z=(()=>{class e{constructor(e,t,n,i,a){this.menuSrv=t,this.settings=n,this.msgSrv=i,this.i18n=a,this.lang="zh-CN",this.menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5,disabled:!0},{text:"\u6d4b\u8bd5view1-id",link:"/dev/view/1"},{text:"\u6d4b\u8bd5view2-id",link:"/dev/view/2"},{text:"lazy\u6d4b\u8bd51",link:"/dev/lazy/p1"},{text:"lazy\u6d4b\u8bd52",link:"/dev/lazy/p2"},{text:"lazy\u6d4b\u8bd5view1-id",link:"/dev/lazy/1/view"},{text:"lazy\u6d4b\u8bd5view2-id",link:"/dev/lazy/2/view"},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]}]}],this.customContextMenu=[{id:"custom1",title:"\u81ea\u5b9a\u4e491",fn:(e,t)=>{console.log("\u81ea\u5b9a\u4e491",e,t)}},{id:"custom2",title:"\u81ea\u5b9a\u4e492",disabled:()=>!0,fn:(e,t)=>{console.log("\u81ea\u5b9a\u4e492",e,t)}}],e.addIcon(...k)}get isFixed(){return this.settings.layout.fixed}get isBoxed(){return this.settings.layout.boxed}get isCollapsed(){return this.settings.layout.collapsed}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang="zh-CN"===this.lang?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add(this.menus)}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(h.c),s.Pb(b.h),s.Pb(b.l),s.Pb(l.b),s.Pb(b.a))},e.\u0275cmp=s.Jb({type:e,selectors:[["dev-layout"]],hostVars:8,hostBindings:function(e,t){2&e&&s.Hb("alain-default",!0)("alain-default__fixed",t.isFixed)("alain-default__boxed",t.isBoxed)("alain-default__collapsed",t.isCollapsed)},decls:39,vars:21,consts:[[1,"alain-default__header"],[1,"alain-default__header-logo"],[1,"alain-default__header-logo-link",3,"routerLink"],["src","./assets/img/logo-full.svg",1,"alain-default__header-logo-expanded",2,"max-height","40px",3,"alt"],["src","./assets/img/logo.svg",1,"alain-default__header-logo-collapsed",2,"max-height","30px",3,"alt"],[1,"alain-default__nav-wrap"],[1,"alain-default__nav"],[1,"alain-default__nav-item",3,"click"],["nz-icon","",3,"nzType"],[1,"alain-default__aside"],[1,"alain-default__aside-inner"],["nz-dropdown","","nzTrigger","click",1,"alain-default__aside-user",3,"nzDropdownMenu"],["nzIcon","user",1,"alain-default__aside-user-avatar",3,"nzSize"],[1,"alain-default__aside-user-info"],[1,"text-truncate","mb0"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click"],[1,"d-block","py-lg"],[1,"alain-default__content"],[3,"mode","customContextMenu"],["reuseTab",""],[3,"activate"]],template:function(e,t){if(1&e){const e=s.Wb();s.Vb(0,"div",0),s.Vb(1,"div",1),s.Vb(2,"a",2),s.Qb(3,"img",3),s.Qb(4,"img",4),s.Ub(),s.Ub(),s.Vb(5,"div",5),s.Vb(6,"ul",6),s.Vb(7,"li"),s.Vb(8,"div",7),s.cc("click",(function(){return t.toggleCollapsedSideabar()})),s.Qb(9,"i",8),s.Ub(),s.Ub(),s.Vb(10,"li"),s.Vb(11,"div",7),s.cc("click",(function(){return t.toggleLang()})),s.Pc(12),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Vb(13,"div",9),s.Vb(14,"div",10),s.Vb(15,"div",11),s.Qb(16,"nz-avatar",12),s.Vb(17,"div",13),s.Vb(18,"strong"),s.Pc(19),s.Ub(),s.Vb(20,"p",14),s.Pc(21),s.Ub(),s.Ub(),s.Ub(),s.Vb(22,"nz-dropdown-menu",null,15),s.Vb(24,"ul",16),s.Vb(25,"li",17),s.cc("click",(function(){return t.msgSrv.success("profile")})),s.Pc(26),s.hc(27,"translate"),s.Ub(),s.Vb(28,"li",17),s.cc("click",(function(){return t.msgSrv.success("settings")})),s.Pc(29),s.hc(30,"translate"),s.Ub(),s.Vb(31,"li",17),s.cc("click",(function(){return t.msgSrv.success("logout")})),s.Pc(32),s.hc(33,"translate"),s.Ub(),s.Ub(),s.Ub(),s.Qb(34,"sidebar-nav",18),s.Ub(),s.Ub(),s.Vb(35,"section",19),s.Qb(36,"reuse-tab",20,21),s.Vb(38,"router-outlet",22),s.cc("activate",(function(t){return s.Bc(e),s.yc(37).activate(t)})),s.Ub(),s.Ub()}if(2&e){const e=s.yc(23);s.Bb(2),s.oc("routerLink",s.sc(20,_)),s.Bb(1),s.pc("alt",t.settings.app.name),s.Bb(1),s.pc("alt",t.settings.app.name),s.Bb(5),s.qc("nzType","menu-",t.settings.layout.collapsed?"unfold":"fold",""),s.Bb(3),s.Rc(" ",t.lang," "),s.Bb(3),s.oc("nzDropdownMenu",e),s.Bb(1),s.oc("nzSize","large"),s.Bb(3),s.Qc(t.settings.user.name),s.Bb(2),s.Qc(t.settings.user.email),s.Bb(5),s.Qc(s.ic(27,14,"profile")),s.Bb(3),s.Qc(s.ic(30,16,"settings")),s.Bb(3),s.Qc(s.ic(33,18,"logout")),s.Bb(4),s.oc("mode",2)("customContextMenu",t.customContextMenu)}},directives:[i.m,m.a,h.a,g.b,v.a,g.e,f.c,f.f,y.a,x.a,i.o],pipes:[w.b],encapsulation:2}),e})();var B=n("sWYD"),U=n("ofXK");let V=(()=>{class e{constructor(e){this.route=e,this.first=Object(B.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=Object(B.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("ngoninit"),this.route.params.subscribe(e=>this.id=+e.id)}_onReuseInit(){this.now=Object(B.a)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(i.a))},e.\u0275cmp=s.Jb({type:e,selectors:[["dev-page"]],decls:10,vars:12,template:function(e,t){1&e&&(s.Qb(0,"page-header"),s.Vb(1,"p"),s.Pc(2),s.hc(3,"json"),s.hc(4,"json"),s.Ub(),s.Vb(5,"p"),s.Pc(6),s.hc(7,"json"),s.Ub(),s.Pc(8),s.hc(9,"json")),2&e&&(s.Bb(2),s.Sc("first: ",s.ic(3,4,t.first),"\uff0cnow: ",s.ic(4,6,t.now),""),s.Bb(4),s.Rc("id: ",s.ic(7,8,t.id),""),s.Bb(2),s.Rc(" page: ",s.ic(9,10,t.route.url)," "))},directives:[r.a],pipes:[U.l],encapsulation:2}),e})();const P=[{path:"demo",component:o},{path:"",component:z,children:[{path:"",component:u},{path:"l1",component:V},{path:"l2",component:V},{path:"l3",component:V},{path:"l4",component:V},{path:"l5",component:V},{path:"l6",component:V},{path:"l7",component:V},{path:"l8",component:V},{path:"login",component:V},{path:"view/:id",component:V},{path:"lazy",loadChildren:()=>n.e(6).then(n.bind(null,"RhKi")).then(e=>e.DevLazyModule)}]}];let S=(()=>{class e{}return e.\u0275mod=s.Nb({type:e}),e.\u0275inj=s.Mb({factory:function(t){return new(t||e)},imports:[[d.a,i.n.forChild(P)]]}),e})()}}]);