const We=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=l(i);fetch(i.href,o)}};We();function j(){}function Je(t){return t()}function Te(){return Object.create(null)}function P(t){t.forEach(Je)}function Xe(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let se;function je(t,e){return se||(se=document.createElement("a")),se.href=e,t===se.href}function Ye(t){return Object.keys(t).length===0}function c(t,e){t.appendChild(e)}function y(t,e,l){t.insertBefore(e,l||null)}function b(t){t.parentNode.removeChild(t)}function $e(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function m(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function $(){return O(" ")}function Se(){return O("")}function q(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function Q(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Ze(t){return Array.from(t.childNodes)}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ue(t,e){t.value=e==null?"":e}function H(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}let Ee;function J(t){Ee=t}const G=[],B=[],fe=[],ye=[],xe=Promise.resolve();let ke=!1;function et(){ke||(ke=!0,xe.then(Qe))}function we(t){fe.push(t)}function ce(t){ye.push(t)}const be=new Set;let ae=0;function Qe(){const t=Ee;do{for(;ae<G.length;){const e=G[ae];ae++,J(e),tt(e.$$)}for(J(null),G.length=0,ae=0;B.length;)B.pop()();for(let e=0;e<fe.length;e+=1){const l=fe[e];be.has(l)||(be.add(l),l())}fe.length=0}while(G.length);for(;ye.length;)ye.pop()();ke=!1,be.clear(),J(t)}function tt(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(we)}}const ue=new Set;let V;function R(){V={r:0,c:[],p:V}}function W(){V.r||P(V.c),V=V.p}function k(t,e){t&&t.i&&(ue.delete(t),t.i(e))}function N(t,e,l,n){if(t&&t.o){if(ue.has(t))return;ue.add(t),V.c.push(()=>{ue.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}}function de(t,e,l){const n=t.$$.props[e];n!==void 0&&(t.$$.bound[n]=l,l(t.$$.ctx[n]))}function X(t){t&&t.c()}function D(t,e,l,n){const{fragment:i,on_mount:o,on_destroy:r,after_update:a}=t.$$;i&&i.m(e,l),n||we(()=>{const s=o.map(Je).filter(Xe);r?r.push(...s):P(s),t.$$.on_mount=[]}),a.forEach(we)}function F(t,e){const l=t.$$;l.fragment!==null&&(P(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(G.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,l,n,i,o,r,a=[-1]){const s=Ee;J(t);const f=t.$$={fragment:null,ctx:null,props:o,update:j,not_equal:i,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Te(),dirty:a,skip_bound:!1,root:e.target||s.$$.root};r&&r(f.root);let h=!1;if(f.ctx=l?l(t,e.props||{},(u,d,...g)=>{const p=g.length?g[0]:d;return f.ctx&&i(f.ctx[u],f.ctx[u]=p)&&(!f.skip_bound&&f.bound[u]&&f.bound[u](p),h&&lt(t,u)),d}):[],f.update(),h=!0,P(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const u=Ze(e.target);f.fragment&&f.fragment.l(u),u.forEach(b)}else f.fragment&&f.fragment.c();e.intro&&k(t.$$.fragment),D(t,e.target,e.anchor,e.customElement),Qe()}J(s)}class x{$destroy(){F(this,1),this.$destroy=j}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const i=n.indexOf(l);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function it(t){let e;return{c(){e=m("footer"),e.innerHTML='<p>powered by <a href="themoviedb.org" class="svelte-546t3b">themoviedb.org</a></p>',_(e,"class","center svelte-546t3b")},m(l,n){y(l,e,n)},p:j,i:j,o:j,d(l){l&&b(e)}}}class nt extends x{constructor(e){super();Z(this,e,null,it,Y,{})}}function rt(t){let e,l,n,i,o,r,a,s,f;return{c(){e=m("ul"),l=m("li"),n=m("a"),n.innerHTML='<i class="material-icons">cloud</i>',i=$(),o=m("ul"),r=m("li"),a=m("a"),a.innerHTML='<i class="material-icons">search</i>',_(n,"href","./"),_(e,"class","left"),_(a,"href","#"),_(o,"class","right")},m(h,u){y(h,e,u),c(e,l),c(l,n),y(h,i,u),y(h,o,u),c(o,r),c(r,a),s||(f=[q(n,"click",Q(t[5])),q(a,"click",Q(t[3]))],s=!0)},p:j,d(h){h&&b(e),h&&b(i),h&&b(o),s=!1,P(f)}}}function ot(t){let e,l,n,i,o,r;return{c(){e=m("form"),l=m("input"),n=$(),i=m("i"),i.textContent="close",_(l,"type","text"),_(l,"class","white"),_(l,"placeholder","search for movie..."),_(e,"action","#"),_(i,"class","material-icons"),H(i,"position","absolute"),H(i,"z-index","3"),H(i,"cursor","pointer"),H(i,"top","0"),H(i,"right","0"),H(i,"color","gray")},m(a,s){y(a,e,s),c(e,l),Ue(l,t[0]),y(a,n,s),y(a,i,s),o||(r=[q(l,"input",t[4]),q(e,"submit",Q(at)),q(i,"click",Q(t[3]))],o=!0)},p(a,s){s&1&&l.value!==a[0]&&Ue(l,a[0])},d(a){a&&b(e),a&&b(n),a&&b(i),o=!1,P(r)}}}function st(t){let e,l;function n(r,a){return r[2]?ot:rt}let i=n(t),o=i(t);return{c(){e=m("nav"),l=m("div"),o.c(),_(l,"class","nav-wrapper"),_(e,"class","transparent")},m(r,a){y(r,e,a),c(e,l),o.m(l,null)},p(r,[a]){i===(i=n(r))&&o?o.p(r,a):(o.d(1),o=i(r),o&&(o.c(),o.m(l,null)))},i:j,o:j,d(r){r&&b(e),o.d()}}}function at(){}function ft(t,e,l){let n=!1;function i(){l(2,n=!n),l(0,o="")}let{search:o=""}=e,{tab:r}=e;function a(){o=this.value,l(0,o)}const s=()=>{l(1,r=1)};return t.$$set=f=>{"search"in f&&l(0,o=f.search),"tab"in f&&l(1,r=f.tab)},[o,r,n,i,a,s]}class ut extends x{constructor(e){super();Z(this,e,ft,st,Y,{search:0,tab:1})}}function He(t,e,l){const n=t.slice();return n[8]=e[l],n}function Pe(t){let e,l=(t[1]||"other movies")+"",n,i,o,r,a=t[0],s=[];for(let f=0;f<a.length;f+=1)s[f]=Ve(He(t,a,f));return{c(){e=m("h4"),n=O(l),i=$(),o=m("div"),r=m("ul");for(let f=0;f<s.length;f+=1)s[f].c();_(r,"class","hs full no-scrollbar svelte-547p9h"),_(o,"class","contain app svelte-547p9h")},m(f,h){y(f,e,h),c(e,n),y(f,i,h),y(f,o,h),c(o,r);for(let u=0;u<s.length;u+=1)s[u].m(r,null)},p(f,h){if(h&2&&l!==(l=(f[1]||"other movies")+"")&&U(n,l),h&5){a=f[0];let u;for(u=0;u<a.length;u+=1){const d=He(f,a,u);s[u]?s[u].p(d,h):(s[u]=Ve(d),s[u].c(),s[u].m(r,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=a.length}},d(f){f&&b(e),f&&b(i),f&&b(o),$e(s,f)}}}function Ve(t){let e,l,n,i,o,r=(t[8].title||t[8].name)+"",a,s,f,h=(t[8].release_date||t[8].character)+"",u,d,g,p;function w(){return t[6](t[8])}return{c(){e=m("li"),l=m("img"),i=$(),o=m("div"),a=O(r),s=$(),f=m("span"),u=O(h),d=$(),_(l,"data-src",n="https://image.tmdb.org/t/p/w185"+(t[8].poster_path||t[8].profile_path)),_(l,"alt",""),_(l,"class","lazyload svelte-547p9h"),_(o,"class","flow-text cal svelte-547p9h"),_(f,"class","svelte-547p9h"),_(e,"class","item flow-text svelte-547p9h"),_(e,"loading","lazy")},m(A,M){y(A,e,M),c(e,l),c(e,i),c(e,o),c(o,a),c(e,s),c(e,f),c(f,u),c(e,d),g||(p=[q(l,"error",t[5]),q(e,"click",Q(w))],g=!0)},p(A,M){t=A,M&1&&n!==(n="https://image.tmdb.org/t/p/w185"+(t[8].poster_path||t[8].profile_path))&&_(l,"data-src",n),M&1&&r!==(r=(t[8].title||t[8].name)+"")&&U(a,r),M&1&&h!==(h=(t[8].release_date||t[8].character)+"")&&U(u,h)},d(A){A&&b(e),g=!1,P(p)}}}function ct(t){let e,l=t[0].length&&Pe(t);return{c(){l&&l.c(),e=Se()},m(n,i){l&&l.m(n,i),y(n,e,i)},p(n,[i]){n[0].length?l?l.p(n,i):(l=Pe(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:j,o:j,d(n){l&&l.d(n),n&&b(e)}}}function dt(t,e,l){let{data:n=[]}=e,{url:i=""}=e,{title:o=""}=e,{movie:r=""}=e;async function a(u){!u||(u+="&api_key=bbfbd3744c8bf9d4bf9de18f180b4d6c",await fetch(u).then(d=>d.json()).then(d=>{l(0,n=d.results||[])}))}function s(u){!i||l(3,r=u)}const f=u=>{u.srcElement.src="/public/unknown.svg",console.log(u)},h=u=>{s(u.id)};return t.$$set=u=>{"data"in u&&l(0,n=u.data),"url"in u&&l(4,i=u.url),"title"in u&&l(1,o=u.title),"movie"in u&&l(3,r=u.movie)},t.$$.update=()=>{t.$$.dirty&16&&a(i)},[n,o,s,r,i,f,h]}class Re extends x{constructor(e){super();Z(this,e,dt,ct,Y,{data:0,url:4,title:1,movie:3})}}function qe(t,e,l){const n=t.slice();return n[6]=e[l],n}function ze(t){let e,l,n,i,o,r,a,s,f=t[0].vote_average+"",h,u,d,g,p=(t[0].title||"loading...")+"",w,A,M,pe,I,ee=t[0].runtime+"",_e,Le,Ne,te,le=t[0].tagline+"",me,Ce,he,Me,ie,ne,re=(t[0].overview||"loading...")+"",ve,Ae,oe,ge,K,T,z=t[1],C=[];for(let v=0;v<z.length;v+=1)C[v]=Be(qe(t,z,v));let S=t[2]&&De(t);return{c(){e=m("div"),l=m("div"),n=m("div"),i=m("div"),o=m("img"),a=$(),s=m("span"),h=O(f),u=$(),d=m("div"),g=m("h3"),w=O(p),A=$(),M=m("div");for(let v=0;v<C.length;v+=1)C[v].c();pe=$(),I=m("div"),_e=O(ee),Le=O(" min"),Ne=$(),te=m("p"),me=O(le),Ce=$(),he=m("h4"),he.innerHTML="<b>OverView</b>",Me=$(),ie=m("div"),ne=m("p"),ve=O(re),Ae=$(),oe=m("div"),oe.innerHTML=`<h4><b>Trailer</b></h4> 
              <div class="video-container"></div>`,ge=$(),S&&S.c(),K=Se(),je(o.src,r="https://image.tmdb.org/t/p/w185"+t[0].poster_path)||_(o,"src",r),_(o,"alt",""),_(o,"class","svelte-7pkelf"),_(s,"class","rating  svelte-7pkelf"),_(i,"class","co-img svelte-7pkelf"),_(n,"class","img svelte-7pkelf"),H(n,"background-image","url("+("https://image.tmdb.org/t/p/w185"+t[0].backdrop_path)+")"),_(g,"class","card-title svelte-7pkelf"),_(I,"class","chip time svelte-7pkelf"),_(M,"class","row svelte-7pkelf"),_(te,"class","tagline svelte-7pkelf"),_(ne,"class","flow-text"),_(ie,"class","row svelte-7pkelf"),_(oe,"class","row svelte-7pkelf"),_(d,"class","card-content "),_(l,"class","col s12 center svelte-7pkelf")},m(v,E){y(v,e,E),c(e,l),c(l,n),c(n,i),c(i,o),c(i,a),c(i,s),c(s,h),c(l,u),c(l,d),c(d,g),c(g,w),c(d,A),c(d,M);for(let L=0;L<C.length;L+=1)C[L].m(M,null);c(M,pe),c(M,I),c(I,_e),c(I,Le),c(d,Ne),c(d,te),c(te,me),c(d,Ce),c(d,he),c(d,Me),c(d,ie),c(ie,ne),c(ne,ve),c(d,Ae),c(d,oe),y(v,ge,E),S&&S.m(v,E),y(v,K,E),T=!0},p(v,E){if((!T||E&1&&!je(o.src,r="https://image.tmdb.org/t/p/w185"+v[0].poster_path))&&_(o,"src",r),(!T||E&1)&&f!==(f=v[0].vote_average+"")&&U(h,f),(!T||E&1)&&H(n,"background-image","url("+("https://image.tmdb.org/t/p/w185"+v[0].backdrop_path)+")"),(!T||E&1)&&p!==(p=(v[0].title||"loading...")+"")&&U(w,p),E&2){z=v[1];let L;for(L=0;L<z.length;L+=1){const Oe=qe(v,z,L);C[L]?C[L].p(Oe,E):(C[L]=Be(Oe),C[L].c(),C[L].m(M,pe))}for(;L<C.length;L+=1)C[L].d(1);C.length=z.length}(!T||E&1)&&ee!==(ee=v[0].runtime+"")&&U(_e,ee),(!T||E&1)&&le!==(le=v[0].tagline+"")&&U(me,le),(!T||E&1)&&re!==(re=(v[0].overview||"loading...")+"")&&U(ve,re),v[2]?S?(S.p(v,E),E&4&&k(S,1)):(S=De(v),S.c(),k(S,1),S.m(K.parentNode,K)):S&&(R(),N(S,1,1,()=>{S=null}),W())},i(v){T||(k(S),T=!0)},o(v){N(S),T=!1},d(v){v&&b(e),$e(C,v),v&&b(ge),S&&S.d(v),v&&b(K)}}}function Be(t){let e,l=t[6].name+"",n,i;return{c(){e=m("div"),n=O(l),i=$(),_(e,"class","chip svelte-7pkelf")},m(o,r){y(o,e,r),c(e,n),c(e,i)},p(o,r){r&2&&l!==(l=o[6].name+"")&&U(n,l)},d(o){o&&b(e)}}}function De(t){let e,l;return e=new Re({props:{title:"Cast",data:t[2]}}),{c(){X(e.$$.fragment)},m(n,i){D(e,n,i),l=!0},p(n,i){const o={};i&4&&(o.data=n[2]),e.$set(o)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){N(e.$$.fragment,n),l=!1},d(n){F(e,n)}}}function pt(t){let e,l,n,i=t[0]&&t[0].title&&ze(t);return{c(){e=m("main"),l=m("div"),i&&i.c(),_(e,"class","svelte-7pkelf")},m(o,r){y(o,e,r),c(e,l),i&&i.m(l,null),n=!0},p(o,[r]){o[0]&&o[0].title?i?(i.p(o,r),r&1&&k(i,1)):(i=ze(o),i.c(),k(i,1),i.m(l,null)):i&&(R(),N(i,1,1,()=>{i=null}),W())},i(o){n||(k(i),n=!0)},o(o){N(i),n=!1},d(o){o&&b(e),i&&i.d()}}}function _t(t,e,l){let n={},i=[],o=[],{id:r="634649"}=e,a=async f=>{if(!f)return;let u=await(await fetch(`https://api.themoviedb.org/3/movie/${f}?api_key=bbfbd3744c8bf9d4bf9de18f180b4d6c&append_to_response=videos,images`)).json();l(0,n=u),l(1,i=u.genres)},s=async f=>{if(!f)return;let u=await(await fetch(`https://api.themoviedb.org/3/movie/${f}/credits?api_key=bbfbd3744c8bf9d4bf9de18f180b4d6c`)).json();l(2,o=u.cast),console.log(o)};return t.$$set=f=>{"id"in f&&l(3,r=f.id)},t.$$.update=()=>{t.$$.dirty&8&&(a(r),s(r))},[n,i,o,r]}class mt extends x{constructor(e){super();Z(this,e,_t,pt,Y,{id:3})}}function Fe(t,e,l){const n=t.slice();return n[8]=e[l],n}function Ie(t){let e,l,n=t[3],i=[];for(let r=0;r<n.length;r+=1)i[r]=Ke(Fe(t,n,r));const o=r=>N(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=Se()},m(r,a){for(let s=0;s<i.length;s+=1)i[s].m(r,a);y(r,e,a),l=!0},p(r,a){if(a&9){n=r[3];let s;for(s=0;s<n.length;s+=1){const f=Fe(r,n,s);i[s]?(i[s].p(f,a),k(i[s],1)):(i[s]=Ke(f),i[s].c(),k(i[s],1),i[s].m(e.parentNode,e))}for(R(),s=n.length;s<i.length;s+=1)o(s);W()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)k(i[a]);l=!0}},o(r){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)N(i[a]);l=!1},d(r){$e(i,r),r&&b(e)}}}function Ke(t){let e,l,n;function i(r){t[6](r)}let o={url:t[8].url,title:t[8].title};return t[0]!==void 0&&(o.movie=t[0]),e=new Re({props:o}),B.push(()=>de(e,"movie",i)),{c(){X(e.$$.fragment)},m(r,a){D(e,r,a),n=!0},p(r,a){const s={};!l&&a&1&&(l=!0,s.movie=r[0],ce(()=>l=!1)),e.$set(s)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){F(e,r)}}}function Ge(t){let e,l,n;function i(r){t[7](r)}let o={};return t[0]!==void 0&&(o.id=t[0]),e=new mt({props:o}),B.push(()=>de(e,"id",i)),{c(){X(e.$$.fragment)},m(r,a){D(e,r,a),n=!0},p(r,a){const s={};!l&&a&1&&(l=!0,s.id=r[0],ce(()=>l=!1)),e.$set(s)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){F(e,r)}}}function ht(t){let e,l,n,i,o,r,a,s;function f(p){t[4](p)}function h(p){t[5](p)}let u={};t[1]!==void 0&&(u.search=t[1]),t[2]!==void 0&&(u.tab=t[2]),e=new ut({props:u}),B.push(()=>de(e,"search",f)),B.push(()=>de(e,"tab",h));let d=t[2]===1&&Ie(t),g=t[2]==2&&Ge(t);return a=new nt({}),{c(){X(e.$$.fragment),i=$(),d&&d.c(),o=$(),g&&g.c(),r=$(),X(a.$$.fragment)},m(p,w){D(e,p,w),y(p,i,w),d&&d.m(p,w),y(p,o,w),g&&g.m(p,w),y(p,r,w),D(a,p,w),s=!0},p(p,[w]){const A={};!l&&w&2&&(l=!0,A.search=p[1],ce(()=>l=!1)),!n&&w&4&&(n=!0,A.tab=p[2],ce(()=>n=!1)),e.$set(A),p[2]===1?d?(d.p(p,w),w&4&&k(d,1)):(d=Ie(p),d.c(),k(d,1),d.m(o.parentNode,o)):d&&(R(),N(d,1,1,()=>{d=null}),W()),p[2]==2?g?(g.p(p,w),w&4&&k(g,1)):(g=Ge(p),g.c(),k(g,1),g.m(r.parentNode,r)):g&&(R(),N(g,1,1,()=>{g=null}),W())},i(p){s||(k(e.$$.fragment,p),k(d),k(g),k(a.$$.fragment,p),s=!0)},o(p){N(e.$$.fragment,p),N(d),N(g),N(a.$$.fragment,p),s=!1},d(p){F(e,p),p&&b(i),d&&d.d(p),p&&b(o),g&&g.d(p),p&&b(r),F(a,p)}}}function vt(t,e,l){let n="hello",i,o=1,r=[{url:"https://api.themoviedb.org/3/trending/movie/day?",title:"trending movies"},{url:"https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=28",title:"discover movies"},{url:"https://api.themoviedb.org/3/movie/popular?",title:"popular movies"},{url:"https://api.themoviedb.org/3/movie/top_rated?",title:"top rated movies"},{url:"https://api.themoviedb.org/3/movie/upcoming?",title:"upcoming movies"},{url:"https://api.themoviedb.org/3/movie/now_playing?",title:"now playing movies"},{url:"https://api.themoviedb.org/3/movie/latest?",title:"latest movies"},{url:"https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=28",title:"Action movies"},{url:"https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=18",title:"Crime movies"},{url:"https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=12",title:"Adventure movies"},{url:"https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=16",title:"Animation movies"},{url:"https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=35",title:"Comedy movies"},{url:"https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=99",title:"trillers"}];function a(u){n=u,l(1,n)}function s(u){o=u,l(2,o),l(0,i)}function f(u){i=u,l(0,i)}function h(u){i=u,l(0,i)}return t.$$.update=()=>{t.$$.dirty&1&&(console.log("movie:",i),i&&l(2,o=2))},[i,n,o,r,a,s,f,h]}class gt extends x{constructor(e){super();Z(this,e,vt,ht,Y,{})}}new gt({target:document.getElementById("app")});
