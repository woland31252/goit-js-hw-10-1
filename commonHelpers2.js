import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form");m.addEventListener("submit",r);function r(s){s.preventDefault();const o=s.target.elements;console.log(o);const n=o.state.value,t=o.delay.value;console.log(n),new Promise((e,l)=>{setTimeout(()=>{n=="fulfilled"?e(t):l(t)},t)}).then(e=>{i.info({message:`✅ Fulfilled promise in ${e}ms`,position:"topCenter"})}).catch(e=>{i.warning({message:`❌ Rejected promise in ${e}ms`,position:"topCenter"})})}
//# sourceMappingURL=commonHelpers2.js.map