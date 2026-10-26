const S={tee:'<path d="M30 25l-18 12 8 14 10-6v40h40V45l10 6 8-14-18-12c-4 8-12 10-20 10s-16-2-20-10z"/>',cup:'<path d="M28 30h38v30c0 10-8 16-19 16s-19-6-19-16z"/><path d="M66 38h8a8 8 0 010 18h-8" fill="none"/>',pil:'<rect x="20" y="32" width="60" height="38" rx="6"/>',note:'<rect x="30" y="20" width="40" height="60"/><path d="M38 36h24M38 46h24M38 56h16"/>',bag:'<path d="M28 38h44l4 42H24z"/><path d="M38 38v-6a12 12 0 0124 0v6" fill="none"/>'};
const P=[
{id:1,n:'오가닉 코튼 크루넥 티셔츠',c:'의류',p:19000,t:'#e8e0d2',k:'tee',nw:1,rc:1,d:'가공을 줄인 오가닉 코튼으로 짠 기본 티셔츠입니다. 세탁을 거듭할수록 부드러워집니다.',s:['소재: 면 100%','색상: 오트밀','사이즈: S / M / L']},
{id:2,n:'워시드 리넨 셔츠',c:'의류',p:39000,t:'#f1ece1',k:'tee',nw:1,rc:0,d:'워싱 가공으로 자연스러운 주름이 살아있는 리넨 셔츠. 계절을 가리지 않고 입을 수 있습니다.',s:['소재: 리넨 100%','색상: 아이보리','사이즈: M / L']},
{id:3,n:'스톤웨어 머그',c:'주방',p:12000,t:'#d9d0bf',k:'cup',nw:1,rc:1,d:'거친 질감을 그대로 살린 도기 머그. 손에 쥐었을 때 편안한 두께로 만들었습니다.',s:['용량: 300ml','소재: 도기','전자레인지 사용 가능']},
{id:4,n:'무염색 면 베개 커버',c:'홈',p:15000,t:'#efe9dc',k:'pil',nw:0,rc:1,d:'염색하지 않은 면 원단의 은은한 색을 그대로 담았습니다.',s:['소재: 면 100%','크기: 43×63cm','세탁기 사용 가능']},
{id:5,n:'재생지 노트 3권 세트',c:'문구',p:6500,t:'#e4dccb',k:'note',nw:1,rc:1,d:'재생지를 사용한 무지 노트. 만년필과 볼펜 모두 부드럽게 써집니다.',s:['크기: A5','페이지: 80매','3권 구성']},
{id:6,n:'캔버스 토트백',c:'의류',p:24000,t:'#d6cdbb',k:'bag',nw:0,rc:1,d:'두툼한 캔버스 원단으로 만든 토트백. 일상의 짐을 가볍게 담아줍니다.',s:['소재: 면 캔버스','크기: 36×40cm','내부 포켓 1개']},
{id:7,n:'우드 트레이',c:'주방',p:22000,t:'#e9e1d2',k:'pil',nw:0,rc:0,d:'결이 살아있는 원목 트레이. 식탁에서도, 책상 위에서도 쓰기 좋습니다.',s:['소재: 원목','크기: 30×20cm','오일 마감']},
{id:8,n:'리넨 블렌드 이불 커버',c:'홈',p:59000,t:'#f3eee4',k:'pil',nw:0,rc:1,d:'면과 리넨을 섞어 짠 이불 커버. 통기성이 좋아 사계절 사용할 수 있습니다.',s:['소재: 면 70% 리넨 30%','크기: 싱글 / 더블','세탁기 사용 가능']}];
const won=n=>n.toLocaleString('ko-KR')+'원';
const art=p=>`<div class="ph" style="background:${p.t}"><svg viewBox="0 0 100 100" aria-hidden="true">${S[p.k]}</svg></div>`;
const card=p=>`<a class="card" href="product.html?id=${p.id}">${art(p)}<h3>${p.n}</h3><span class="pr">${won(p.p)}</span></a>`;
const hd=document.getElementById('hd'),ft=document.getElementById('ft');
if(hd){hd.innerHTML='<div class="bar"><a class="logo" href="index.html">GYEOL<small>결</small></a><div class="rt"><nav id="nv"><a href="index.html#products">상품 카테고리</a><a href="login.html">로그인</a><a href="signup.html">회원가입</a><a href="about.html">회사소개</a><a href="mypage.html">마이페이지</a></nav><button id="cb" class="cbtn" type="button" aria-label="장바구니 열기"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 016 0v2"/></svg><span id="cc">0</span></button><button id="mb" type="button" aria-label="메뉴 열기">메뉴</button></div></div>';
document.getElementById('mb').onclick=()=>document.getElementById('nv').classList.toggle('open');}
if(ft){ft.innerHTML='<div class="wrap"><div class="fg"><div><h4>GYEOL 결</h4><p>자연의 결을 닮은 생활용품.<br>(주)결 · 대표 홍길동 · 서울시 중구 예시로 12<br>사업자등록번호 000-00-00000 (가상 브랜드)</p></div><div><h4>회사소개</h4><a href="about.html">브랜드 이야기</a><a href="about.html">오시는 길</a></div><div><h4>고객 안내</h4><a href="#">배송 · 교환 · 반품</a><a href="#">자주 묻는 질문</a><a href="#">고객센터 1234-5678<br>평일 10:00–17:00</a></div></div><p class="copy">© 2026 GYEOL. 본 사이트는 데모용 가상 브랜드입니다.</p></div>';}
const OPT={'의류':{n:'사이즈',v:['S','M','L']},'홈':{n:'크기',v:['싱글','더블']},'주방':{n:'색상',v:['내추럴','차콜']},'문구':{n:'구성',v:['3권 세트','6권 세트']}};
const MAXQ=10,keyOf=(id,o)=>id+'|'+o;
function clean(raw){const m=new Map();(Array.isArray(raw)?raw:[]).forEach(x=>{const p=x&&P.find(y=>y.id===+x.id);if(!p||typeof x.o!=='string')return;
const lb=OPT[p.c].n+': ';if(!x.o.startsWith(lb)||!OPT[p.c].v.includes(x.o.slice(lb.length)))return;
const q=Math.min(MAXQ,Math.floor(+x.q));if(!(q>=1))return;const k=keyOf(p.id,x.o),e=m.get(k);
if(e)e.q=Math.min(MAXQ,e.q+q);else m.set(k,{id:p.id,o:x.o,q})});return[...m.values()]}
let _c=[];
const getCart=()=>{let r;try{const s=localStorage.getItem('gy_cart');r=s===null?_c:JSON.parse(s)}catch(e){r=_c}return clean(r)};
const setCart=c=>{c=clean(c);_c=c;try{localStorage.setItem('gy_cart',JSON.stringify(c))}catch(e){}renderCart();return c};
const Cart={
add(id,o,q){const c=getCart(),k=keyOf(id,o),f=c.find(x=>keyOf(x.id,x.o)===k);let cap=false;
if(f){cap=f.q+q>MAXQ;f.q=Math.min(MAXQ,f.q+q)}else c.push({id,o,q:Math.min(MAXQ,q)});setCart(c);return cap},
setQty(k,q){const c=getCart(),f=c.find(x=>keyOf(x.id,x.o)===k);if(f){f.q=Math.max(1,Math.min(MAXQ,q));setCart(c)}},
remove(k){setCart(getCart().filter(x=>keyOf(x.id,x.o)!==k))},
clear(){setCart([])},
count(){return getCart().reduce((a,x)=>a+x.q,0)},
lines(){return getCart().map(x=>{const p=P.find(y=>y.id===x.id);return{...x,p,key:keyOf(x.id,x.o),sum:p.p*x.q}})},
total(){return Cart.lines().reduce((a,l)=>a+l.sum,0)},
verify(){const L=Cart.lines();return L.every(l=>Number.isInteger(l.q)&&l.q>=1&&l.q<=MAXQ&&l.sum===l.p.p*l.q)&&new Set(L.map(l=>l.key)).size===L.length&&Cart.total()===L.reduce((a,l)=>a+l.p.p*l.q,0)}};
let _o=null;const getOrder=()=>{try{return JSON.parse(localStorage.getItem('gy_order'))}catch(e){return _o}};
const setOrder=o=>{_o=o;try{o?localStorage.setItem('gy_order',JSON.stringify(o)):localStorage.removeItem('gy_order')}catch(e){}};

const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const _m={};const ld=(k,d)=>{try{const s=localStorage.getItem(k);return s===null?(k in _m?_m[k]:d):JSON.parse(s)}catch(e){return k in _m?_m[k]:d}};
const sv=(k,v)=>{_m[k]=v;try{v===null?localStorage.removeItem(k):localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const STEPS=['결제 완료','상품 준비중','배송 중','배송 완료'];
const getOrders=()=>{const a=ld('gy_orders',[]);return(Array.isArray(a)?a:[]).filter(o=>o&&o.no&&o.t&&Array.isArray(o.items)).map(o=>({...o,items:clean(o.items)})).filter(o=>o.items.length)};
const addOrder=o=>sv('gy_orders',[o,...getOrders()].slice(0,50));
const statusOf=o=>{const s=(Date.now()-o.t)/1000;return s<30?0:s<90?1:s<300?2:3};
const oTotal=o=>o.items.reduce((a,x)=>a+P.find(y=>y.id===x.id).p*x.q,0);
const dt=t=>new Date(t).toLocaleString('ko-KR',{dateStyle:'medium',timeStyle:'short'});
document.body.insertAdjacentHTML('beforeend','<div id="cov" class="cov"></div><aside id="cp" class="cp" role="dialog" aria-label="장바구니" aria-hidden="true"><div class="ch"><h2>장바구니</h2><button type="button" id="cx">닫기</button></div><div id="cbd" class="cbd"></div><div id="cft" class="cft"></div></aside>');
function renderCart(){const cc=document.getElementById('cc');if(!cc)return;const L=Cart.lines(),n=Cart.count(),bd=document.getElementById('cbd'),ft=document.getElementById('cft');
cc.textContent=n;
if(!L.length){bd.innerHTML='<div class="ce"><p>장바구니가 비어 있습니다</p><button class="btn" type="button" id="cs2">쇼핑 계속하기</button></div>';ft.innerHTML='';}
else{bd.innerHTML=L.map(l=>`<div class="ci">${art(l.p)}<div><a href="product.html?id=${l.p.id}">${l.p.n}</a><small>${l.o}</small><span class="u">${won(l.p.p)}</span><div class="qty"><button type="button" data-a="d" data-k="${l.key}" aria-label="수량 감소">−</button><span>${l.q}</span><button type="button" data-a="u" data-k="${l.key}" aria-label="수량 증가">+</button></div></div><div class="ca"><b>${won(l.sum)}</b><button class="x" type="button" data-a="x" data-k="${l.key}">삭제</button></div></div>`).join('');
ft.innerHTML=`<p class="rw"><span>총 수량</span><b>${n}개</b></p><p class="rw tt"><span>총금액</span><b>${won(Cart.total())}</b></p><button class="btn" type="button" id="go">주문하기</button><p class="cc"><button class="x" type="button" id="ca">장바구니 비우기</button></p>`;}
try{window.onCartChange&&window.onCartChange()}catch(e){}}
function openCart(){renderCart();['cp','cov'].forEach(i=>document.getElementById(i).classList.add('open'));document.getElementById('cp').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.getElementById('cx').focus()}
function closeCart(){['cp','cov'].forEach(i=>document.getElementById(i).classList.remove('open'));document.getElementById('cp').setAttribute('aria-hidden','true');document.body.style.overflow='';const b=document.getElementById('cb');if(b)b.focus()}
document.getElementById('cb').onclick=openCart;document.getElementById('cx').onclick=closeCart;document.getElementById('cov').onclick=closeCart;
addEventListener('keydown',e=>{if(e.key==='Escape')closeCart()});
addEventListener('hashchange',()=>{if(document.getElementById('cp').classList.contains('open'))closeCart()});
addEventListener('storage',e=>{if(e.key==='gy_cart')renderCart()});
document.getElementById('cbd').onclick=e=>{const t=e.target;if(t.id==='cs2'){closeCart();location.href='index.html#products';return}
const a=t.dataset.a,k=t.dataset.k,l=Cart.lines().find(x=>x.key===k);if(!a||!l)return;
if(a==='u')Cart.setQty(k,l.q+1);else if(a==='d')Cart.setQty(k,l.q-1);else if(a==='x')Cart.remove(k)};
document.getElementById('cft').onclick=e=>{const i=e.target.id;if(i==='go'&&Cart.count()){setOrder({items:getCart(),fromCart:true});closeCart();location.href='order.html'}else if(i==='ca')Cart.clear()};
renderCart();
