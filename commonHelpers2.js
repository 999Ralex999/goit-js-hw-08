import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as o,l as a}from"./assets/vendor-54f045dd.js";const i=document.querySelector("iframe"),t=new o(i),e=JSON.parse(localStorage.getItem("videoplayer-current-time"));e&&t.setCurrentTime(e);function l({seconds:r}){localStorage.setItem("videoplayer-current-time",JSON.stringify(r))}t.on("timeupdate",a.throttle(l,1e3));
//# sourceMappingURL=commonHelpers2.js.map