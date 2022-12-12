import{i as p,t as F,l as re,r as ge,o,e as l,b as e,C as u,v as a,a as d,I as V,E as C,H as P,d as U,D as q,A as b,F as O,y as W,x as $,w as j,f as ve,g as _e,_ as c,B as me,c as fe}from"./index.bb9017d7.js";import{a as x,u as be}from"./axios-config.00f1bc9e.js";import"./q.46bf44c9.js";const he={class:"popup-add-magazine-container"},ze={class:"popup-add-magazine-container-head"},ye=e("p",null,"Add Magazine",-1),Me={class:"popup-add-magazine-container-box"},ke={class:"input-box"},De=e("p",null,"Magazine Title",-1),Ce={class:"input-box"},Pe=e("p",null,"Magazine Cover",-1),xe={class:"input-box"},$e=e("p",null,"Magazine Pdf File",-1),we={class:"input-box"},Fe=e("p",null,"Magazine Description",-1),qe={key:0,type:"submit"},Ee={key:1},Se=e("div",{class:"loader"},null,-1),Ve={class:"popup-edit-magazine-container"},Ue={class:"popup-edit-magazine-container-head"},Te=e("p",null,"Edit Magazine",-1),Ie={class:"popup-edit-magazine-container-box"},Le={class:"popup-edit-magazine-container-box-cover"},Ae={class:"popup-edit-magazine-container-box-cover-img"},Ne=["src"],Be={class:"input-box"},Re=e("p",null,"Magazine Title",-1),Ge={class:"input-box"},He=e("p",null,"Magazine Cover",-1),Ke={class:"input-box"},Oe=e("p",null,"Magazine Pdf File",-1),je={class:"input-box"},Je=e("p",null,"Magazine Description",-1),Qe={key:0,type:"submit"},We={key:1},Xe=e("div",{class:"loader"},null,-1),Ye={class:"popup-pgs-magazine-container"},Ze={class:"popup-pgs-magazine-container-head"},et={class:"popup-pgs-magazine-container-box"},tt={class:"pgs-table"},at=ve('<div class="pgs-table-head"><div class="pgs-table-head-item">No</div><div class="pgs-table-head-item">Image</div><div class="pgs-table-head-item">File</div><div class="pgs-table-head-item">Action</div></div>',1),it={class:"pgs-table-body"},st={key:0,class:"loader"},nt={class:"pgs-table-body-container-item no"},ot={class:"pgs-table-body-container-item img"},lt=["onClick"],dt={key:0,class:"pgs-table-body-container-item img-detail"},pt={class:"pgs-table-body-container-item file"},ct={class:"pgs-table-body-container-item action"},ut=["onClick"],rt=["onClick"],gt={key:0,class:"loader"},vt={key:2,class:"pgs-table-not-found"},_t=e("p",null,"The page does not exist or has not been filled in",-1),mt=[_t],ft={class:"pgs-table-popup-update-file-container"},bt={class:"pgs-table-popup-update-file-head"},ht={class:"pgs-table-popup-update-file-box"},zt={class:"pgs-table-popup-update-file-box-input"},yt={class:"pgs-table-popup-update-file-box-input"},Mt=e("button",{type:"submit"},"submit",-1),kt={class:"pgs-table-popup-update-file-container"},Dt={class:"pgs-table-popup-update-file-head"},Ct={class:"pgs-table-popup-update-file-box"},Pt={class:"pgs-table-popup-update-file-box-input"},xt={class:"pgs-table-popup-update-file-box-input"},$t=e("button",{type:"submit"},"submit",-1),wt={class:"DMagazine"},Ft={class:"DMagazine-container-1"},qt={class:"DMagazine-container-1-head"},Et=e("div",{class:"DMagazine-container-1-head-title"},[e("img",{src:_e,alt:""}),e("p",null,"Dashboard")],-1),St={key:0,type:"text",placeholder:"Search Magazine..."},Vt={key:1,type:"text",placeholder:"Search"},Ut={class:"DMagazine-container-1-content"},Tt={class:"DMagazine-container-1-content-head"},It=e("p",null,"All",-1),Lt=e("p",null,"Education",-1),At=e("p",null,"Kuliner",-1),Nt={class:"DMagazine-container-1-content-info"},Bt={key:0,class:"loader"},Rt=["onClick"],Gt={class:"DMagazine-container-1-content-info-box-img"},Ht=["src"],Kt={class:"DMagazine-container-1-content-info-box-title"},Ot={class:"DMagazine-container-2-top"},jt={class:"DMagazine-container-2-top-img"},Jt=["src"],Qt={class:"DMagazine-container-2-bottom"},Wt={class:"DMagazine-container-2-bottom-info"},Xt={class:"DMagazine-container-2-bottom-info-title"},Yt={key:0,class:"DMagazine-container-2-bottom-info-action"},Zt={key:0,class:"DMagazine-container-2-bottom-info-action-delete"},ea=e("div",{class:"loader"},null,-1),ta=[ea],aa={key:1,class:"DMagazine-container-2-bottom-info-desc"},la={__name:"Magazine",setup(ia){let y=p(!1),v=p(!1),_=p(!1),f=p(!1);var h=p(!1);let M=p(!1),k=p(!1),T=p(!1),I=p(!1),L=p(!1),A=p(!1),z=p(!1),N=p(!1),B=p(!1),R=p(!1),G=p(!1),H=be;const J=F({items:[]}),K=F({items:[]}),g=F({title:"",description:"",cover:"",pdf_file:""}),D=F({id:"",imgFile:"",page:""}),X=()=>{g.title=null,g.description=null,document.querySelector("input").value=null,g.cover=null,g.pdf_file=null},Y=n=>{g.cover=n.target.files[0]},Z=n=>{g.pdf_file=n.target.files[0]},ee=n=>{s.pdf_file=n.target.files[0]},te=n=>{s.cover=n.target.files[0]},ae=n=>{D.imgFile=n.target.files[0]},ie=n=>{r.img=n.target.files[0]},E=async()=>{N.value=!0;const{data:n}=await x.get("/magazine");console.log(n),J.items=n.data,T.value=!1,N.value=!1},S=async n=>{G.value=!0,A.value=!1;const{data:t}=await x.get(`/detail-magazine/${n}`);K.items=t.data,G.value=!1,K.items==0&&(A.value=!0)},se=async()=>{p([]);const n=new FormData;n.append("title",g.title),n.append("description",g.description),n.append("cover",g.cover),n.append("pdf_file",g.pdf_file),T.value=!0,await x.post("/magazine",n),alert("submited"),X(),v.value=!v,E()},ne=async n=>{const t=new FormData;t.append("magazine_id",D.id),t.append("img_file",D.imgFile),t.append("page",D.page),await x.post("/detail-magazine",t),M.value=!1,S(n)},oe=async n=>{I.value=!0;const t=new FormData;t.append("title",s.title),t.append("description",s.desc),t.append("cover",s.cover),t.append("pdf_file",s.pdf_file),await x.post(`/magazine/${s.id}?_method=PUT`,t),I.value=!1,_.value=!1,E()},le=async(n,t)=>{const m=new FormData;m.append("magazine_id",r.idPgs),m.append("img_file",r.img),m.append("page",r.page),await x.post(`/detail-magazine/${n}?_method=PUT`,m),k.value=!1,S(t)},de=async()=>{B.value=!0,await x.delete(`/magazine/${s.id}`),alert("data berhasil di hapus"),ce(),B.value=!1,E()},pe=async(n,t)=>{R.value=!0,await x.delete(`/detail-magazine/${n}`),R.value=!1,alert("data berhasil di hapus"),S(t)};re(()=>{E()});const ce=()=>{s.id="",s.title="Click Magazine To Detail",s.cover="/src/assets/img/emptyImage.svg",s.desc="Detail magazine description",s.pdf_file=""};let s=F({id:"",title:"Click Magazine To Detail",cover:"/src/assets/img/emptyImage.svg",desc:"Detail magazine description",pdf_file:""});function ue(n,t,m,i,w){s.id=n,s.title=t,s.cover=H+m,s.desc=i,s.pdf_file=w,L.value=!0}let r=F({id:"",idPgs:"",img:"",page:""});function Q(n,t,m,i){r.id=n,r.idPgs=t,r.img=m,r.page=i}return(n,t)=>{const m=ge("RouterLink");return o(),l(O,null,[e("div",{class:q(["popup-add-magazine",[a(v)?"show":"hide"]])},[e("div",he,[e("div",ze,[ye,e("div",{onClick:t[0]||(t[0]=i=>u(v)?v.value=!a(v):v=!a(v))},[d(c,{name:"close"})])]),e("div",Me,[e("form",{class:"popup-add-magazine-container-box-form",onSubmit:t[3]||(t[3]=V(i=>se(),["prevent"]))},[e("div",ke,[De,C(e("input",{type:"text",required:"","onUpdate:modelValue":t[1]||(t[1]=i=>g.title=i)},null,512),[[P,g.title]])]),e("div",Ce,[Pe,e("input",{type:"file",required:"",onChange:Y},null,32)]),e("div",xe,[$e,e("input",{type:"file",required:"",onChange:Z},null,32)]),e("div",we,[Fe,C(e("textarea",{name:"",required:"","onUpdate:modelValue":t[2]||(t[2]=i=>g.description=i)},null,512),[[P,g.description]])]),a(T)==!1?(o(),l("button",qe,"Finish")):(o(),l("button",Ee,[U(" Loading "),Se]))],32)])])],2),e("div",{class:q(["popup-edit-magazine",[a(_)?"show":"hide"]])},[e("div",Ve,[e("div",Ue,[Te,e("div",{onClick:t[4]||(t[4]=i=>u(_)?_.value=!a(_):_=!a(_))},[d(c,{name:"close"})])]),e("div",Ie,[e("div",Le,[e("div",Ae,[e("img",{src:a(s).cover,alt:""},null,8,Ne)])]),e("form",{class:"popup-edit-magazine-container-box-form",onSubmit:t[7]||(t[7]=V(i=>oe(),["prevent"]))},[e("div",Be,[Re,C(e("input",{type:"text",required:"","onUpdate:modelValue":t[5]||(t[5]=i=>a(s).title=i)},null,512),[[P,a(s).title]])]),e("div",Ge,[He,e("input",{type:"file",required:"",onChange:te},null,32)]),e("div",Ke,[Oe,e("input",{type:"file",required:"",onChange:ee},null,32)]),e("div",je,[Je,C(e("textarea",{name:"",required:"","onUpdate:modelValue":t[6]||(t[6]=i=>a(s).desc=i)},null,512),[[P,a(s).desc]])]),a(I)==!1?(o(),l("button",Qe," Finish ")):(o(),l("button",We,[U(" Loading "),Xe]))],32)])])],2),e("div",{class:q(["popup-pgs-magazine",[a(f)?"show":"hide"]])},[e("div",Ye,[e("div",Ze,[e("p",null,[U(b(a(s).title)+" pages ",1),e("span",null,"ID : "+b(a(s).id),1)]),e("div",{onClick:t[8]||(t[8]=i=>u(f)?f.value=!a(f):f=!a(f))},[d(c,{name:"close"})])]),e("div",et,[e("div",tt,[e("div",{class:"pgs-table-btn-add",onClick:t[9]||(t[9]=i=>u(M)?M.value=!0:M=!0)},[d(c,{name:"plus"})]),at,e("div",it,[a(G)?(o(),l("div",st)):(o(!0),l(O,{key:1},W(K.items,i=>(o(),l("div",{class:"pgs-table-body-container",key:i.id},[e("div",nt,b(i.page),1),e("div",ot,[e("div",{class:"pgs-table-body-container-item img-btn",onClick:w=>(u(h)?h.value=!a(h):h=!a(h),Q(i.id,i.magazine_id,i.img_file,i.page))}," image here ",8,lt),a(h)?(o(),l("div",dt,[e("div",{style:me({background:`url(${a(H)+a(r).img})
                    no-repeat center`})},null,4),e("button",{onClick:t[10]||(t[10]=w=>u(h)?h.value=!1:h=!1)}," CLOSE ")])):$("",!0)]),e("div",pt,[e("p",null,b(i.img_file),1)]),e("div",ct,[e("div",{onClick:w=>(u(k)?k.value=!0:k=!0,Q(i.id,i.magazine_id,i.img_file,i.page)),class:"pgs-table-body-container-item action-edit"},[d(c,{name:"pencil"})],8,ut),e("div",{onClick:w=>pe(i.id,a(s).id),class:"pgs-table-body-container-item action-delete"},[a(R)?(o(),l("div",gt)):(o(),fe(c,{key:1,name:"trash"}))],8,rt)])]))),128)),a(A)?(o(),l("div",vt,mt)):$("",!0),a(k)?(o(),l("form",{key:3,onSubmit:t[14]||(t[14]=V(i=>le(a(r).id,a(s).id),["prevent"])),class:"pgs-table-popup-update-file"},[e("div",ft,[e("div",bt,[e("p",null,"Update Page "+b(a(r).page),1),e("p",{onClick:t[11]||(t[11]=i=>u(k)?k.value=!1:k=!1)},[d(c,{name:"close"})])]),e("div",ht,[e("div",zt,[C(e("input",{"onUpdate:modelValue":t[12]||(t[12]=i=>a(r).idPgs=i),type:"number",required:"",placeholder:"Id Magazine"},null,512),[[P,a(r).idPgs]])]),e("div",yt,[C(e("input",{"onUpdate:modelValue":t[13]||(t[13]=i=>a(r).page=i),type:"number",required:"",placeholder:"No Page"},null,512),[[P,a(r).page]])]),e("input",{type:"file",required:"",onChange:ie},null,32),Mt])])],32)):$("",!0),a(M)?(o(),l("form",{key:4,onSubmit:t[18]||(t[18]=V(i=>ne(a(s).id),["prevent"])),class:"pgs-table-popup-update-file"},[e("div",kt,[e("div",Dt,[e("p",null,"Add Page "+b(a(s).title),1),e("p",{onClick:t[15]||(t[15]=i=>u(M)?M.value=!1:M=!1)},[d(c,{name:"close"})])]),e("div",Ct,[e("div",Pt,[C(e("input",{type:"number",required:"",placeholder:"Id Magazine","onUpdate:modelValue":t[16]||(t[16]=i=>D.id=i)},null,512),[[P,D.id]])]),e("div",xt,[C(e("input",{type:"number",required:"",placeholder:"No Page","onUpdate:modelValue":t[17]||(t[17]=i=>D.page=i)},null,512),[[P,D.page]])]),e("input",{type:"file",required:"",onChange:ae},null,32),$t])])],32)):$("",!0)])])])])],2),e("div",wt,[e("div",Ft,[e("div",qt,[Et,e("div",{class:q(["DMagazine-container-1-head-search",{active:a(y)}]),onMouseover:t[19]||(t[19]=i=>u(y)?y.value=!0:y=!0),onMouseleave:t[20]||(t[20]=i=>u(y)?y.value=!1:y=!1)},[d(c,{name:"search"}),a(y)?(o(),l("input",St)):(o(),l("input",Vt))],34)]),e("div",Ut,[e("div",Tt,[d(m,{"active-class":"active",to:"",class:"DMagazine-container-1-content-head-item"},{default:j(()=>[d(c,{name:"grid"}),It]),_:1}),d(m,{to:"",class:"DMagazine-container-1-content-head-item"},{default:j(()=>[d(c,{name:"book-education"}),Lt]),_:1}),d(m,{to:"",class:"DMagazine-container-1-content-head-item"},{default:j(()=>[d(c,{name:"book-globe"}),At]),_:1})]),e("div",Nt,[e("button",{class:"btn-add-magazine",onClick:t[21]||(t[21]=i=>u(v)?v.value=!a(v):v=!a(v))},[d(c,{name:"plus"})]),a(N)?(o(),l("div",Bt)):$("",!0),(o(!0),l(O,null,W(J.items,i=>(o(),l("div",{class:"DMagazine-container-1-content-info-box",onClick:w=>(ue(i.id,i.title,i.cover,i.description,i.pdf_file),u(z)?z.value=!0:z=!0)},[e("div",Gt,[e("img",{src:a(H)+i.cover,alt:""},null,8,Ht)]),e("div",Kt,[e("p",null,b(i.title),1),e("p",null,b(i.description),1)])],8,Rt))),256))])])]),e("div",{class:q(["DMagazine-container-2",[a(z)?"width-30rem":"width-0"]])},[e("div",{class:"DMagazine-container-2-close",onClick:t[22]||(t[22]=i=>u(z)?z.value=!a(z):z=!a(z))},[d(c,{name:"double-left"})]),e("div",Ot,[e("div",jt,[e("img",{src:a(s).cover,alt:""},null,8,Jt)])]),e("div",Qt,[e("div",Wt,[e("div",Xt,[e("p",null,b(a(s).title),1)]),a(L)?(o(),l("div",Yt,[e("div",{class:"DMagazine-container-2-bottom-info-action-pgs",onClick:t[23]||(t[23]=i=>(u(f)?f.value=!a(f):f=!a(f),S(a(s).id)))},[U(" PAGES "),d(c,{name:"page"})]),e("div",{class:"DMagazine-container-2-bottom-info-action-edit",onClick:t[24]||(t[24]=i=>u(_)?_.value=!a(_):_=!a(_))},[d(c,{name:"pencil"})]),a(B)?(o(),l("div",Zt,ta)):(o(),l("div",{key:1,class:"DMagazine-container-2-bottom-info-action-delete",onClick:t[25]||(t[25]=i=>de(a(s).id))},[d(c,{name:"trash"})]))])):$("",!0),a(L)?(o(),l("div",aa,b(a(s).desc),1)):$("",!0)])])],2)])],64)}}};export{la as default};