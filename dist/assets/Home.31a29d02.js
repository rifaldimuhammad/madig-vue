import{R as O,_ as N,r as E,o as R,c as P,w as g,a as _,b as e,d as y,u as V,e as w,f as L,g as q}from"./index.bb9017d7.js";import{S as D,a as F}from"./swiper.min.688788fb.js";import{N as X,_ as A,a as Y,b as Z}from"./coverDepan.609ec76a.js";import{e as G,c as j,a as J}from"./create-shadow.5c0ac68e.js";import{_ as K}from"./_plugin-vue_export-helper.cdc0426e.js";function Q({swiper:t,duration:u,transformEl:i,allSlides:m}){const{slides:r,activeIndex:n,$wrapperEl:a}=t;if(t.params.virtualTranslate&&u!==0){let o=!1,d;m?d=i?r.find(i):r:d=i?r.eq(n).find(i):r.eq(n),d.transitionEnd(()=>{if(o||!t||t.destroyed)return;o=!0,t.animating=!1;const h=["webkitTransitionEnd","transitionend"];for(let f=0;f<h.length;f+=1)a.trigger(h[f])})}}function U({swiper:t,extendParams:u,on:i}){u({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),G({effect:"cards",swiper:t,on:i,setTranslate:()=>{const{slides:n,activeIndex:a}=t,o=t.params.cardsEffect,{startTranslate:d,isTouched:h}=t.touchEventsData,f=t.translate;for(let v=0;v<n.length;v+=1){const p=n.eq(v),T=p[0].progress,s=Math.min(Math.max(T,-4),4);let x=p[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(x-=n[0].swiperSlideOffset);let c=t.params.cssMode?-x-t.translate:-x,$=0;const B=-100*Math.abs(s);let b=1,k=-o.perSlideRotate*s,M=o.perSlideOffset-Math.abs(s)*.75;const S=t.virtual&&t.params.virtual.enabled?t.virtual.from+v:v,z=(S===a||S===a-1)&&s>0&&s<1&&(h||t.params.cssMode)&&f<d,C=(S===a||S===a+1)&&s<0&&s>-1&&(h||t.params.cssMode)&&f>d;if(z||C){const l=(1-Math.abs((Math.abs(s)-.5)/.5))**.5;k+=-28*s*l,b+=-.5*l,M+=96*l,$=`${-25*l*Math.abs(s)}%`}if(s<0?c=`calc(${c}px + (${M*Math.abs(s)}%))`:s>0?c=`calc(${c}px + (-${M*Math.abs(s)}%))`:c=`${c}px`,!t.isHorizontal()){const l=$;$=c,c=l}const H=s<0?`${1+(1-b)*s}`:`${1-(1-b)*s}`,I=`
        translate3d(${c}, ${$}, ${B}px)
        rotateZ(${o.rotate?k:0}deg)
        scale(${H})
      `;if(o.slideShadows){let l=p.find(".swiper-slide-shadow");l.length===0&&(l=j(o,p)),l.length&&(l[0].style.opacity=Math.min(Math.max((Math.abs(s)-.5)/.5,0),1))}p[0].style.zIndex=-Math.abs(Math.round(T))+n.length,J(o,p).transform(I)}},setTransition:n=>{const{transformEl:a}=t.params.cardsEffect;(a?t.slides.find(a):t.slides).transition(n).find(".swiper-slide-shadow").transition(n),Q({swiper:t,duration:n,transformEl:a})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}const W={components:{Swiper:D,SwiperSlide:F,RouterLink:O},setup(){return{modules:[U,X]}},data(){return{Icons:N}}},ee=e("div",{class:"home-slide-one"},[e("div",{class:"home-slide-one-title"},"Hello From Nesfol"),e("div",{class:"home-slide-one-box"},[e("div",{class:"home-slide-one-box-1"},[e("div",null,[e("span",null,"\u2713"),e("span",null,"Flip Book")]),e("div",null,[e("span",null,"\u2713"),e("span",null,"Scroll Reading")]),e("div",null,[e("span",null,"\u2713"),e("span",null,"Downloadable")]),e("div",null,[e("span",null,"\u2713"),e("span",null,"Bookmark")])]),e("div",{class:"home-slide-one-box-2"},[e("div",null,[e("span",null,"\u2713"),e("span",null,"Responsive")]),e("div",null,[e("span",null,"\u2713"),e("span",null,"Backsound")]),e("div",null,[e("span",null,"\u2713"),e("span",null,"Auto Scroll")]),e("div",null,[e("span",null,"\u2713"),e("span",null,"Slider Mode")])])])],-1),te=e("div",{class:"home-slide-two"},[e("div",{class:"home-slide-two-title"},"Example Magazine"),e("div",{class:"home-slide-two-box"},[e("img",{src:A,alt:""}),e("img",{src:Y,alt:""}),e("img",{src:Z,alt:""})])],-1),se={class:"home-slide-three"},ae=e("div",{class:"home-slide-three-title"},"Start Reading Magazine",-1);function ne(t,u,i,m,r,n){const a=E("swiper-slide"),o=E("RouterLink"),d=E("swiper");return R(),P(d,{effect:"cards",grabCursor:!0,modules:m.modules,navigation:!0,class:"mySwiper"},{default:g(()=>[_(a,null,{default:g(()=>[ee]),_:1}),_(a,null,{default:g(()=>[te]),_:1}),_(a,null,{default:g(()=>[e("div",se,[ae,_(o,{to:"/magazine"},{default:g(()=>[y("Get Started")]),_:1})])]),_:1})]),_:1},8,["modules"])}const oe=K(W,[["render",ne]]);const le={class:"home"},ie={class:"home-container"},re={class:"home-container-info"},ce=L('<div class="home-container-info-logo"><img src="'+q+'" alt=""><p>Nesfol</p></div><div class="home-container-info-title"><span>N</span>ew <span>E</span>nthu<span>S</span>iasm <span>FO</span>r <br><span>L</span>earning </div>',2),de=e("div",{class:"home-container-info-tema"},[e("p",null,"Bangkit Dari covid-19")],-1),me={class:"home-container-content"},ue={class:"home-container-content-box"},$e={__name:"Home",setup(t){const u=V();function i(m){u.push({name:m})}return(m,r)=>(R(),w("div",le,[e("div",ie,[e("div",re,[ce,e("div",{class:"home-container-info-btn",onClick:r[0]||(r[0]=n=>i("magazine"))},[y(" Start Reading "),_(N,{name:"chevron-right"})]),de]),e("div",me,[e("div",ue,[_(oe)])])])]))}};export{$e as default};